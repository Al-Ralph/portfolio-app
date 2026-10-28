import { Component, OnDestroy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { TranslationService } from '../../services/translation.service';
import { PROFILE } from '../../shared/profile';

// The public key is meant to be exposed; restrict allowed origins in the EmailJS dashboard.
// The recipient address is set in the EmailJS template, not sent from the browser.
const EMAILJS_SERVICE_ID  = 'service_l6jpln4';
const EMAILJS_TEMPLATE_ID = 'template_deypzpl';
const EMAILJS_PUBLIC_KEY  = 'DbMfd8Fw1TnmM5feg';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnDestroy {
  translations = inject(TranslationService).translations;
  readonly profile = PROFILE;

  formData = {
    name: '',
    email: '',
    message: ''
  };
  honeypot = '';

  submitStatus = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  private resetTimer?: ReturnType<typeof setTimeout>;

  async onSubmit(): Promise<void> {
    if (this.submitStatus() === 'sending') {
      return;
    }

    // A filled honeypot means a bot: pretend it worked and send nothing.
    if (this.honeypot) {
      this.finish('success', 4000);
      return;
    }

    this.submitStatus.set('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  this.formData.name,
          from_email: this.formData.email,
          message:    this.formData.message
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      this.formData = { name: '', email: '', message: '' };
      this.finish('success', 4000);
    } catch {
      this.finish('error', 5000);
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.resetTimer);
  }

  private finish(status: 'success' | 'error', resetAfterMs: number): void {
    this.submitStatus.set(status);
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.submitStatus.set('idle'), resetAfterMs);
  }
}
