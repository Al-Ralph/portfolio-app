import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CvModalService } from '../../services/cv-modal.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-cv-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-modal.component.html',
  styleUrl: './cv-modal.component.scss'
})
export class CvModalComponent {
  cvModalService = inject(CvModalService);
  translationService = inject(TranslationService);
  private sanitizer = inject(DomSanitizer);

  translations = this.translationService.translations;

  readonly cvPath = 'assets/Allan-Salah-Djimabi-FlowCV-Resume-20260205.pdf';
  readonly cvSafeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.cvPath);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.cvModalService.close();
  }
}
