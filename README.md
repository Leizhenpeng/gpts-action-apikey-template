# NestJS GPTs Action API Template
- **Template Launch**: New template for GPT Actions API creation .
- **Tech Stack**: NestJS, TypeScript, and Zod.
- **API Specs**: Auto-generation for OpenAI compatibility.
- **Local Testing**: Integrated tunnel for local environment trials.
- **Deployment Ready**: Environment variables for easy setup.
- **API Key Authentication**: Supports API key authorization for secure access.
- **Documentation**: Includes detailed example and action schema URL.
- **Quick Setup**: Follow our concise docs for a 5-minute integration.

## Installation¬
```bash
git clone https://github.com:Leizhenpeng/gpts-action-apikey-template.git
cd gpts-action-apikey-template

pnpm install
pnpm run cpolar # tunnel local

cp .env.example .env
```

## Configure

- In [.env](./.env)
  - Change `BASE_URL` with yours
  - Set `API_KEY` with yours
  - (_Not required_) Set `SENTRY_DSN` to enable Sentry error reporting
- In [main.ts](./src/main.ts)
  - Set the `Title` and `Description` of the API

## Run Locally

And in another terminal window

```bash
pnpm run start:dev
# or
pnpm run start:debug
```

- The OpenAPI schema's URL will be shown in the terminal window in blue.
  - Copy it
  - In "actions" section of your GPT app:
    - Click "Create New Action"
    - Click on "Import from URL"
    - Paste the URL.
    - Click "Import"

## Add an action

- Look at [wikipedia.controller.ts](./src/wikipedia/wikipedia.controller.ts) and [wikipedia.dto.ts](./src/wikipedia/wikipedia.dto.ts) to see how to add a new action

## Process OpenAI Headers

OpenAI provides identifying information with each query. You can access them in routes using the [ChatGptHeaders](./src/chat-gpt/chat-gpt.dto.ts) decorator

```ts
@Post('/my/path')
function myPath(@ChatGptHeaders() headers: ChatGptHeaders) {
  // ...
}
```
