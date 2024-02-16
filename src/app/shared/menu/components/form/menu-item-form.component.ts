import { Component, EventEmitter, OnDestroy, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { TranslationService } from 'ngx-cinlib/i18n';
import { SolidIconsType } from 'ngx-cinlib/icons';
import { ConfirmService, ConfirmType } from 'ngx-cinlib/modals/confirm';
import { Subject, combineLatest, takeUntil } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-menu-item-form',
  templateUrl: './menu-item-form.component.html',
  styleUrls: ['./menu-item-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MenuItemFormComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: MenuItemFormComponent
    },
  ]
})
export class MenuItemFormComponent implements ControlValueAccessor, Validator, OnDestroy {
  
  @Output()
  public deleted = new EventEmitter<void>();

  public form = this.fb.group({
    id: ['' as Maybe<string>],
    icon: [undefined as Maybe<SolidIconsType>],
    name: ['' as Maybe<string>, [Validators.required]],
    shortDescription: ['' as Maybe<string>],
    order: [undefined as Maybe<number>],
    parent: [undefined as Maybe<MenuItemEntity>],
  });

  private onChange?: (menuItem: Maybe<MenuItemEntity>) => void;
  private onTouch?: () => void;
  private onValidate?: () => void;

  private destroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private confirmService: ConfirmService,
    private translationService: TranslationService,
  ) {
    this.form.valueChanges
    .pipe(
      takeUntil(this.destroy)
    ).subscribe(value => {
      this.onTouch?.();
      this.onChange?.({
        id: value.id,
        icon: value.icon,
        name: value.name,
        shortDescription: value.shortDescription,
        order: value.order,
        parent: {
          id: value.parent?.id
        },
      });
      this.onValidate?.();
    });
  
  }

  public onDelete(): void {
    this.confirmService
      .confirm({ type: ConfirmType.Delete })
      .pipe(takeUntil(this.destroy))
      .subscribe((confirmed: boolean) => {
        this.onTouch?.();

        if (confirmed) {
          this.deleted.emit();
        }
      });
  }   

  public writeValue(menuItem: Maybe<MenuItemEntity>): void {

    if (menuItem) {
      combineLatest([
        this.translationService.translatable(menuItem, 'name'),
        this.translationService.translatable(menuItem, 'shortDescription')
      ])
      .pipe(takeUntil(this.destroy))
      .subscribe(([name, shortDescription]) => {this.form.setValue({
          id: menuItem.id ?? '',
          icon: menuItem.icon as Maybe<SolidIconsType>,
          order: menuItem.order,
          parent: menuItem.parent,
          name,
          shortDescription});
          });
      }
  }

  public registerOnChange(onChange: (menuItem: Maybe<MenuItemEntity>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouch: () => void): void {
    this.onTouch = onTouch;
  }

  public registerOnValidatorChange?(onValidate: () => void): void {
    this.onValidate = onValidate;
  }

  public validate(): ValidationErrors | null {
    return this.form.invalid
      ? { menuFormInvald: true }
      : null;
  }

  public setDisabledState?(isDisabled: boolean): void {
    isDisabled
      ? this.form.disable()
      : this.form.enable();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
