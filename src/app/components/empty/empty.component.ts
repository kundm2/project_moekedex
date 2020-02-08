import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  template: `
  <div class="center-on-page">
    <div class="pokeball">
      <div class="pokeball__button"></div>
    </div>
  </div>
  `,
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
