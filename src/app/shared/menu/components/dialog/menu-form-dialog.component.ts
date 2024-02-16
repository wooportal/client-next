import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, map, takeUntil } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { MenuFormActions } from '../../state/menu-form.actions';
import { selectParentMenuItems } from '../../state/menu-form.selectors';

type MenuFormInput = {
  menu?: Maybe<MenuItemEntity>,
  newEntity?: boolean
};

@Component({
  selector: 'app-menu-form-dialog',
  templateUrl: './menu-form-dialog.component.html',
  styleUrls: ['./menu-form-dialog.component.scss'],
})
export class MenuFormDialogComponent implements OnDestroy {


  public parentMenuItems = this.store.select(selectParentMenuItems);

  public form = this.fb.group({
    parent: [undefined as Maybe<MenuItemEntity>],
    items: [[] as MenuFormInput[]],
  });

  private destroy = new Subject<void>();

  constructor(
    private dialogRef: MatDialogRef<MenuFormDialogComponent>,
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.store.dispatch(MenuFormActions.getParentMenuItems());

    this.form.controls.parent.valueChanges
      .pipe(
        map(parentMenu => parentMenu?.subMenuItems
          ?.sort((a, b) => (a?.order || 0) - (b?.order || 0))
        ),
        takeUntil(this.destroy)
      ).subscribe(items => this.form.patchValue({
          items: [
            ...[{ newEntity: true }],
            ...items?.map(menu => ({
              menu,
              newEntity: false,
            })) ?? []
          ]
        })
      );
  }

  public sorted(indices: number[]): void {
    this.form.patchValue({
      items: indices.map(sort => ({
        ...this.form.value.items?.[sort],
      }))
    });
  }

  public saved(): void {
    this.store.dispatch(MenuFormActions.saveParentMenu({
      id: this.form.value.parent?.id,
      subMenuItems: this.form.value.items
        ?.map((item, order) => item.menu
          ? { 
              id: item.menu.id,
              icon: item.menu.icon,
              header: item.menu.header,
              order
            } as MenuItemEntity
          : undefined)
        ?.filter(item => !!item)
    }));

    this.dialogRef.close({
      order: this.form.value.items?.findIndex(item => item.newEntity),
      parent: this.form.value.parent
    } as MenuItemEntity);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}