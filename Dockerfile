FROM node:22.14.0-alpine

WORKDIR /app

# Copy application code
COPY . ./

# Install pnpm and dependencies
RUN npm install

# Build TypeScript
RUN npm ci --ignore-scripts --omit-dev

# Command will be provided by smithery.yaml
ENTRYPOINT ["node", "dist/index.js"] 