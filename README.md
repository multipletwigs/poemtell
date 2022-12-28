# OpenAI-manager
A short presentation for ELC Engineering. 

### Setting up your environments 
Please go into the nextjs-fe directory and create a `.env.local` file. Then put in the following environment variables. 

```env
# This is the API key to use OpenAI services
OPEN_AI_API=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

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings
# Database URL from Connection Pool in Supabase
DATABASE_URL="postgresql://postgres:ELCpresentation22@@db.kiyzxzwrnudmxqignmwk.supabase.co:5432/postgres"
``` 

Then run the following code. 
1. `npm install` 
2. `npx prisma pull db` 
3. `npx prisma generate` 

Finally, we can run the dev environement 
1. `npm run dev`
