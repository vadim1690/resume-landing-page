# Resume Landing Page

A modern, responsive resume/portfolio website built with React, TypeScript, and Tailwind CSS.

## Architecture

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: .NET API (hosted on Fly.io)

## Deployment

### Backend API (Fly.io)

The .NET API is deployed to Fly.io at: https://resumeapi.fly.dev/api/Resume

To deploy updates:

```
cd api/ResumeApi
flyctl deploy
```

### Frontend React App

The React frontend is hosted on Vercel and configured to use the Fly.io API endpoint in production.

## Local Development

1. **Run the API**

   ```
   cd api/ResumeApi
   dotnet run
   ```

2. **Run the React app**
   ```
   npm run dev
   ```

The React app will be available at `http://localhost:5173` and the API at `http://localhost:5112/api/Resume`.
