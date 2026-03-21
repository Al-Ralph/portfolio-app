import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  isLoading = true;

  ngOnInit(): void {
    // Masquer le contenu principal pendant le chargement
    const main = document.querySelector('main') as HTMLElement;
    const navbar = document.querySelector('app-navbar') as HTMLElement;
    if (main) main.style.opacity = '0';
    if (navbar) navbar.style.opacity = '0';

    // Simuler un chargement de 2-3 secondes
    setTimeout(() => {
      this.isLoading = false;
      
      // Afficher le contenu principal
      if (main) {
        main.style.transition = 'opacity 0.5s ease';
        main.style.opacity = '1';
      }
      if (navbar) {
        navbar.style.transition = 'opacity 0.5s ease';
        navbar.style.opacity = '1';
      }

      // Retirer le loader du DOM après l'animation de sortie
      setTimeout(() => {
        const loader = document.querySelector('.loader-container') as HTMLElement;
        if (loader) {
          loader.remove();
        }
      }, 500);
    }, 2500);
  }
}
