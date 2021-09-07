FROM node:16-alpine

WORKDIR /app

# RUN apk add git

# RUN git clone ...

# RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]