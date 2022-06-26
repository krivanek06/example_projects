import { Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  FakedResponseData,
  getAsyncResponse,
  getSyncResponse,
  PluginComponent,
} from './example-dynamic-components.model';
import { PluginOneComponent } from './plugin-one/plugin-one.component';
import { PluginTwoComponent } from './plugin-two/plugin-two.component';

@Component({
  selector: 'app-example-dynamic-components',
  templateUrl: './example-dynamic-components.component.html',
  styleUrls: ['./example-dynamic-components.component.scss'],
})
export class ExampleDynamicComponentsComponent implements OnInit, OnDestroy {
  // sync template -> static: true because we render before AfterViewInit life cycle
  @ViewChild('dynamicSyncTemplate', { static: true, read: ViewContainerRef })
  dynamicSyncTemplate!: ViewContainerRef;

  // dynamic template
  @ViewChild('dynamicAsyncTemplate', { read: ViewContainerRef })
  dynamicAsyncTemplate!: ViewContainerRef;

  // reference to all dynamic components that we can delete them
  templateRef: ComponentRef<PluginComponent>[] = [];

  constructor() {}

  ngOnInit(): void {
    getSyncResponse().forEach((data) => this.generateDynamicComponents(this.dynamicSyncTemplate, data));
  }

  // TODO how to check if components still live in memory - heap ? Erik ?
  ngOnDestroy(): void {
    console.log('Called onDestroy');
    this.templateRef.forEach((d) => {
      console.log('destroying: ', d.instance.message);
      d.changeDetectorRef.detach();
      d.destroy();
    });
  }

  onGetDataClick(): void {
    const data$ = getAsyncResponse();
    data$.subscribe((data) => data.forEach((d) => this.generateDynamicComponents(this.dynamicAsyncTemplate, d)));
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
