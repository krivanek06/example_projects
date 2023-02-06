import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-detection-square',
  templateUrl: './change-detection-square.component.html',
  styleUrls: ['./change-detection-square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionSquareComponent implements OnInit, OnChanges, DoCheck {
  @Input() title: string = '';
  @Input() startInterval = false;
  form!: FormGroup;

  //interval$!: Observable<number>;
  intervalNumber!: number;

  get name(): AbstractControl {
    return this.form.get('name') as AbstractControl;
  }

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  ngDoCheck(): void {
    console.log(`${this.title}: do check`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`${this.title}:`, changes)
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null]
    })

    // if (this.startInterval) {
    //   interval(1000).subscribe(res => this.intervalNumber = res);
    // }

    setTimeout(() => {
      this.title = `${this.title}: interval`
    }, 3000)
  }

  submit(): void {
    console.log(`${this.title}: ${this.name.value} `);
    this.cd.detectChanges();
  }

}
