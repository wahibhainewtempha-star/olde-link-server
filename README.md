# OLDE LINK Server

Minimal Node.js starter for deploying the OLDE LINK backend.

## Run locally

```bash
npm install
npm start
```

Open:

- `/` — basic server response
- `/health` — health check
- `/api/status` — API status

## Render deployment

Create a **Web Service** from this GitHub repository.

- Runtime: Node
- Build command: `npm install`
- Start command: `npm start`
- Instance: choose Free if it is offered in your account

Render provides the `PORT` environment variable automatically.

## Security scope

This starter only exposes health and status endpoints. It does not provide remote shell access, covert device control, or arbitrary commands. The next development stage is authenticated, user-approved device enrollment and persistent device status storage.
