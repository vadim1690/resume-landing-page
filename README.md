# Resume Landing Page

This repository contains a full-stack application for creating and displaying a professional resume.

## Project Structure

The project is organized into two main directories:

- **frontend/**: Contains the React application

  - Built with React, TypeScript, and Tailwind CSS
  - Frontend for displaying resume data in a responsive layout

- **backend/**: Contains the .NET Web API
  - API built with ASP.NET Core
  - Provides resume data endpoints
  - Contains test project for API testing

## Development Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
dotnet restore ./api/ResumeApi/ResumeApi.csproj
dotnet run --project ./api/ResumeApi/ResumeApi.csproj
```

## Deployment

- Frontend is deployed to Vercel
- Backend is deployed to Fly.io

## CI/CD

The project uses GitHub Actions for continuous integration and deployment:

- React unit tests on frontend changes
- .NET unit tests on backend changes
- Automated deployment to Vercel (frontend) and Fly.io (backend)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- .NET SDK 7.0+
- Git

### Installation and Setup

#### Frontend (React)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create an `.env.local` file in the root directory with:

   ```
   VITE_API_URL=http://localhost:5112/api/Resume
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. The app will be available at `http://localhost:5173`

#### Backend (API)

1. Navigate to the API directory:

   ```bash
   cd api/ResumeApi
   ```

2. Build and run the API:

   ```bash
   dotnet build
   dotnet run
   ```

3. The API will be available at `http://localhost:5112`

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

### Backend

1. **Service Pattern**:

   - Follow the service pattern for data access
   - Implement caching for improved performance

2. **API Design**:

   - Use RESTful conventions for endpoints
   - Include appropriate HTTP status codes and error handling

3. **CORS Configuration**:
   - Configure CORS appropriately for security

## Testing

This project includes automated tests for both the frontend and backend components.

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

### Backend Tests

The .NET backend uses xUnit for testing.

1. Navigate to the test project:

   ```bash
   cd api/ResumeApi.Tests
   ```

2. Run the tests:

   ```bash
   dotnet test
   ```

3. Run tests with coverage report:

   ```bash
   dotnet test --collect:"XPlat Code Coverage"
   ```

### Continuous Integration

Tests are automatically run on each push to the repository through GitHub Actions workflows:

- React tests run when changes are made to the frontend code
- .NET tests run when changes are made to the backend code

If tests fail, the deployment pipelines are blocked to prevent deploying broken code.

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License.
