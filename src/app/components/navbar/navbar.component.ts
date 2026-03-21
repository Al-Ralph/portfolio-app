import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  translationService = inject(TranslationService);
  
  translations = this.translationService.translations;
  currentLang = this.translationService.getCurrentLanguage();

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
    this.currentLang = this.translationService.getCurrentLanguage();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
