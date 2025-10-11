# CrackCV

CrackCV is an all-in-one platform that helps users create professional resumes, track job applications, prepare for interviews, and identify skill gaps. The platform provides AI-powered insights for resume optimization, personalized learning roadmaps, and a centralized dashboard for career management.

## Architecture

This project follows the Feature-Sliced Design (FSD) architecture pattern for scalability and maintainability.

### FSD Layer Hierarchy

```
src/
├── app/                       # App layer (entry point, routing, providers)
│   ├── index.tsx
│   ├── providers/
│   │   ├── index.tsx
│   │   └── withProviders.tsx
│   ├── router/
│   │   ├── index.tsx
│   │   └── routes.ts
│   └── styles/
├── pages/                     # Pages layer (routes)
│   ├── home/
│   │   ├── index.tsx
│   │   └── ui/
│   ├── dashboard/
│   │   ├── index.tsx
│   │   └── ui/
│   ├── cv/
│   │   ├── index.tsx
│   │   ├── list/
│   │   │   └── index.tsx
│   │   ├── editor/
│   │   │   └── index.tsx
│   │   └── templates/
│   │       └── index.tsx
│   ├── jobs/
│   │   ├── index.tsx
│   │   ├── search/
│   │   │   └── index.tsx
│   │   ├── tracker/
│   │   │   └── index.tsx
│   │   └── details/
│   │       └── index.tsx
│   ├── interview/
│   │   ├── index.tsx
│   │   ├── practice/
│   │   │   └── index.tsx
│   │   └── questions/
│   │       └── index.tsx
│   ├── analytics/
│   │   └── index.tsx
│   └── profile/
│       └── index.tsx
├── widgets/                   # Widgets layer (composite components)
│   ├── header/
│   │   ├── index.tsx
│   │   ├── ui/
│   │   ├── model/
│   │   ├── api/
│   │   └── lib/
│   ├── sidebar/
│   │   ├── index.tsx
│   │   ├── ui/
│   │   ├── model/
│   │   ├── api/
│   │   └── lib/
│   ├── job-card/
│   │   ├── index.tsx
│   │   ├── ui/
│   │   ├── model/
│   │   ├── api/
│   │   └── lib/
│   └── cv-preview/
│       ├── index.tsx
│       ├── ui/
│       ├── model/
│       ├── api/
│       └── lib/
├── features/                  # Features layer (business features)
│   ├── auth/
│   │   ├── index.ts
│   │   ├── ui/
│   │   │   ├── sign-in-form/
│   │   │   ├── sign-up-form/
│   │   │   └── forgot-password/
│   │   ├── model/
│   │   │   ├── auth.store.ts
│   │   │   └── auth.selectors.ts
│   │   ├── api/
│   │   │   └── auth.api.ts
│   │   └── lib/
│   ├── cv-builder/
│   │   ├── index.ts
│   │   ├── ui/
│   │   │   ├── editor/
│   │   │   ├── toolbar/
│   │   │   └── preview/
│   │   ├── model/
│   │   │   ├── cv.store.ts
│   │   │   └── cv.selectors.ts
│   │   ├── api/
│   │   │   └── cv.api.ts
│   │   └── lib/
│   ├── job-tracker/
│   │   ├── index.ts
│   │   ├── ui/
│   │   │   ├── board/
│   │   │   ├── card/
│   │   │   └── filters/
│   │   ├── model/
│   │   │   ├── tracker.store.ts
│   │   │   └── tracker.selectors.ts
│   │   ├── api/
│   │   │   └── tracker.api.ts
│   │   └── lib/
│   ├── job-search/
│   │   ├── index.ts
│   │   ├── ui/
│   │   │   ├── results/
│   │   │   ├── filters/
│   │   │   └── saved-jobs/
│   │   ├── model/
│   │   │   ├── search.store.ts
│   │   │   └── search.selectors.ts
│   │   ├── api/
│   │   │   └── search.api.ts
│   │   └── lib/
│   ├── interview-prep/
│   │   ├── index.ts
│   │   ├── ui/
│   │   │   ├── practice-room/
│   │   │   ├── question-bank/
│   │   │   └── feedback/
│   │   ├── model/
│   │   │   ├── interview.store.ts
│   │   │   └── interview.selectors.ts
│   │   ├── api/
│   │   │   └── interview.api.ts
│   │   └── lib/
│   ├── analytics/
│   │   ├── index.ts
│   │   ├── ui/
│   │   │   ├── dashboard/
│   │   │   ├── charts/
│   │   │   └── reports/
│   │   ├── model/
│   │   │   ├── analytics.store.ts
│   │   │   └── analytics.selectors.ts
│   │   ├── api/
│   │   │   └── analytics.api.ts
│   │   └── lib/
│   └── notifications/
│       ├── index.ts
│       ├── ui/
│       ├── model/
│       ├── api/
│       └── lib/
├── entities/                  # Entities layer (business entities)
│   ├── user/
│   │   ├── index.ts
│   │   ├── ui/
│   │   ├── model/
│   │   │   ├── user.types.ts
│   │   │   ├── user.store.ts
│   │   │   └── user.selectors.ts
│   │   ├── api/
│   │   │   └── user.api.ts
│   │   └── lib/
│   ├── cv/
│   │   ├── index.ts
│   │   ├── ui/
│   │   ├── model/
│   │   │   ├── cv.types.ts
│   │   │   ├── cv.store.ts
│   │   │   └── cv.selectors.ts
│   │   ├── api/
│   │   │   └── cv.api.ts
│   │   └── lib/
│   ├── job/
│   │   ├── index.ts
│   │   ├── ui/
│   │   ├── model/
│   │   │   ├── job.types.ts
│   │   │   ├── job.store.ts
│   │   │   └── job.selectors.ts
│   │   ├── api/
│   │   │   └── job.api.ts
│   │   └── lib/
│   ├── application/
│   │   ├── index.ts
│   │   ├── ui/
│   │   ├── model/
│   │   │   ├── application.types.ts
│   │   │   ├── application.store.ts
│   │   │   └── application.selectors.ts
│   │   ├── api/
│   │   │   └── application.api.ts
│   │   └── lib/
│   └── interview/
│       ├── index.ts
│       ├── ui/
│       ├── model/
│       │   ├── interview.types.ts
│       │   ├── interview.store.ts
│       │   └── interview.selectors.ts
│       ├── api/
│       │   └── interview.api.ts
│       └── lib/
└── shared/                    # Shared layer (no business logic)
    ├── ui/                    # Shared UI components
    │   ├── button/
    │   ├── card/
    │   ├── input/
    │   ├── modal/
    │   ├── badge/
    │   ├── avatar/
    │   └── ...
    ├── lib/                   # Shared utilities
    │   ├── api-client/
    │   ├── date-utils/
    │   ├── file-utils/
    │   ├── string-utils/
    │   └── ...
    ├── config/                # Configuration
    │   ├── index.ts
    │   ├── api.config.ts
    │   └── app.config.ts
    ├── assets/                # Static assets
    │   ├── icons/
    │   ├── images/
    │   └── ...
    └── types/                 # Global types
        ├── index.ts
        ├── global.types.ts
        └── ...
```

## Requirements

- Node.js 18.x or later
- pnpm (recommended) or npm/yarn
- Git

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Integral-X/crackcv-ui.git
   cd crackcv-ui
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code Quality

Run ESLint to check for code quality issues:

```bash
pnpm lint
```

Automatically fix fixable issues:

```bash
pnpm lint:fix
```

## Code Formatting

This project uses Prettier for code formatting. To check formatting:

```bash
pnpm format:check
```

To automatically format all files:

```bash
pnpm format
```

## Testing

This project uses Jest and React Testing Library for unit testing.

Run all tests:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

Run tests with coverage report:

```bash
pnpm test:coverage
```


