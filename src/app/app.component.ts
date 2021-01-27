import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  inputYEN = new FormControl('');
  inputUSD = new FormControl('');

  USDtoYEN = 113;
  YENtoUSD = 0.0088;

  constructor() {}

  ngOnInit() {
    this.inputYEN.valueChanges.subscribe((val) =>
      this.inputUSD.setValue(val * this.YENtoUSD, { emitEvent: false }),
    );
    this.inputUSD.valueChanges.subscribe((val) =>
      this.inputYEN.setValue(val * this.USDtoYEN, { emitEvent: false }),
    );
  }
}
