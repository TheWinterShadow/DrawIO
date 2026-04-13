# DrawIO

Self-hosted [draw.io](https://www.drawio.com/) diagram editor with all cloud integrations disabled. Runs as a static site behind Nginx.

## Features

- Full draw.io editor running locally
- All cloud storage disabled (no Google Drive, OneDrive, Dropbox, GitHub, GitLab, Trello)
- Client-side PNG export
- Open and save `.drawio` files from your device
- No telemetry, no external data transmission
- Lightweight Nginx container (~80MB + draw.io assets)

## Quick Start

### Docker

```bash
docker run -d --name drawio -p 8080:8080 thewintershadow/drawio
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Docker Compose

```yaml
services:
  drawio:
    image: thewintershadow/drawio
    restart: unless-stopped
    ports:
      - "8080:8080"
```

### Build Locally

```bash
docker build -t drawio .
docker run -d --name drawio -p 8080:8080 drawio
```

## Configuration

Custom configuration lives in `config/`:

| File | Purpose |
|------|---------|
| `config/PreConfig.js` | Loaded before draw.io — sets offline mode, disables cloud integrations |
| `config/PostConfig.js` | Loaded after draw.io — disables telemetry, icon search |

## Deployment

Deployed automatically on push to `main`:

- **GitHub Pages** — [thewintershadow.github.io/DrawIO](https://thewintershadow.github.io/DrawIO/)
- **Docker Hub** — [thewintershadow/drawio](https://hub.docker.com/r/thewintershadow/drawio)

## Updating draw.io Version

The draw.io version is pinned in two places:

1. `Dockerfile` — `ARG DRAWIO_VERSION=29.6.10`
2. `.github/workflows/pages.yml` — `DRAWIO_VERSION: '29.6.10'`

Update both to the desired [release tag](https://github.com/jgraph/drawio/releases) and push.

## License

MIT
