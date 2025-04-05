# Resume API

This is a .NET API that serves resume data for my personal website.

## Deployment to Fly.io

The API is deployed to Fly.io at: https://resumeapi.fly.dev/api/Resume

To deploy updates:

```
cd ResumeApi
flyctl deploy
```

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

The API will be available at `http://localhost:5112/api/Resume` by default.

## Project Structure

- `ResumeApi/` - The .NET Web API project
  - `Controllers/` - API controllers
  - `Models/` - Data models
  - `Services/` - Services for providing data

## API Endpoints

- `/api/Resume/personalInfo` - Get personal information
- `/api/Resume/navLinks` - Get navigation links
- `/api/Resume/socialLinks` - Get social media links
- `/api/Resume/experiences` - Get work experiences
- `/api/Resume/education` - Get education details
- `/api/Resume/skillCategories` - Get skill categories
- `/api/Resume/projects` - Get projects
- `/api/Resume/all` - Get all data in a single request

## Frontend Integration

The frontend React app has been updated to fetch data from this API. If the API is not running or returns an error, the frontend will fall back to the local data.

### API Service

The frontend integration is implemented in `src/api/resumeApi.ts`, which provides functions to fetch data from the API endpoints.
