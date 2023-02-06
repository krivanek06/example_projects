import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-square-onpush',
  templateUrl: './change-detection-square-onpush.component.html',
  styleUrls: ['./change-detection-square-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionSquareOnpushComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
