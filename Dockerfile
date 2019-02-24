FROM node:8.15.0-alpine as stage1
COPY . /app
WORKDIR /app
RUN npm install && npm run build


FROM nginx:latest
# Need to update the nginx config for the /iceland path
COPY --from=stage1 /app/build/ /usr/share/nginx/iceland