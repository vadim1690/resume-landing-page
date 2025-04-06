# Resume Landing Page

This repository contains a React application for creating and displaying a professional resume.

## Project Structure

The project is organized into:

- **frontend/**: Contains the React application
  - Built with React, TypeScript, and Tailwind CSS
  - Frontend for displaying resume data in a responsive layout
  - Uses mock data for demonstration purposes

## Development Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Deployment

- Frontend is deployed to Vercel

## CI/CD

The project uses GitHub Actions for continuous integration and deployment:

- React unit tests on frontend changes
- Automated deployment to Vercel (frontend)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Git

### Installation and Setup

#### Frontend (React)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. The app will be available at `http://localhost:5173`

## Development Best Practices

### Frontend

1. **Component Structure**:

   - Use functional components with hooks
   - Organize components into `ui`, `layout`, and `sections` folders
   - Use custom hooks for data fetching and shared logic

2. **Data Fetching**:

   - Use the centralized `useResumeData` hook for data access
   - Handle loading and error states consistently

3. **Styling**:

   - Use Tailwind CSS for styling components
   - Organize custom styles in appropriate CSS modules

4. **Performance**:
   - Use React.lazy and Suspense for code-splitting
   - Implement memoization where beneficial
   - Use ErrorBoundary components to catch and handle errors

## Testing

This project includes automated tests for the frontend components.

### Frontend Tests

The React frontend uses Vitest and React Testing Library for testing.

1. Run the tests:

   ```bash
   npm test
   ```

2. Run the tests in watch mode during development:

   ```bash
   npm run test:watch
   ```

3. Run tests with coverage report:

   ```bash
   npm run test:ci
   ```

### Continuous Integration

Tests are automatically run on each push to the repository through GitHub Actions workflows:

- React tests run when changes are made to the frontend code

If tests fail, the deployment pipelines are blocked to prevent deploying broken code.

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License.
