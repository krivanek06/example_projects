import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  DoCheck,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FakedResponseData, getSyncResponse, PluginComponent } from './example-dynamic-components.model';
import { PluginOneComponent } from './plugin-one/plugin-one.component';
import { PluginTwoComponent } from './plugin-two/plugin-two.component';

@Component({
  selector: 'app-example-dynamic-components',
  templateUrl: './example-dynamic-components.component.html',
  styleUrls: ['./example-dynamic-components.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDynamicComponentsComponent implements OnInit, AfterViewInit, OnDestroy, DoCheck {
  // basic templates
  @ViewChild('template1', { static: true, read: ViewContainerRef })
  template1!: ViewContainerRef;

  @ViewChild('template2', { static: false, read: ViewContainerRef })
  template2!: ViewContainerRef;

  // template inside ngIf
  @ViewChild('template3', { static: false, read: ViewContainerRef })
  template3!: ViewContainerRef;

  isTemplate3Visible = false;

  // reference to all dynamic components that we can delete them
  private templateRef: ComponentRef<PluginComponent>[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.generateForViewRef(this.template1);

    // error: undefined
    // this.generateForViewRef(this.template2);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterViewInit(): void {
    // Error: ExpressionChangedAfterItHasBeenCheckedError -> uncomment detect changes
    this.generateForViewRef(this.template2);
    // this.cd.detectChanges();

    setTimeout(() => {
      this.isTemplate3Visible = true;
    }, 200);
  }

  onGetDataClick(): void {
    // Error if OnPush is set & change detection not called
    // this.cd.detectChanges();
    this.generateForViewRef(this.template3);
  }

  ngOnDestroy(): void {
    console.log('Called onDestroy');
    this.templateRef.forEach((d) => {
      console.log('destroying: ', d.instance.message);
      d.changeDetectorRef.detach();
      d.destroy();
    });
  }

  private generateForViewRef(viewContainerRef: ViewContainerRef): void {
    getSyncResponse().forEach((data) => this.generateDynamicComponents(viewContainerRef, data));
  }

  private generateDynamicComponents(viewRef: ViewContainerRef, response: FakedResponseData): void {
    // resolve which component to render
    const componentRef = this.resolveComponent(viewRef, response);

    // add data to component
    componentRef.instance.message = response.message;

    // save reference
    this.templateRef.push(componentRef);
  }

  private resolveComponent(viewRef: ViewContainerRef, response: FakedResponseData): ComponentRef<PluginComponent> {
    if (response.pluginType === 'plugin-one') {
      return viewRef.createComponent(PluginOneComponent);
    }
    if (response.pluginType === 'plugin-two') {
      return viewRef.createComponent(PluginTwoComponent);
    }

    throw new Error('Component was unresolved');
  }
}
