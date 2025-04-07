FROM node:23-alpine

WORKDIR /mustapha_caleb_final_site

COPY build ./

COPY package*.json ./

RUN npm install

EXPOSE 5575

CMD ["npx", "http-server", "-p", "5575", "."]