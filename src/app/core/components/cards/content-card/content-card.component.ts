import { Component, Input } from '@angular/core';
import { CardInput } from 'src/app/core/typings/card';



@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  @Input()
  public data: CardInput = { dateTime: true };

}