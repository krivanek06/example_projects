import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-example-ng-template',
  templateUrl: './example-ng-template.component.html',
  styleUrls: ['./example-ng-template.component.scss'],
})
export class ExampleNgTemplateComponent implements OnInit {
  /* reference where do we want to render something */
  @ViewChild('container2', { read: ViewContainerRef }) container2: ViewContainerRef;

  /* reference to html element */
  @ViewChild('container2', { read: ElementRef }) container2Copy: ElementRef;

  /* reference what we want to render */
  @ViewChild('template_1') template_1: TemplateRef<unknown>;

  counter = 0;

  constructor() {}

  ngOnInit(): void {}

  onReveal(): void {
    const view = this.template_1.createEmbeddedView({ variable: this.counter });

    // clear previous view & insert
    this.container2.clear();
    this.container2.insert(view);

    this.counter++;

    // reference must be DIV if we want to reference for nativeElement
    console.log(this.container2.element.nativeElement.innerText);
    console.log(this.container2Copy.nativeElement.innerText);
    console.log('=========');
  }
}
