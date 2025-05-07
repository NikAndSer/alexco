# AlexCo Project Documentation

## Project Overview

AlexCo is a Next.js-based web application that now uses the modern App Router and folder-based internationalization, with a robust frontend setup and a focus on maintainability and learning.

## Technology Stack

- **Framework**: Next.js 13.4.13 (App Router)
- **Frontend**: React 18.2.0
- **Styling**:
  - Bootstrap 5.3.1
  - SASS
  - Styled Components
- **Icons**:
  - Font Awesome 6.4.2
  - Bootstrap Icons 1.10.5
- **Internationalization**: Folder-based i18n with custom middleware (no next-i18next)

## Project Structure

```
alexco/
├── app/                    # Next.js 13+ App Router directory (all routes and i18n)
│   └── [lang]/             # Dynamic language segment for i18n
│       ├── layout.js       # Root layout for all language routes
│       ├── page.js         # Homepage for each language
│       └── ...             # Other routes (menu, cart, etc.)
├── components/             # Reusable React components
├── styles/                 # Global styles and SASS files
├── public/                 # Static assets
├── utils/                  # Utility functions and helpers
├── middleware.ts           # Custom middleware for language redirection
├── docs/                   # Project documentation
└── ...
```

## Key Features

1. **Internationalization Support**

   - Uses App Router's folder-based i18n: all routes are under `app/[lang]/...`
   - Custom middleware (`middleware.ts`) redirects users to the default language if needed
   - No longer uses next-i18next; all translation logic is now custom and ready for further extension

2. **Styling System**

   - Bootstrap integration
   - SASS support with custom styles
   - Styled Components for component-specific styling

3. **Development Setup**
   - Next.js development server
   - ESLint configuration
   - VS Code integration

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:3000

## Project Configuration

### Next.js Configuration

- Custom SASS configuration
- Folder-based internationalization (no next-i18next)
- Image optimization with Sharp

### Environment Setup

- Development server configuration
- Build and deployment scripts

## Migration & Learning Journey

### Why migrate?

- To adopt the latest Next.js App Router features
- To simplify internationalization using folder structure and middleware
- To remove dependency on next-i18next and learn the new recommended approach

### What was changed?

- All routes were moved from the `pages/` directory to the `app/` directory, under `[lang]` for i18n
- All usage of next-i18next was removed from components and configuration
- A custom `middleware.ts` was added to handle language redirection
- The project structure and documentation were updated to reflect these changes

### What was learned?

- How to use the App Router and dynamic segments for i18n
- How to write and configure Next.js middleware
- How to refactor components to remove next-i18next and prepare for custom translation logic
- The importance of keeping documentation and codebase up to date with the latest best practices

## Future Planning

### Immediate Tasks

# Most important

- [x] Complete migration to App Router
- [ ] Complete translation (implement custom translation logic or use a new library)
- [ ] Fill in the menu information and images (content)
- [ ] Website deployment

## Secondary

- [ ] Document existing components
- [ ] Create component usage guidelines
- [x] Document internationalization setup (updated for App Router)
- [ ] Add testing setup documentation

### Long-term Goals

- [ ] Performance optimization strategy
- [ ] Accessibility guidelines
- [ ] Deployment pipeline documentation
- [ ] API documentation (if applicable)

## Contributing

Guidelines for contributing to the project will be added here.

## License

License information will be added here.
