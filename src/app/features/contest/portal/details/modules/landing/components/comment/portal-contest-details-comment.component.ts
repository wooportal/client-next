import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ContestPortalDetailsLandingActions } from '../../state/portal-contest-details-landing.actions';
import { selectContestDetails } from '../../state/portal-contest-details-landing.selectors';


@Component({
  selector: 'app-portal-contest-details-comment',
  templateUrl: './portal-contest-details-comment.component.html',
  styleUrls: ['./portal-contest-details-comment.component.scss']
})
export class ContestPortalDetailsCommentComponent {

  public lastComment = this.store.select(selectContestDetails)
    .pipe(map(contest => contest?.lastContestComment));

  constructor(
    private store: Store) { }

  public saveComment(content: string): void {
    this.store.dispatch(ContestPortalDetailsLandingActions.saveContestComment({
      content,
    }));
  }
}