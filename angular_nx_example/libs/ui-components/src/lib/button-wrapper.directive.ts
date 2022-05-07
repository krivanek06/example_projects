import { Directive, EventEmitter, Output } from '@angular/core';

@Directive()
export abstract class ButtonWrapperDirective<T> {
  @Output() addClickEmitter: EventEmitter<T> = new EventEmitter<T>();
  @Output() removeClickEmitter: EventEmitter<T> = new EventEmitter<T>();
  @Output() uselessEmitter: EventEmitter<T> = new EventEmitter<T>();

  onAddClick(data?: T): void {
    this.addClickEmitter.emit(data);
  }

  onRemoveClick(data?: T): void {
    this.removeClickEmitter.emit(data);
  }
}
