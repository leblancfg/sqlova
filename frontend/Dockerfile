FROM node:10-slim as frontend-build

ENV NPM_CONFIG_LOGLEVEL error

WORKDIR /opt

# Install node modules for frontend.
COPY . .
RUN npm install
RUN npm install -g @angular/cli
RUN ng build --prod=true

FROM nginx:1-alpine

WORKDIR /data/www

COPY --from=frontend-build /opt/dist .
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080