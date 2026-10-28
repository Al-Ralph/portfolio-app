import { Component, OnDestroy, OnInit, signal } from '@angular/core';

const FADE_MS = 400;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit, OnDestroy {
  isLoading = signal(true);
  isLeaving = signal(false);

  private readonly hide = () => {
    this.isLeaving.set(true);
    setTimeout(() => this.isLoading.set(false), FADE_MS);
  };

  ngOnInit(): void {
    // Stay only as long as the page actually needs to load.
    if (document.readyState === 'complete') {
      this.hide();
    } else {
      window.addEventListener('load', this.hide, { once: true });
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('load', this.hide);
  }
}
