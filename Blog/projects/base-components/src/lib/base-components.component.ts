import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-BaseComponents',
  template: `
    <p>
      base-components works!
    </p>
  `,
  styles: []
})
export class BaseComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
