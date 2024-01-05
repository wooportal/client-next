import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageMenuDialogComponent } from './dialog/admin-settings-page-menu-dialog.component';

@Component({
  selector: 'app-admin-settings-page-menu',
  templateUrl: './admin-settings-page-menu.component.html',
  styleUrls: ['./admin-settings-page-menu.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AdminSettingsPageMenuComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: AdminSettingsPageMenuComponent
    },
  ],
})
export class AdminSettingsPageMenuComponent implements ControlValueAccessor, Validator, OnDestroy {

  public form = this.fb.group({
    menuItems: this.fb.array([] as Maybe<MenuItemEntity>[])
  });

  public disabled?: boolean;

  private onChange?: (menuItems: Maybe<MenuItemEntity>[]) => void;
  private onTouch?: () => void;
  private onValidate?: () => void;

  private destroy = new Subject<void>();

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
  ) {
    this.form.controls.menuItems.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(value => {
        this.onTouch?.();
        if (this.form.controls.menuItems.valid) {
          this.onTouch?.();
          this.onChange?.(value)
        }
      });

    this.form.controls.menuItems.statusChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(() => this.onValidate?.())
  }

  public get menuItems(): FormArray {
    return this.form.controls.menuItems as FormArray;
  }

  public added(): void {
    this.dialog.open(AdminSettingsPageMenuDialogComponent)
      .afterClosed()
      .pipe(takeUntil(this.destroy))
      .subscribe((menuItem: MenuItemEntity) => {
        if (menuItem) {
          this.form?.controls.menuItems.push(this.fb.control(menuItem));
          this.cdr.detectChanges();
        }
      });
  }

  public validate(): ValidationErrors | null {
    return this.form.controls.menuItems.invalid
      ? { menuItemsInvalid: true }
      : null;
  }

  public writeValue(value: Maybe<MenuItemEntity>[]): void {
    value?.forEach(menuItem => {
      if (menuItem) {
        this.form?.controls.menuItems.push(this.fb.control(menuItem));
      }
    });

    this.cdr.detectChanges();
  }

  public registerOnChange(onChange: (menuItems: Maybe<MenuItemEntity>[]) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouch: () => void): void {
    this.onTouch = onTouch;
  }

  public registerOnValidatorChange?(onValidate: () => void): void {
    this.onValidate = onValidate;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}