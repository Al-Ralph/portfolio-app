import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { PROFILE } from '../../shared/profile';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  translations = inject(TranslationService).translations;
  readonly profile = PROFILE;
}
