# Pull base image from stock node image.
FROM node:8.11.2

# Maintainer
MAINTAINER Duncan Gichimu

# Working Dir
WORKDIR "/app"

# Install dependencies
COPY package.json /app/
RUN cd /app; npm install

# Bundle app source
COPY . /app

# Run server
EXPOSE 3000
CMD ["npm", "start"]