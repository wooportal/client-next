import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { MenuFormDialogComponent } from './dialog/menu-form-dialog.component';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MenuFormComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: MenuFormComponent
    },
  ],
})
export class MenuFormComponent implements ControlValueAccessor, Validator, OnDestroy {

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
        if (this.menuItems.valid) {
          this.onTouch?.();
          this.onChange?.(value.map(item => ({
            id: item?.id,
            icon: item?.icon,
            name: item?.name,
            shortDescription: item?.shortDescription,
            order: item?.order,
            parent: {
              id: item?.parent?.id
            }
          })));
        }
      });

    this.menuItems.statusChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(() => this.onValidate?.())
  }

  public added(): void {
    this.dialog.open(MenuFormDialogComponent)
      .afterClosed()
      .pipe(takeUntil(this.destroy))
      .subscribe((menuItem: MenuItemEntity) => {
        if (menuItem) {
          this.menuItems.push(this.fb.control(menuItem));
          this.cdr.detectChanges();
        }
      });
  }

  public onDelete(index: number): void {
    this.menuItems.removeAt(index);
  }

  public validate(): ValidationErrors | null {
    return this.form.controls.menuItems.invalid
      ? { menuItemsInvalid: true }
      : null;
  }

  public writeValue(value: Maybe<MenuItemEntity>[]): void {
    this.menuItems.clear();
    value?.forEach(menuItem => {
      if (menuItem) {
        this.menuItems.push(this.fb.control(menuItem));
      }
    });

    this.cdr.detectChanges();
  }

  public get menuItems(): FormArray {
    return this.form.controls.menuItems as FormArray;
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