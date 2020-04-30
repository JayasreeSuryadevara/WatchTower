FROM node:alpine as builder
WORKDIR '/app'
COPY ./watch-tower-client/package*.json ./
ENV NODE_ENV=production
ENV REACT_APP_NEWSAPIKEY=43c73ae0a1ac456ab319b7a974297975
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