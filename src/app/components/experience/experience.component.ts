import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  translations = inject(TranslationService).translations;
}
