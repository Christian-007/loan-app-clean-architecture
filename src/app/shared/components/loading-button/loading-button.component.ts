import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss'],
})
export class LoadingButtonComponent {
  @Input() text: string;
  @Input() loadingText: string;
  @Input() isLoading: boolean;

  constructor() {
    this.text = 'undefined';
    this.loadingText = 'Loading...';
    this.isLoading = false;
  }
}
