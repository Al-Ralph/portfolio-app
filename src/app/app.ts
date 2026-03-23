import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CvModalComponent } from './components/cv-modal/cv-modal.component';
import { LottieBackgroundComponent } from './components/lottie-background/lottie-background.component';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    CvModalComponent,
    LottieBackgroundComponent,
    ThreeSceneComponent,
    LoaderComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  ngOnInit(): void {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe timeline items
    setTimeout(() => {
      document.querySelectorAll('.timeline-item').forEach(el => {
        observer.observe(el);
      });

      // Observe project cards
      document.querySelectorAll('.project-card').forEach(el => {
        observer.observe(el);
      });
    }, 100);
  }
}
