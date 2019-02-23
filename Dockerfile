FROM node:8.15.0-alpine
COPY . /app
WORKDIR /app
EXPOSE 3000/tcp
RUN npm install
ENTRYPOINT ["npm"]