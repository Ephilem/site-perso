FROM node:20-alpine AS builder

RUN apk add --no-cache python3 make g++ libtool musl-dev

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:20-alpine AS production

RUN apk add --no-cache python3 make g++ libtool musl-dev

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["node", "build"] 