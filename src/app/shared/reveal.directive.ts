import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/** Adds the `visible` class once the host element scrolls into view. */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const element = this.el.nativeElement;
    if (typeof IntersectionObserver === 'undefined') {
      element.classList.add('visible');
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          element.classList.add('visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
