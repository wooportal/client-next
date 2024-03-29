import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maybe } from 'src/app/core/api/generated/schema';
import { ContentData, ContentEntity } from 'src/app/core/typings/content-entity';
import { dataToElement } from 'src/app/shared/widgets/card/utils/card.utils';
import { CardActionInput, CardActionOutput, CardElement } from '../../../typings/card';

@Component({
  selector: 'app-sponsored-desktop-card',
  templateUrl: './sponsored-desktop-card.component.html',
  styleUrls: ['./sponsored-desktop-card.component.scss'],
})
export class SponsoredDesktopCardComponent implements OnInit {

  @Input()
  public actions?: CardActionInput[];
  
  @Input()
  public entity?: Maybe<ContentEntity>;

  @Input()
  public data?: Maybe<ContentData>;

  @Output()
  public actionClicked = new EventEmitter<CardActionOutput>();

  public element?: Maybe<CardElement>;

  public ngOnInit(): void {
    if (this.entity && this.data) {
      this.element = dataToElement(this.entity, this.data);
    }
  }

  public emit(action: CardActionInput): void {
    this.actionClicked.emit({ ...action, element: this.element as CardElement })
  }
  
}
