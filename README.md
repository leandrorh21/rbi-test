# Test RBI

Test for RBI

## Technologies used

- NodeJS (v.16.16.0)
- Typescript
- GraphQl (Query language API)
- Sequelize (ORM for Postgres)
- Jest
- Docker
- Docker Compose

## Commands

### Clone the project

1. Clone the repository (HTTPS)

```bash
https://github.com/leandrorh21/rbi-test.git
```

2. Clone the repository (SSH)

```bash
git@github.com:leandrorh21/rbi-test.git
```

### Run localy

1. Install dependencies (use yarn)

```bash
yarn install
```

2. COPY .env file in project root

3. Run command

```bash
yarn start:dev
```

4. Enter to

```bash
http://localhost:4002
```

### Run containers

1. Copy .envContainer file in project root

2. Run command

```bash
docker compose up -d
```

3. Restore database backup

```bash
cat backup-test-rbi | docker exec -i rbi-test-db-postgres-1 psql -U leandro
```

4. Enter to

```bash
http://localhost:4000
```

### Run tests

1. Install dependencies

```bash
yarn install
```

2. Run command

```bash
yarn test
```
