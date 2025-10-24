# ---- Build Stage ----
FROM node:18-alpine

WORKDIR /app

# Copy only dependency files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the code
COPY . .

# Expose port 5000
EXPOSE 5000

CMD ["npm", "start"]

