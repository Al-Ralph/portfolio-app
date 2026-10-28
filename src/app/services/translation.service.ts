import { Injectable, computed, signal } from '@angular/core';

export type Language = 'en' | 'fr';
export type ProjectId = 'smartlearn' | 'afrikaplace';

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Translations {
  nav: {
    home: string;
    menu: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
    cv: string;
    switchLanguage: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    description: string;
    scrollDown: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    specializationsTitle: string;
    specializations: string[];
    journey: string;
    conclusion: string;
    skills: string;
    photoAlt: string;
  };
  experience: {
    title: string;
    items: ExperienceEntry[];
  };
  projects: {
    title: string;
    viewCode: string;
    items: Record<ProjectId, { title: string; description: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    name: string;
    email: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  cv: {
    title: string;
    download: string;
    downloadPdf: string;
    close: string;
    fallback: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Back to top',
      menu: 'Menu',
      about: 'About Me',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact Me',
      cv: 'Resume',
      switchLanguage: 'Passer en français'
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Allan Salah-Djimabi',
      role: 'Junior Web & Mobile Developer — AI',
      description: 'I build full-stack web and mobile applications with React, Node.js and Python, from the API to the interface. Curious and hands-on, I enjoy turning ideas into products people actually use, especially when AI is part of the solution.',
      scrollDown: 'Scroll down'
    },
    about: {
      title: 'About Me',
      subtitle: 'Junior Full-Stack Developer',
      paragraphs: [
        'Graduate of an AEC in Web, Mobile and Artificial Intelligence Programming, I build complete applications — from the database to the interface, all the way to deployment.',
        'My day-to-day stack is React and React Native on the front end, Node.js/Express and Python (Django) on the back end, and PostgreSQL, MySQL or MongoDB for data. I have also worked with Docker, CI/CD pipelines and cloud deployment on AWS and Azure.'
      ],
      specializationsTitle: 'What I work on:',
      specializations: [
        'Web & mobile applications (React, React Native)',
        'REST APIs & microservices (Node.js, Express, Django)',
        'Applied AI: recommendation engines in Python',
        'Databases (PostgreSQL, MySQL, MongoDB, Prisma)',
        'DevOps (Docker, GitHub Actions, AWS / Azure)'
      ],
      journey: 'My journey from Togo through France to Canada has given me a multicultural perspective and the habit of adapting quickly to new teams and environments.',
      conclusion: 'Open to junior developer positions and freelance projects.',
      skills: 'Skills',
      photoAlt: 'Portrait of Allan Salah-Djimabi'
    },
    experience: {
      title: 'Experience',
      items: [
        {
          title: 'Full-Stack Developer',
          company: 'Freelance',
          period: '2023 – Present',
          bullets: [
            'Development of complete web and mobile applications',
            'Design and implementation of REST APIs',
            'Integration of AI features into web applications',
            'End-to-end project delivery using Agile methods'
          ]
        },
        {
          title: 'Full-Stack Developer Intern',
          company: 'Internship / Final project — SmartLearn Platform',
          period: '2025',
          bullets: [
            'Built the web and mobile front ends in React and React Native',
            'Designed the AI recommendation engine (collaborative and content-based filtering) in Python',
            'Implemented real-time progress tracking that adjusts recommendations dynamically',
            'Set up a microservices architecture for users, analytics, recommendations and social features'
          ]
        }
      ]
    },
    projects: {
      title: 'Projects',
      viewCode: 'View code',
      items: {
        smartlearn: {
          title: 'SmartLearn Platform',
          description: 'Learning platform that builds personalized learning paths: an AI engine recommends videos, articles and exercises based on each student\'s level and progress.'
        },
        afrikaplace: {
          title: 'AfrikaPlace',
          description: 'Accommodation booking platform for Africa with geospatial search, interactive maps, JWT authentication and a 5-language interface.'
        }
      }
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Let\'s work together',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: 'Your message...',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send. Please try again or email me directly.'
    },
    cv: {
      title: 'Resume',
      download: 'Download',
      downloadPdf: 'Download the PDF',
      close: 'Close',
      fallback: 'Your browser cannot preview PDF files.'
    }
  },
  fr: {
    nav: {
      home: 'Retour en haut',
      menu: 'Menu',
      about: 'À Propos',
      experience: 'Expérience',
      projects: 'Projets',
      contact: 'Contactez-Moi',
      cv: 'CV',
      switchLanguage: 'Switch to English'
    },
    hero: {
      greeting: 'Bonjour ! Je m\'appelle',
      name: 'Allan Salah-Djimabi',
      role: 'Développeur Web & Mobile Junior — IA',
      description: 'Je développe des applications web et mobiles full-stack avec React, Node.js et Python, de l\'API jusqu\'à l\'interface. Curieux et concret, j\'aime transformer des idées en produits réellement utilisés, surtout quand l\'IA fait partie de la solution.',
      scrollDown: 'Défiler'
    },
    about: {
      title: 'À Propos de Moi',
      subtitle: 'Développeur Full-Stack Junior',
      paragraphs: [
        'Diplômé d\'une AEC en Programmation Web, Mobile et Intelligence Artificielle, je construis des applications complètes — de la base de données à l\'interface, jusqu\'au déploiement.',
        'Au quotidien, j\'utilise React et React Native côté frontend, Node.js/Express et Python (Django) côté backend, et PostgreSQL, MySQL ou MongoDB pour les données. J\'ai aussi travaillé avec Docker, des pipelines CI/CD et le déploiement cloud sur AWS et Azure.'
      ],
      specializationsTitle: 'Ce sur quoi je travaille :',
      specializations: [
        'Applications web & mobiles (React, React Native)',
        'APIs REST & microservices (Node.js, Express, Django)',
        'IA appliquée : moteurs de recommandation en Python',
        'Bases de données (PostgreSQL, MySQL, MongoDB, Prisma)',
        'DevOps (Docker, GitHub Actions, AWS / Azure)'
      ],
      journey: 'Mon parcours du Togo en passant par la France jusqu\'au Canada m\'a donné une perspective multiculturelle et l\'habitude de m\'adapter vite à de nouvelles équipes et de nouveaux environnements.',
      conclusion: 'Ouvert aux postes de développeur junior et aux projets freelance.',
      skills: 'Compétences',
      photoAlt: 'Portrait d\'Allan Salah-Djimabi'
    },
    experience: {
      title: 'Expérience',
      items: [
        {
          title: 'Développeur Full-Stack',
          company: 'Freelance',
          period: '2023 – Présent',
          bullets: [
            'Développement d\'applications web et mobiles complètes',
            'Conception et implémentation d\'APIs REST',
            'Intégration de fonctionnalités IA dans des applications web',
            'Livraison de projets de A à Z avec les méthodes Agile'
          ]
        },
        {
          title: 'Stagiaire Développeur Full-Stack',
          company: 'Stage en entreprise / Projet final — SmartLearn Platform',
          period: '2025',
          bullets: [
            'Développement des interfaces web et mobile en React et React Native',
            'Conception du moteur de recommandation IA (filtrage collaboratif et basé sur le contenu) en Python',
            'Implémentation d\'un suivi de progression en temps réel qui ajuste dynamiquement les recommandations',
            'Mise en place d\'une architecture microservices : utilisateurs, analyses, recommandations et interactions sociales'
          ]
        }
      ]
    },
    projects: {
      title: 'Projets',
      viewCode: 'Voir le code',
      items: {
        smartlearn: {
          title: 'SmartLearn Platform',
          description: 'Plateforme d\'apprentissage qui construit des parcours personnalisés : un moteur IA recommande vidéos, articles et exercices selon le niveau et la progression de chaque étudiant.'
        },
        afrikaplace: {
          title: 'AfrikaPlace',
          description: 'Plateforme de réservation de logements en Afrique avec recherche géospatiale, cartes interactives, authentification JWT et interface en 5 langues.'
        }
      }
    },
    contact: {
      title: 'Contactez-Moi',
      subtitle: 'Travaillons ensemble',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      locationLabel: 'Localisation',
      name: 'Nom',
      email: 'E-mail',
      message: 'Message',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'votre.email@exemple.com',
      messagePlaceholder: 'Votre message...',
      send: 'Envoyer le Message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Échec de l\'envoi. Réessayez ou écrivez-moi directement par e-mail.'
    },
    cv: {
      title: 'Curriculum Vitae',
      download: 'Télécharger',
      downloadPdf: 'Télécharger le PDF',
      close: 'Fermer',
      fallback: 'Votre navigateur ne peut pas afficher l\'aperçu du PDF.'
    }
  }
};

const STORAGE_KEY = 'portfolio-lang';

function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'fr') {
      return saved;
    }
  } catch {
    // Storage unavailable (private mode): fall back to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly currentLanguage = signal<Language>(initialLanguage());

  readonly language = this.currentLanguage.asReadonly();
  readonly translations = computed(() => translations[this.currentLanguage()]);

  constructor() {
    document.documentElement.lang = this.currentLanguage();
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore: the choice simply won't persist.
    }
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLanguage() === 'en' ? 'fr' : 'en');
  }
}
