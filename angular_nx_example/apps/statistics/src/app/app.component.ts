import { Component, OnInit } from '@angular/core';
// import { toUpper } from 'lodash';
@Component({
  selector: 'ct-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'statistics';

  ngOnInit() {
    console.log('aaaa');
    // console.log(toUpper('statistics'));
  }
}
