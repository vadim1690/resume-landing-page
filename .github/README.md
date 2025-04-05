# GitHub Actions Workflows

This directory contains the GitHub Actions workflows for automatically deploying the Resume Landing Page project.

## Workflow Files

- `deploy-frontend.yml`: Deploys the React frontend to Vercel on push to main/master
- `deploy-backend.yml`: Deploys the .NET API backend to Fly.io on push to main/master

## Required Secrets

For these workflows to function correctly, you need to set up the following secrets in your GitHub repository:

### Vercel Deployment (Frontend)

- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID
- `VITE_API_URL`: The URL of your deployed API (e.g., https://resumeapi.fly.dev/api/Resume)

### Fly.io Deployment (Backend)

- `FLY_API_TOKEN`: Your Fly.io API token

## How to Set Up Secrets

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Click on "New repository secret"
4. Add each of the secrets listed above

## Getting the Required Values

### Vercel

- `VERCEL_TOKEN`: Create from your Vercel account settings > Tokens
- `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`: Run `vercel link` in your project directory and check the `.vercel/project.json` file

### Fly.io

- `FLY_API_TOKEN`: Create from your Fly.io account settings or run `fly auth token`
