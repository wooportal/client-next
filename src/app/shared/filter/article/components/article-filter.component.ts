import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Maybe, collapse } from 'ngx-cinlib/core';
import { FilterService } from 'ngx-cinlib/filters';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { ArticleFilterQueryDefinition, ArticleFilterQueryParams } from 'src/app/core/typings/filter-params/article-filter-param';
import { transformFn } from '../utils/transform.utils';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss'],
  animations: [
    collapse()
  ],
})
export class ArticleFilterComponent implements OnInit, OnDestroy {

  @Output()
  public paramsUpdated = new EventEmitter<FilterSortPaginateInput>();

  @Output()
  public rawParamsUpdated = new EventEmitter<Maybe<ArticleFilterQueryParams>>();
  
  private destroy = new Subject<void>();
  
  constructor(
    private filterService: FilterService,
  ) { }
  
  public ngOnInit(): void {
    this.filterService.init(ArticleFilterQueryDefinition);

    this.filterService.queryParams()
      .pipe(takeUntil(this.destroy))
      .subscribe(params => {
        this.rawParamsUpdated.next(params);
        this.paramsUpdated.next(transformFn(params));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}