# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy backend source code
COPY . .

# Expose backend port (change if your backend uses a different port)
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]