FROM node:latest

# create app directory
RUN mkdir -p/usr/src/app
WORKDIR /usr/src/app

#copy package.json
COPY package.json /usr/src/app

# install node_modules
RUN npm install

# copy files
COPY . /usr/src/app