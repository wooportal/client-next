import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, take, takeUntil } from 'rxjs';
import { selectIsAuthenticated } from 'src/app/core/state/selectors/user.selectors';
import { Maybe } from 'src/schema/schema';
import { Comment } from '../../typings/comment';
import { CommentDialogComponent } from '../dialog/comment-dialog.component';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnDestroy {

  @Input()
  public comment?: Maybe<Comment>;

  @Input()
  public overviewRoute?: string[];

  @Output()
  public content = new EventEmitter<string>();

  private destroy = new Subject<void>();

  constructor(
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router,
    public store: Store,
  ) { }

  public openDialog(): void {
    this.store.select(selectIsAuthenticated)
      .pipe(take(1))
      .subscribe(authenticated => authenticated
        ? this.dialog.open(CommentDialogComponent).afterClosed()
            .pipe(takeUntil(this.destroy))
            .subscribe((result) => {
              if (result) {
                this.content.emit(result);
              }
            })
        : this.router.navigate(['/user', 'login-required']));
  }

  public routeOverview(): void {
    this.overviewRoute
      ? this.router.navigate(this.overviewRoute)
      : this.router.navigate(['./comments'], { relativeTo: this.activatedRoute });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
