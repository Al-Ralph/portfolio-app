import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  translations = inject(TranslationService).translations;

  skills = [
    'React', 'React Native', 'Angular', 'TypeScript',
    'JavaScript', 'Node.js', 'Express', 'Python',
    'Django', 'PostgreSQL', 'MySQL', 'MongoDB',
    'Prisma', 'Docker', 'Kubernetes', 'GitHub Actions',
    'AWS', 'Azure', 'Git'
  ];
}
