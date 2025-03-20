FROM node:22.14.0-alpine

WORKDIR /app

# Copy application code
COPY . ./

# Install pnpm and dependencies
RUN npm install

# Build TypeScript
RUN npm run build

# Command will be provided by smithery.yaml
CMD ["node", "dist/index.js"] 