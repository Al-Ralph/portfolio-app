import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Project {
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
  image: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  translationService = inject(TranslationService);
  translations = this.translationService.translations;

  projects: Project[] = [
    {
      titleKey: 'smartlearn',
      descriptionKey: 'smartlearn',
      technologies: ['React', 'Node.js', 'MongoDB', 'Python', 'AI/ML'],
      image: 'assets/SmartLearn Platform.png',
      link: '#'
    },
    {
      titleKey: 'afrikaplace',
      descriptionKey: 'afrikaplace',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Stripe'],
      image: 'assets/AfriKaPlace.png',
      link: '#'
    }
  ];

  getProjectTitle(key: string): string {
    const proj = this.translations().projects as any;
    return proj[key]?.title || key;
  }

  getProjectDescription(key: string): string {
    const proj = this.translations().projects as any;
    return proj[key]?.description || '';
  }
}
