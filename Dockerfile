# Build image with node:alpine and set the name 'builder'
FROM node:alpine as builder
WORKDIR /usr/src/app

COPY package.json .

COPY tsconfig.json ./
# Install dependencies
RUN npm install

# Copy all files to the current directory
COPY . .
# Run tests with --watchAll
RUN npm test -- --watchAll=false
# Run build:compile command
RUN npm run build:compile

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]


# Use the builder image as the base image for the final image
FROM builder as final

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]