# Base image
FROM node:18-alpine

# App directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 8000

# Start app
CMD ["npm", "run", "dev"]