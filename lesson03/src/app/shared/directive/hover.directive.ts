import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[hover]'
})
export class HoverDirective {
  constructor(private elmtRef: ElementRef, private renderer: Renderer2) {
    console.log('hover directive');
    renderer.setStyle(elmtRef.nativeElement, 'background', 'yellow');
    renderer.setStyle(elmtRef.nativeElement, 'font-size', '16px');
  }


  @HostListener('click')
  onMouseClick() {
    console.log('click');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.elmtRef.nativeElement, 'box-shadow', '5px 5px 10px #909190');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.elmtRef.nativeElement, 'box-shadow', 'none');
  }
}
