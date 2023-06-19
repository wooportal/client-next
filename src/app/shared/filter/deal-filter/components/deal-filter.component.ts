import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, debounceTime, take, takeUntil } from 'rxjs';
import { collapse } from 'src/app/core/animations/animations';
import { DealFilterQueryDefinition, DealFilterQueryParams } from 'src/app/core/typings/filter-param';
import { FilterSortPaginateInput, Maybe } from 'src/schema/schema';
import { DealFilterActions } from '../state/deal-filter.actions';
import { selectDealFilterParams, selectFiltersActive, selectRawFilterParams } from '../state/deal-filter.selectors';

@Component({
  selector: 'app-deal-filter',
  templateUrl: './deal-filter.component.html',
  styleUrls: ['./deal-filter.component.scss'],
  animations: [
     collapse()
  ],
})
export class DealFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<DealFilterQueryParams>();

  public disableOfferFilter?: Maybe<boolean>;
  
  public disableSearchFilter?: Maybe<boolean>;
  
  public filtersActive = this.store.select(selectFiltersActive);

  private destroy = new Subject<void>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.updateWithQueryParams();
  }
  
  public ngOnInit(): void {
    this.store.select(selectDealFilterParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.paramsUpdated.emit(params));

    this.store.select(selectRawFilterParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(params => {
        this.disableSearchFilter = typeof params[DealFilterQueryDefinition.offerOnly] === 'string'
          ? params[DealFilterQueryDefinition.offerOnly] === 'true'
          : params[DealFilterQueryDefinition.offerOnly];

        this.disableOfferFilter = typeof params[DealFilterQueryDefinition.searchOnly] === 'string'
          ? params[DealFilterQueryDefinition.searchOnly] === 'true'
          : params[DealFilterQueryDefinition.searchOnly];

        this.rawParamsUpdated.emit(params);
      });
  }

  @HostListener('window:popstate', ['$event'])
  public onBrowserNavigation(): void {
    this.updateWithQueryParams();
  }

  private updateWithQueryParams(): void {
    this.activatedRoute.queryParams
      .pipe(
        debounceTime(0), //TODO: race condition between browser navigation and queryparams
        take(1)
    ).subscribe(params => this.store.dispatch(DealFilterActions.updateAll(params)));
  }

  public clearFilters(): void {
    this.store.dispatch(DealFilterActions.clearAll());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}