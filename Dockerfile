FROM nginx:1.27-alpine AS build

ARG DRAWIO_VERSION=29.6.10

# Install curl for downloading
RUN apk add --no-cache curl

# Download and extract only the webapp from the release tarball
RUN set -eux; \
    mkdir -p /app; \
    curl -fsSL "https://github.com/jgraph/drawio/archive/refs/tags/v${DRAWIO_VERSION}.tar.gz" \
    | tar -xz --strip-components=4 -C /app "drawio-${DRAWIO_VERSION}/src/main/webapp/"

# Copy custom config files (overwrite defaults)
COPY config/PreConfig.js /app/js/PreConfig.js
COPY config/PostConfig.js /app/js/PostConfig.js

# ---

FROM nginx:1.27-alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app from build stage
COPY --from=build /app /usr/share/nginx/html/

# Run as non-root
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -qO- http://localhost:8080/healthz || exit 1
