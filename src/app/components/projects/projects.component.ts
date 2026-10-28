import { Component, inject } from '@angular/core';
import { ProjectId, TranslationService } from '../../services/translation.service';
import { RevealDirective } from '../../shared/reveal.directive';

interface Project {
  id: ProjectId;
  technologies: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  link: string;
}

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  translations = inject(TranslationService).translations;

  projects: Project[] = [
    {
      id: 'smartlearn',
      technologies: ['React', 'React Native', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      image: 'assets/smartlearn.webp',
      imageWidth: 1200,
      imageHeight: 501,
      link: 'https://github.com/Al-Ralph/Stage-projet'
    },
    {
      id: 'afrikaplace',
      technologies: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Docker'],
      image: 'assets/afrikaplace.webp',
      imageWidth: 1200,
      imageHeight: 572,
      link: 'https://github.com/Al-Ralph/afrikabnb'
    }
  ];
}
