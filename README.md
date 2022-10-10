## Implemented features:

- [x] Sign-up, log-in, and logout
- [x] Get and create companies
- [x] Get and create locals
- [x] Get, create and edite managers
- [x] Get and create tickets

## Technologies

<p>

  <img alt="node" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img alt="jwt" src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
  <img alt="postgress" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img alt="typecript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img alt="eslinter" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>

</p>

## Requirements

### [npm](https://www.npmjs.com/)

<details>
    <summary>install npm</summary>

```bash
wget -qO- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh> | bash

## Or this command
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Close and open terminal
nvm install --lts
nvm use --lts
# Verify node version
node --version # Must show v14.16.1
# Verify npm version
npm -v
```

</details>

### [postgreSQL](https://www.postgresql.org/)

<details>
    <summary>install postgres</summary>

```bash
sudo apt install postgresql postgresql-contrib
```
</details>

## How to run

### Clone this repository

```bash
$ git clone git@github.com:AntonioGMN/-TestHubLocal-back-.git
```

### Access the directory where you cloned it

```bash
$ cd -TestHubLocal-back-
```

### Install back-end dependencies

```bash
npm i
```

### Create an environment variables file in the project root (.env) and configure it as shown in .env.example file:

```bash
NODE_ENV=prod
DB_USER=postgres
DB_PASS=123456
DB_HOST=localhost
DB_PORT=5432
DB_NAME=hubLocal
DATABASE_URL= DB_USER://postgres:DB_PASS@DB_HOST:DB_PORT/DB_NAME
PORT=4000
JWT_SECRET=123456
```

### Run the back-end with

```bash
npm run dev
```

### Run the back-end with

```bash
npm run dev
```






```
