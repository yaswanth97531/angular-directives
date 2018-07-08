import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  /*This approach is not a better approach. There is better approach given below as better-highlight*/
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
