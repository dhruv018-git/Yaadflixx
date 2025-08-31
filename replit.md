# YaadFlix - Movie Streaming Platform

## Overview

YaadFlix is a modern movie streaming web application built with React and Express. The platform provides a Netflix-like experience with featured movies, trending content, series, and genre-based browsing. The application features a responsive design with glassmorphism effects, smooth animations, and a comprehensive movie catalog system. Users can browse movies, view detailed information, and enjoy a premium streaming interface with search functionality and categorized content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming and glassmorphism effects
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Design System**: Custom dark theme with purple/blue gradient accents and glassmorphism effects

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Pattern**: RESTful API design with structured endpoints
- **Data Access**: In-memory storage implementation with interface for easy database migration
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Development Server**: Hot reload with Vite integration in development mode

### Component Architecture
- **Layout Components**: Navigation, Hero slider, Footer with responsive design
- **Content Components**: Movie cards, category pills, newsletter signup
- **UI Components**: Comprehensive component library based on Radix UI primitives
- **Shared Types**: TypeScript interfaces shared between client and server via shared directory

### Data Storage Design
- **Current Implementation**: In-memory storage with sample movie data
- **Schema Design**: Drizzle ORM with PostgreSQL schema definitions
- **Database Migration Ready**: Configured for PostgreSQL with migration support
- **Data Models**: Movies with comprehensive metadata (title, description, year, genre, rating, poster/backdrop URLs, type, seasons, featured/trending flags)

### API Structure
- **Movies Endpoint**: `/api/movies` - Get all movies
- **Featured Content**: `/api/movies/featured` - Get featured movie for hero section  
- **Trending Movies**: `/api/movies/trending` - Get trending movies
- **Series Content**: `/api/movies/series` - Get TV series content
- **Error Handling**: Consistent error responses with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging and performance monitoring

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon database client for PostgreSQL connectivity
- **drizzle-orm**: Modern TypeScript ORM for database operations
- **drizzle-kit**: Database migration and schema management tools
- **@tanstack/react-query**: Server state management and data fetching

### UI and Styling Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, tooltip, etc.)
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for constructing className strings conditionally

### Form and Validation
- **react-hook-form**: Forms with minimal re-renders and built-in validation
- **@hookform/resolvers**: Resolver library for React Hook Form
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

### Additional Features
- **wouter**: Minimalist routing library for React
- **date-fns**: Modern JavaScript date utility library
- **embla-carousel-react**: Carousel component for content sliders
- **cmdk**: Command palette component for search functionality

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling