# Moment

live in the moment

미래에 할 일을 Todo App에 맡기고 현재에 집중하세요.

## Getting Started

1. node 설치
2. mysql 설치
3. yarn 설치

> npm install yarn -g

4. sequelize로 db 세팅

> cd server

> yarn

> yarn global add sequelize-cli

> sequelize db:create

> sequelize db:migrate

> sequelize db:seed

5. client 빌드

> cd client

> yarn build

6. pm2 설치

> npm install pm2 -g

7. 두개의 서버 실행

> pm2 start myapp.config.js
