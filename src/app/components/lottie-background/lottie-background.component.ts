import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lottie-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lottie-background.component.html',
  styleUrl: './lottie-background.component.scss'
})
export class LottieBackgroundComponent implements AfterViewInit {
  @ViewChild('lottieContainer', { static: false }) lottieContainer!: ElementRef;
  
  private lottieInstance: any;

  async ngAfterViewInit(): Promise<void> {
    try {
      // Dynamically import lottie-web
      const lottie = await import('lottie-web');
      
      // You can use a simple animation JSON or create your own
      // For now, we'll create a simple animated background
      this.lottieInstance = lottie.default.loadAnimation({
        container: this.lottieContainer.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets5.lottiefiles.com/packages/lf20_jcikwtux.json' // Example Lottie animation
      });
    } catch (error) {
      console.error('Error loading Lottie animation:', error);
      // Fallback to CSS animation if Lottie fails
      this.lottieContainer.nativeElement.classList.add('fallback-animation');
    }
  }

  ngOnDestroy(): void {
    if (this.lottieInstance) {
      this.lottieInstance.destroy();
    }
  }
}
