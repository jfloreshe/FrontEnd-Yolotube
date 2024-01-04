# Base image for Node.js environment
FROM node:18-alpine

# Working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g vite
# Copy remaining project files
COPY . .

# Expose port for server (adjust as needed)
EXPOSE 5173

# Start the server using npm run dev
CMD ["npm", "run", "dev"]

