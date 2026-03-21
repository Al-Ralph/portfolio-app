import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  translationService = inject(TranslationService);
  translations = this.translationService.translations;

  skills = [
    'Angular', 'TypeScript', 'JavaScript', 'Node.js',
    'React', 'Vue.js', 'Python', 'Java',
    'C#', 'Kotlin', 'HTML5', 'CSS3',
    'SCSS', 'MongoDB', 'PostgreSQL', 'Git',
    'Docker', 'Notion'
  ];
}
