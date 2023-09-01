import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Maybe } from 'src/app/core/api/generated/schema';
import { ShareDialogComponent } from '../dialog/share-dialog.component';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss'],
})

export class ShareButtonComponent {

  @Input()
  public url?: string;

  @Input()
  public withLabel = false;

  public shareWithOthersLabel = 'shareWithOthers';

  constructor(
    public dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog.open(ShareDialogComponent, {
      data: this.url
    }); 
  }

  public createTooltip(): Maybe<string> {
    return this.withLabel
      ? null
      : this.shareWithOthersLabel;
  }

}
