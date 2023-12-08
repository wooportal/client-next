import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';

@Component({
  selector: 'app-mail-piece',
  templateUrl: './mail-piece.component.html',
  styleUrls: ['./mail-piece.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class MailPieceComponent {

  @Input()
  public mail?: Maybe<string>;

}
