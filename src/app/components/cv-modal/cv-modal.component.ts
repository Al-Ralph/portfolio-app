import { Component, ElementRef, HostListener, effect, inject, viewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CvModalService } from '../../services/cv-modal.service';
import { TranslationService } from '../../services/translation.service';
import { PROFILE } from '../../shared/profile';

const FOCUSABLE = 'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

@Component({
  selector: 'app-cv-modal',
  templateUrl: './cv-modal.component.html',
  styleUrl: './cv-modal.component.scss'
})
export class CvModalComponent {
  cvModalService = inject(CvModalService);
  private sanitizer = inject(DomSanitizer);

  translations = inject(TranslationService).translations;

  readonly cvPath = PROFILE.cvPath;
  readonly cvSafeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.cvPath);

  private panel = viewChild<ElementRef<HTMLElement>>('panel');
  private closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');
  private previouslyFocused: HTMLElement | null = null;

  constructor() {
    // Move focus into the dialog when it opens, and give it back when it closes.
    effect(() => {
      const button = this.closeButton();
      if (button) {
        this.previouslyFocused = document.activeElement as HTMLElement | null;
        button.nativeElement.focus();
      } else if (this.previouslyFocused) {
        this.previouslyFocused.focus();
        this.previouslyFocused = null;
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.cvModalService.isOpen()) {
      this.cvModalService.close();
    }
  }

  trapFocus(event: Event): void {
    const panel = this.panel()?.nativeElement;
    if (!panel) {
      return;
    }
    const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const backwards = (event as KeyboardEvent).shiftKey;

    if (backwards && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!backwards && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
