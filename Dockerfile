FROM node:alpine as builder
WORKDIR '/app'
COPY ./watch-tower-client/package*.json ./
ENV NODE_ENV=production
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