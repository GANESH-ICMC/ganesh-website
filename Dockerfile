# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Production image, copy all the files and run next
FROM node:alpine
WORKDIR /app
COPY . .

RUN source .env
RUN yarn install --frozen-lockfile
RUN yarn run export

ENV NODE_ENV production

EXPOSE 3000

CMD ["yarn", "run", "start"]