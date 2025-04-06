# GitHub Secrets for CI/CD Workflows

Add the following secrets to your GitHub repository:

1. Go to your repository on GitHub
2. Click on Settings
3. Go to Secrets and Variables > Actions
4. Add New Repository Secret for each of the following:

## Required Secrets for Vercel Deployment

| Secret Name         | Value                            | How to Get                                                                               |
| ------------------- | -------------------------------- | ---------------------------------------------------------------------------------------- |
| `VERCEL_TOKEN`      | Your Vercel API token            | Go to [Vercel Dashboard](https://vercel.com/account/tokens) > Settings > Tokens > Create |
| `VERCEL_PROJECT_ID` | prj_7OFK11CLE0iyS1QWXIIad9mlxiyU | Already extracted from your .vercel/project.json file                                    |
| `VERCEL_ORG_ID`     | team_9xgD0uYMbB8QmEAZ3I5tBjST    | Already extracted from your .vercel/project.json file                                    |

## Note

- These tokens give deploy access to your accounts, so keep them secure
- GitHub securely encrypts these secrets and only exposes them to the workflow runs
- Tokens can be revoked from their respective platforms if needed
