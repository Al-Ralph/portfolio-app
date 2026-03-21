# Guide de Démarrage Rapide

## Installation des Dépendances

Si vous rencontrez des problèmes avec `npm install`, essayez :

```bash
npm cache clean --force
npm install
```

Ou utilisez yarn :

```bash
yarn install
```

## Lancer le Projet

```bash
npm start
```

Le site sera accessible sur `http://localhost:4200`

## Personnalisation

### Modifier votre nom et informations

1. **Hero Section** : `src/app/components/hero/hero.component.html`
   - Modifiez "Your Name" et "Full Stack Developer"

2. **About Section** : `src/app/components/about/about.component.ts`
   - Modifiez la description et les compétences

3. **Experience** : `src/app/components/experience/experience.component.ts`
   - Modifiez les expériences professionnelles

4. **Projects** : `src/app/components/projects/projects.component.ts`
   - Modifiez les projets avec vos propres projets

5. **Contact** : `src/app/components/contact/contact.component.html`
   - Modifiez l'email, téléphone et localisation

### Changer l'animation Lottie

Dans `src/app/components/lottie-background/lottie-background.component.ts`, remplacez l'URL par votre propre animation Lottie JSON.

Vous pouvez trouver des animations gratuites sur :
- https://lottiefiles.com/

### Personnaliser les couleurs

Les couleurs principales sont définies dans chaque fichier SCSS. Recherchez :
- `#667eea` (bleu/violet)
- `#764ba2` (violet)

Remplacez-les par vos couleurs préférées.

## Fonctionnalités

✅ Navigation fluide entre les sections
✅ Changement de langue (EN/FR)
✅ Animations au scroll
✅ Design responsive
✅ Formulaire de contact fonctionnel

## Notes

- Le formulaire de contact est actuellement en mode démo. Pour le rendre fonctionnel, vous devrez intégrer un backend.
- Les animations Lottie nécessitent une connexion internet pour charger depuis l'URL externe. Vous pouvez télécharger le JSON et le mettre dans `public/` pour un chargement local.
