import { Component, HostListener, inject, signal } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CvModalService } from '../../services/cv-modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private translationService = inject(TranslationService);
  private cvModalService = inject(CvModalService);

  translations = this.translationService.translations;
  language = this.translationService.language;
  menuOpen = signal(false);

  openCv(): void {
    this.closeMenu();
    this.cvModalService.open();
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
