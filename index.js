const fs = require("fs");

function createDockerfile(port) {
  // File path
  const filePath = "Dockerfile";

  // Text to add to the file
  const textToAdd = `FROM node:19-alpine

    # Create app directory
    WORKDIR /home/node/app

    # Copy package files and install dependencies
    COPY package*.json ./
    RUN npm install --production

    # Bundle app source
    COPY . .

    # Set the user to run the app
    USER node

    # Expose port ${port}
    EXPOSE ${port}

    # Command to run the application
    CMD [ "node", "index.js" ]`;

  // Create or append to the file
  if (fs.existsSync(filePath)) {
    console.log("File already exists. Skipping creation.");
  } else {
    // Create the file and add text if it doesn't exist
    fs.writeFile(filePath, textToAdd, (err) => {
      if (err) {
        console.error("Error creating file:", err);
        return;
      }
      console.log("File created and text added successfully!");
    });
  }
}

module.exports = createDockerfile;
