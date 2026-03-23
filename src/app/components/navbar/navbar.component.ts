import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { CvModalService } from '../../services/cv-modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  translationService = inject(TranslationService);
  cvModalService = inject(CvModalService);

  translations = this.translationService.translations;
  currentLang = this.translationService.getCurrentLanguage();
  menuOpen = false;

  openCv(): void {
    this.menuOpen = false;
    this.cvModalService.open();
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
    this.currentLang = this.translationService.getCurrentLanguage();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(sectionId: string): void {
    this.menuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
