import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-test-ui-useless-component',
  templateUrl: './ui-useless-component.component.html',
  styleUrls: ['./ui-useless-component.component.scss'],
})
export class UiUselessComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Useless');
  }
}
