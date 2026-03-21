import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface ExperienceItem {
  key: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  translationService = inject(TranslationService);
  translations = this.translationService.translations;

  experiences: ExperienceItem[] = [
    { key: 'freelance' },
    { key: 'smartlearn' }
  ];

  getExperience(key: string) {
    const exp = this.translations().experience as any;
    return exp[key] || {};
  }
}
