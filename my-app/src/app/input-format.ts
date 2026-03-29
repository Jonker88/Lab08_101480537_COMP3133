import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[input-format]',
  standalone: true,
})
export class InputFormat {
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('blur')
  onBlur(): void {
    const input = this.el.nativeElement as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }
}
