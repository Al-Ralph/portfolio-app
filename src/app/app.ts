import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CvModalComponent } from './components/cv-modal/cv-modal.component';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    CvModalComponent,
    ThreeSceneComponent,
    LoaderComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
