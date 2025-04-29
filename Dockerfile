# Use the official Node.js image as the base image
FROM node:20 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application files
COPY . .

# Install application dependencies
RUN npm install

# Build the TypeScript code
RUN npm run postinstall

# Expose the port the app runs on
EXPOSE 8085

# Command to start the application
CMD ["npm", "start"]