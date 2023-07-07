import { InjectionToken } from "@angular/core";

export interface WidgetInterface {
  refresh: () => void;
}


export const WIDGET = new InjectionToken<WidgetInterface>('WidgetInterface');
