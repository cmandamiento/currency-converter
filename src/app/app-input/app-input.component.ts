import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
})
export class AppInputComponent {
  @Input() title: string;
  @Input() placeholder: string = '';
  @Input() control: FormControl;

  usdDisplayText: number;
  constructor() {}

  convertToUsd(newYen) {}

  getUsdDisplayText() {
    return 0;
  }
}
