FROM node:16

WORKDIR /usr/src
COPY . .
RUN ["npm", "ci"]

EXPOSE 3000
CMD npm run node