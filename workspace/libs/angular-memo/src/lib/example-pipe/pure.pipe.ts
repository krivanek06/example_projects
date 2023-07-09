import { ChangeDetectorRef, EmbeddedViewRef, Inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  standalone: true,
})
export class PurePipe implements PipeTransform {
  /**
   * @Inject(ChangeDetectorRef) prevents: NullInjectorError: No provider for EmbeddedViewRef!
   *
   */
  constructor(
    @Inject(ChangeDetectorRef)
    private readonly viewRef: EmbeddedViewRef<unknown>
  ) {}

  /**
   *
   * @param fn is the function that will be executed in the template
   * @param args a list of arguments for the function
   * @returns
   */
  transform<T extends (...args: any) => any>(fn: T, ...args: [...Parameters<T>]): ReturnType<T> {
    return fn.apply(this.viewRef.context, args);
  }
}
