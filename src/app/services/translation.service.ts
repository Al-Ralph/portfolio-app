import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'fr';

export interface Translations {
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
    cv: string;
  };
  hero: {
    greeting: string;
    name: string;
    description: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    description2: string;
    description3: string;
    specialization1: string;
    specialization2: string;
    specialization3: string;
    specialization4: string;
    specialization5: string;
    journey: string;
    conclusion: string;
    skills: string;
  };
  experience: {
    title: string;
    freelance: {
      title: string;
      company: string;
      period: string;
      desc1: string;
      desc2: string;
      desc3: string;
      desc4: string;
    };
    smartlearn: {
      title: string;
      company: string;
      period: string;
      desc1: string;
      desc2: string;
      desc3: string;
      desc4: string;
    };
  };
  projects: {
    title: string;
    viewProject: string;
    smartlearn: {
      title: string;
      description: string;
    };
    afrikaplace: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About Me',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact Me',
      cv: 'Resume'
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'SALAH-DJIMABI Allan',
      description: 'I am a passionate Junior Developer. Driven by curiosity and a positive attitude, I bring as much creativity as logic to many of my projects. Whether it\'s AI, mobile, frontend, backend, or any technical challenge, I love transforming ideas into concrete and impactful solutions.'
    },
    about: {
      title: 'About Me',
      subtitle: 'Full Stack Developer',
      description: 'Passionate Full-Stack Developer dedicated to creating innovative and impactful digital experiences. I transform ideas into concrete solutions that combine performance, design, and code quality.',
      description2: 'With expertise in frontend development (React, Angular, Next.js, Vue.js) and backend (Node.js, Django, Laravel, .NET), I master the entire development cycle — from conception to deployment. My freelance experience and Agile methodology practice allow me to deliver complete projects with autonomy and rigor.',
      description3: 'Specializations:',
      specialization1: 'Web & Mobile Development (React Native, Flutter)',
      specialization2: 'APIs & Modern Architectures (REST, GraphQL, WebSockets)',
      specialization3: 'Data Science & AI (Python, R, Jupyter)',
      specialization4: 'Cloud & DevOps (AWS, Azure)',
      specialization5: 'Databases (MongoDB, PostgreSQL, Firebase)',
      journey: 'My journey from Togo through France to Canada has given me a unique and multicultural perspective. I combine technical creativity with a global vision to design solutions that have real impact.',
      conclusion: 'Ready to bring your projects to life with cutting-edge technologies and personalized support.',
      skills: 'Skills'
    },
    experience: {
      title: 'Experience',
      freelance: {
        title: 'Full Stack Developer Freelance',
        company: 'Freelance',
        period: '2023 - Present',
        desc1: 'Development of complete web and mobile applications',
        desc2: 'Design and implementation of REST and GraphQL APIs',
        desc3: 'Integration of AI/ML solutions in web applications',
        desc4: 'End-to-end project management with Agile methodologies'
      },
      smartlearn: {
        title: 'Intelligent educational platform with personalized learning recommendations',
        company: 'Internship / Final Project - SmartLearn Platform',
        period: '2025 - 2025',
        desc1: 'Development of a web and mobile application offering personalized learning paths',
        desc2: 'Design of an AI-based recommendation engine (collaborative and content-based filtering)',
        desc3: 'Implementation of real-time progress tracking with dynamic adjustment of recommendations',
        desc4: 'Implementation of a microservices architecture for user management, analytics, recommendations and social interactions'
      }
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      smartlearn: {
        title: 'SmartLearn Platform',
        description: 'Intelligent learning platform with integrated AI to personalize the educational experience'
      },
      afrikaplace: {
        title: 'AfriKaPlace',
        description: 'African marketplace connecting entrepreneurs and consumers across the continent'
      }
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Let\'s work together',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send. Please try again or email me directly.'
    }
  },
  fr: {
    nav: {
      about: 'À Propos',
      experience: 'Expérience',
      projects: 'Projets',
      contact: 'Contactez-Moi',
      cv: 'Curriculum'
    },
    hero: {
      greeting: 'Bonjour ! Je m\'appelle',
      name: 'SALAH-DJIMABI Allan',
      description: 'Je suis un Développeur Junior passionné. Animé par la curiosité et une attitude positive, j\'apporte autant de créativité que de logique dans beaucoup de mes projets. Que ce soit l\'IA, le mobile, le frontend, le backend ou n\'importe quel défi technique, j\'adore transformer des idées en solutions concrètes et impactantes.'
    },
    about: {
      title: 'À Propos de Moi',
      subtitle: 'Développeur Full Stack',
      description: 'Développeur Full-Stack passionné par la création d\'expériences digitales innovantes et percutantes. Je transforme des idées en solutions concrètes alliant performance, design et qualité de code.',
      description2: 'Fort d\'une expertise en développement frontend (React, Angular, Next.js, Vue.js) et backend (Node.js, Django, Laravel, .NET), je maîtrise l\'ensemble du cycle de développement — de la conception au déploiement. Mon expérience freelance et ma pratique des méthodes Agile me permettent de livrer des projets complets avec autonomie et rigueur.',
      description3: 'Spécialisations :',
      specialization1: 'Développement Web & Mobile (React Native, Flutter)',
      specialization2: 'APIs & Architectures Modernes (REST, GraphQL, WebSockets)',
      specialization3: 'Data Science & IA (Python, R, Jupyter)',
      specialization4: 'Cloud & DevOps (AWS, Azure)',
      specialization5: 'Bases de données (MongoDB, PostgreSQL, Firebase)',
      journey: 'Mon parcours du Togo en passant par la France et pour finir au Canada m\'a offert une perspective unique et multiculturelle. Je combine créativité technique et vision globale pour concevoir des solutions qui ont un réel impact.',
      conclusion: 'Prêt à donner vie à vos projets avec des technologies de pointe et un accompagnement personnalisé.',
      skills: 'Compétences'
    },
    experience: {
      title: 'Expérience',
      freelance: {
        title: 'Développeur Full Stack Freelance',
        company: 'Freelance',
        period: '2023 - Présent',
        desc1: 'Développement d\'applications web et mobiles complètes',
        desc2: 'Conception et implémentation d\'APIs REST et GraphQL',
        desc3: 'Intégration de solutions IA/ML dans des applications web',
        desc4: 'Gestion de projets de A à Z avec méthodes Agile'
      },
      smartlearn: {
        title: 'Plateforme éducative intelligente avec recommandations d\'apprentissage personnalisées',
        company: 'Stage en entreprise / Projet final - SmartLearn Platform',
        period: '2025 - 2025',
        desc1: 'Développement d\'une application web et mobile proposant des parcours d\'apprentissage personnalisés',
        desc2: 'Conception d\'un moteur de recommandation basé sur l\'IA (filtrage collaboratif et basé sur le contenu)',
        desc3: 'Implémentation d\'un suivi de progression en temps réel avec ajustement dynamique des recommandations',
        desc4: 'Mise en place d\'une architecture microservices pour la gestion des utilisateurs, analyses, recommandations et interactions sociales'
      }
    },
    projects: {
      title: 'Projets',
      viewProject: 'Voir le Projet',
      smartlearn: {
        title: 'SmartLearn Platform',
        description: 'Plateforme d\'apprentissage intelligente avec IA intégrée pour personnaliser l\'expérience éducative'
      },
      afrikaplace: {
        title: 'AfriKaPlace',
        description: 'Marketplace africaine connectant entrepreneurs et consommateurs à travers le continent'
      }
    },
    contact: {
      title: 'Contactez-Moi',
      subtitle: 'Travaillons ensemble',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer le Message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Échec de l\'envoi. Réessayez ou écrivez-moi directement par e-mail.'
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = signal<Language>('en');
  public translations = signal<Translations>(translations.en);

  constructor() {
    this.currentLanguage.set('en');
    this.translations.set(translations.en);
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    this.translations.set(translations[lang]);
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage() === 'en' ? 'fr' : 'en';
    this.setLanguage(newLang);
  }
}
