import { Component, OnInit, Input, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
export class InputComponent implements OnInit {
  @Input()
  public label = ''

  @Input()
  public placeholder = ''

  @Input()
  public set value(value: string) {
    if (value !== this._value) {
      this._value = value
      this.valueChange.next(value);
    }
  }

  public get value() {
    return this._value
  }

  @Output()
  public valueChange = new ReplaySubject(1);


  private _value: string

  constructor() { }

  ngOnInit(): void {
  }

}
