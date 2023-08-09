# Use the base image with Node.js pre-installed
FROM node:14

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port that the app will run on (React's default is 3000)
EXPOSE 8080

# Define the command to start the app
CMD [ "npm", "start" ]
