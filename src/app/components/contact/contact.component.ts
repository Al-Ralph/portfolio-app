import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { TranslationService } from '../../services/translation.service';

const EMAILJS_SERVICE_ID  = 'service_l6jpln4';
const EMAILJS_TEMPLATE_ID = 'template_deypzpl';
const EMAILJS_PUBLIC_KEY  = 'DbMfd8Fw1TnmM5feg';

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
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    this.formData.name,
          from_email:   this.formData.email,
          message:      this.formData.message,
          to_email:     'allansalahpro@gmail.com',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      this.submitStatus.set('success');
      this.formData = { name: '', email: '', message: '' };
      setTimeout(() => this.submitStatus.set('idle'), 4000);
    } catch {
      this.submitStatus.set('error');
      setTimeout(() => this.submitStatus.set('idle'), 5000);
    }
  }
}
