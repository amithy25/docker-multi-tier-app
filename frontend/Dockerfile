# ---- Build Stage ----
FROM node:18-alpine AS build

WORKDIR /app

# Copy only dependency files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy rest of the code
COPY . .

# Build the React app for production
RUN npm run build


# ---- Runtime Stage ----
FROM nginx:alpine

# Copy production build from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

