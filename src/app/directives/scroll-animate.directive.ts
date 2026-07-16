import { Directive, ElementRef, OnInit, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '.hidden-up, .hidden-ltr, .hidden-rtl, .hidden-ap',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private static observer: IntersectionObserver | null = null;

  ngOnInit() {
    if (typeof window === 'undefined') return;

    if (!ScrollAnimateDirective.observer) {
      ScrollAnimateDirective.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const classList = entry.target.classList;

          if (entry.isIntersecting) {
            if (classList.contains('hidden-up')) {
              classList.add('show-up');
              classList.remove('hidden-up');
            }
            if (classList.contains('hidden-ltr')) {
              classList.add('show-ltr');
              classList.remove('hidden-ltr');
            }
            if (classList.contains('hidden-rtl')) {
              classList.add('show-rtl');
              classList.remove('hidden-rtl');
            }
            if (classList.contains('hidden-ap')) {
              classList.add('show-ap');
              classList.remove('hidden-ap');
            }
          } else {
            // Reverte a animação ao sair da viewport (mantendo comportamento original)
            if (classList.contains('show-up')) {
              classList.add('hidden-up');
              classList.remove('show-up');
            }
            if (classList.contains('show-ltr')) {
              classList.add('hidden-ltr');
              classList.remove('show-ltr');
            }
            if (classList.contains('show-rtl')) {
              classList.add('hidden-rtl');
              classList.remove('show-rtl');
            }
            if (classList.contains('show-ap')) {
              classList.add('hidden-ap');
              classList.remove('show-ap');
            }
          }
        });
      }, {
        threshold: 0.1
      });
    }

    ScrollAnimateDirective.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (ScrollAnimateDirective.observer && this.el.nativeElement) {
      ScrollAnimateDirective.observer.unobserve(this.el.nativeElement);
    }
  }
}
