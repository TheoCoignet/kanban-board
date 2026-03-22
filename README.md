# Kanban Board

Une application de gestion de tâches construite avec Next.js 14, TypeScript et Zustand

## Stack technique

- **Next.js 14** (App Router)
- **TypeScript** (mode strict)
- **Zustand** - gestion d'état avec persistance localStorage
- **Tailwind CSS v4** - styles utilitaires
- **Jest + React Testing Library** - tests unitaires

## Lancer le projet

### Prérequis
- Node.js 18+
- npm

### Installation

npm install

### Développement

npm run dev

L'application est accessible sur http://localhost:3000

### Tests

npm test

### Build de production

npm run build

## Architecture

Le projet suit une organisation **feature-based** :

src/
├─ app/                 # Layout et page principale Next.js
├─ features/
│  └─ board/             # Feature Kanban
│     ├─ components/
│     ├─ store/
│     ├─ __tests__/
└─ shared/
   ├─ components/
   └─ types/

## Choix techniques

** Zustand plutôt que Redux** - plus léger, sans boilerplate, suffisant pour la complexité de ce projet. Le middleware `persist` gère la persistance localStorage automatiquement.

**Organisation feature-based** - chaque feature est autonome et isolée. Ajouter une nouvelle feature ne touche pas aux existantes.

**TypeScript strict** - les entités métier (Card, Column, Board) sont entièrement typées. L'usage de types union littéraux (`CardStatus`) garantit l'exhaustivité des cas à la compilation.

## Fonctionnalités

- Créer des tâches dans n'importe quelle colonne
- Déplacer une tâche vers la colonne suivante
- Supprimer une tâche
- Persistance automatique entre les sessions (localStorage)