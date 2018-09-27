FROM node:alpine

RUN npm install -g json-server

WORKDIR /app
EXPOSE 3000
CMD ["json-server", "--host=0.0.0.0", "--port=3000", "--watch", "db.json"]

