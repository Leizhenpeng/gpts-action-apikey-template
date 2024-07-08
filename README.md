
#  GPTs Action API Quickly Template By NestJs

- **Template Launch**: New template for GPT Actions API creation.
- **API Key Authentication**: Supports API key authorization for secure access.
- **Tech Stack**: NestJS, TypeScript, Zod, And Vercel
- **Local Testing**: Integrated tunnel for local environment trials.

### Installation
```bash
git clone https://github.com:Leizhenpeng/gpts-action-apikey-template.git
cd gpts-action-apikey-template

# dev
pnpm install
pnpm run cpolar # tunnel local port
cp .env.example .env
pnpm run dev

# production
vercel 
```

### Configure

**In [.env](./.env)** File
  - Change `BASE_URL` with yours 
  - Set `API_KEY` with yours
  - (_Not required_) Set `SENTRY_DSN` to enable Sentry error reporting
    
**In [main.ts](./src/main.ts)** File
  - Set the `Title` and `Description` of the API

### Add Your Ation

- Look at [wikipedia.controller.ts](./src/wikipedia/wikipedia.controller.ts) and [wikipedia.dto.ts](./src/wikipedia/wikipedia.dto.ts) to see how to add a new action

### Process OpenAI Headers

OpenAI provides identifying information with each query. You can access them in routes using the [ChatGptHeaders](./src/chat-gpt/chat-gpt.dto.ts) decorator

```ts
@Post('/my/path')
function myPath(@ChatGptHeaders() headers: ChatGptHeaders) {}
```

## GPTs Web config

The OpenAPI schema's URL will be shown in the terminal window in blue.Copy it

In "actions" section of your GPTs app:
- Click "Create New Action"
- Click on "Import from URL"
- Paste the URL.
- Click "Import"


