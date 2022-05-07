import { ApplicationRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {

  constructor(private applicationRef: ApplicationRef) { }

  ngOnInit(): void {
    // this.monitorChangeDetection();
  }

  private monitorChangeDetection() {
    const originalTick = this.applicationRef.tick;
    this.applicationRef.tick = function () {
      const windowPerfomance = window.performance;
      const before = windowPerfomance.now();
      const retValue = originalTick.apply(this, []);
      const after = windowPerfomance.now();
      const runTime = after - before;
      window.console.log('CHANGE DETECTION TIME', runTime);
      return retValue;
    };
  }

}
