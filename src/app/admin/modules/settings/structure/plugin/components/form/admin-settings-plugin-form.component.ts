import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, MenuItemEntity, MenuItemTranslatableEntity, PluginEntity } from 'src/app/core/api/generated/schema';

import { ActivatedRoute } from '@angular/router';
import { id } from 'src/app/core/constants/queryparam.constants';
import { AdminSettingsPluginActions } from '../../state/admin-settings-plugin.actions';
import { selectPlugin } from '../../state/admin-settings-plugin.selectors';

@Component({
  selector: 'app-admin-settings-plugin-form',
  templateUrl: './admin-settings-plugin-form.component.html',
  styleUrls: ['./admin-settings-plugin-form.component.scss'],
})
export class AdminSettingsPluginFormComponent implements OnInit, OnDestroy {

  public menuForm = this.fb.group({
    menuItems: [] as Maybe<Maybe<MenuItemEntity>[]>
  });
  
  public defaultMenuItem?: Maybe<MenuItemEntity>;

  private plugin?: Maybe<PluginEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store) {
  }

  public ngOnInit(): void {
    
    this.activatedRoute?.params.pipe(
      filter(params => !!params[id]),
      tap(params => this.store.dispatch(AdminSettingsPluginActions.getPlugin(params[id]))),
      switchMap(() => this.store.select(selectPlugin)),
      filter(plugin => !!plugin),
      takeUntil(this.destroy)
      ).subscribe(plugin => {
        this.plugin = plugin;
      this.defaultMenuItem = {
        // name: plugin?.name,
        // shortDescription: plugin?.shortDescription,
        translatables: plugin?.translatables as MenuItemTranslatableEntity[],
        icon: plugin?.icon
      }

      this.menuForm.patchValue({
        menuItems: plugin?.menuItems
      });

    });
  }

  public cancelled(): void {
    this.store.dispatch(AdminSettingsPluginActions.cancelled());
  }

  public saved(): void {
    console.log("plugin", this.plugin);
    console.log("menuitems", this.menuForm.value.menuItems);
    this.store.dispatch(AdminSettingsPluginActions.savePlugin({
      id: this.plugin?.id,
      menuItems: this.menuForm.value.menuItems
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}