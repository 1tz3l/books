#Node.js offical image
FROM node:18-alpine3.18

# Set the working directory
WORKDIR /usr/index

# Set the Node.js module search path
ENV NODE_PATH=/usr/index

# Copy package.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Expose a internal port inside the container
EXPOSE 9090

CMD ["npm", "run", "start"]