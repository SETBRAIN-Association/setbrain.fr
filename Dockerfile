# syntax=docker/dockerfile:1

FROM node:16.16.0
WORKDIR /app
COPY ["package.json", "package-lock.json", ".npmrc", "./"]
RUN npm i -g pnpm
RUN pnpm i
COPY . .
RUN pnpm run build
CMD ["pnpm", "run", "start"]
EXPOSE 3000
