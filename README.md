# Resume Landing Page

A professional personal portfolio and resume landing page built with React (frontend) and .NET API (backend).

## Project Structure

This project consists of two main parts:

1. **React Frontend**: A modern, responsive React application using TypeScript, Tailwind CSS, and Framer Motion animations
2. **.NET Backend API**: A .NET Core API that serves resume data

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

## Deployment

### Frontend

The frontend is configured for deployment on Vercel:

1. Connect the GitHub repository to Vercel
2. Set the environment variable `VITE_API_URL` to point to the deployed API

### Backend

The backend is configured for deployment on Fly.io:

1. Make sure Fly CLI is installed:

   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. Deploy to Fly.io:
   ```bash
   cd api/ResumeApi
   fly deploy
   ```

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License.
