# Allan Salah-Djimabi — Portfolio

Personal portfolio of a junior full-stack web & mobile developer (React, Node.js, Python, AI), available in English and French.

- GitHub: [github.com/Al-Ralph](https://github.com/Al-Ralph)
- LinkedIn: [linkedin.com/in/allan-salah](https://www.linkedin.com/in/allan-salah)

## Stack

- Angular 20 (standalone components, signals, new control flow)
- SCSS, Three.js (animated particle background)
- EmailJS for the contact form

## Getting started

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build in dist/portfolio-app
npm test           # unit tests (Karma + Jasmine)
```

If `npm install` fails because npm is in offline mode, see [RESOLUTION_PROBLEME.md](RESOLUTION_PROBLEME.md).

## Where to edit content

| What | File |
| --- | --- |
| All texts (EN / FR), experience, project descriptions | `src/app/services/translation.service.ts` |
| Email, phone, location, GitHub, LinkedIn, CV path | `src/app/shared/profile.ts` |
| Project images, technologies and links | `src/app/components/projects/projects.component.ts` |
| Skills list | `src/app/components/about/about.component.ts` |
| Images and CV PDF | `src/assets/` (use WebP for images) |

## Contact form

The form sends through EmailJS. The public key in `contact.component.ts` is meant to be public; in the EmailJS dashboard, restrict allowed origins to the deployed domain and set the recipient address in the template.
