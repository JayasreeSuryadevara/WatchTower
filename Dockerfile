FROM node:alpine as builder
WORKDIR '/app'
COPY ./watch-tower-client/package*.json ./
ENV NODE_ENV=production
ENV REACT_APP_NEWSAPIKEY=9728360b8b3b4c58a97cc5de418daf3a
ENV REACT_APP_STOCKAPIKEY=dcd87547aab6eb97c1243c9ce1e47e32
RUN npm install 
COPY ./watch-tower-client ./
RUN npm run build

FROM node:alpine
WORKDIR '/app'
COPY --from=builder /app/build ./build
ENV NODE_ENV=production
COPY ./watch-tower-server/package*.json ./
RUN npm install
COPY ./watch-tower-server ./
EXPOSE 5000
CMD ["npm","start"]