import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  translationService = inject(TranslationService);
  translations = this.translationService.translations;

  /** Formulaire → livraison sur cette boîte (FormSubmit). */
  private readonly formSubmitEndpoint =
    'https://formsubmit.co/ajax/allansalahpro@gmail.com';

  email = 'allansalahpro@gmail.com';
  phone = '+1 (438) 951-0038';
  
  locations = [
    'Ottawa, Ontario, Canada',
    'Montréal, Québec, Canada'
  ];
  
  currentLocationIndex = signal(0);
  currentLocation = signal(this.locations[0]);

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitStatus = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  constructor() {
    // Switch automatique entre les deux villes toutes les 3 secondes
    setInterval(() => {
      const nextIndex = (this.currentLocationIndex() + 1) % this.locations.length;
      this.currentLocationIndex.set(nextIndex);
      this.currentLocation.set(this.locations[nextIndex]);
    }, 3000);
  }

  toggleLocation(): void {
    const nextIndex = (this.currentLocationIndex() + 1) % this.locations.length;
    this.currentLocationIndex.set(nextIndex);
    this.currentLocation.set(this.locations[nextIndex]);
  }

  async onSubmit(): Promise<void> {
    if (this.submitStatus() === 'sending') {
      return;
    }

    this.submitStatus.set('sending');

    try {
      const response = await fetch(this.formSubmitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
          _subject: `[Portfolio] Message de ${this.formData.name}`,
          _captcha: 'false',
        }),
      });

      const result = await response.json();
      const ok =
        response.ok &&
        (result.success === true || result.success === 'true');

      if (ok) {
        this.submitStatus.set('success');
        this.formData = { name: '', email: '', message: '' };
        setTimeout(() => this.submitStatus.set('idle'), 4000);
      } else {
        this.submitStatus.set('error');
        setTimeout(() => this.submitStatus.set('idle'), 5000);
      }
    } catch {
      this.submitStatus.set('error');
      setTimeout(() => this.submitStatus.set('idle'), 5000);
    }
  }
}
