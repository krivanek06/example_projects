import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, combineLatest, concatMap, exhaustMap, mergeMap, switchMap } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-higher-order-mapping',
  templateUrl: './rxjs-higher-order-mapping.component.html',
  styleUrls: ['./rxjs-higher-order-mapping.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
})
export class RxjsHigherOrderMappingComponent implements OnInit {
  form!: FormGroup;

  private url = 'https://flash-the-slow-api.herokuapp.com/delay/4000';
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  get switchMapField(): AbstractControl {
    return this.form.get('switchMapField') as AbstractControl;
  }

  get margeMapField(): AbstractControl {
    return this.form.get('margeMapField') as AbstractControl;
  }

  get concatMapField(): AbstractControl {
    return this.form.get('concatMapField') as AbstractControl;
  }

  get exhaustMapField(): AbstractControl {
    return this.form.get('exhaustMapField') as AbstractControl;
  }

  ngOnInit(): void {
    this.initForm();

    this.initSwitchMap();
    this.initExhaustMap();
    this.initConcatMap();
    this.initMergeMap();

    this.withLatestFromTest();
    this.combineLatestTest();
  }

  private makeRequest(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(),
    };

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.get(this.url, httpOptions);
  }

  /*
    Used when needed value from multiple observable [user, groups, tickets] , but reacting only on user change
  */
  private withLatestFromTest(): void {
    this.switchMapField.valueChanges
      .pipe(withLatestFrom(this.concatMapField.valueChanges, this.margeMapField.valueChanges))
      .subscribe((x) => console.log('with latest from', x));
  }

  /*
    Used when we need to react on each value when they change (and are not null)
    i.e. : when want to get only groups in which user is part of
  */
  private combineLatestTest(): void {
    combineLatest([
      this.switchMapField.valueChanges,
      this.concatMapField.valueChanges,
      this.margeMapField.valueChanges,
    ]).subscribe((x) => console.log('combine latest', x));
  }

  private initExhaustMap(): void {
    this.exhaustMapField.valueChanges
      .pipe(exhaustMap(() => this.makeRequest()))
      .subscribe((res) => console.log('exhaust map', res));
  }

  private initConcatMap(): void {
    this.concatMapField.valueChanges
      .pipe(concatMap(() => this.makeRequest()))
      .subscribe((res) => console.log('concat map', res));
  }

  private initMergeMap(): void {
    this.margeMapField.valueChanges
      .pipe(mergeMap(() => this.makeRequest()))
      .subscribe((res) => console.log('merge map', res));
  }

  private initSwitchMap(): void {
    this.switchMapField.valueChanges
      .pipe(switchMap(() => this.makeRequest()))
      .subscribe((res) => console.log('switchMap', res));
  }

  private initForm(): void {
    this.form = this.fb.group({
      switchMapField: [],
      margeMapField: [],
      concatMapField: [],
      exhaustMapField: [],
    });
  }
}
