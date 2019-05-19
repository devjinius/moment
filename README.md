# Moment

live in the moment

미래에 할 일을 Todo App에 맡기고 현재에 집중하세요.

## Feature

- Manage Todo list
- Add deadline at Todo
- Add priority
- Ordering Todo list

## Getting Started

1. node 설치

> sudo apt-get update

> sudo apt-get install curl

> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

> source ~/.bashrc

> nvm install 8.16.0

> nvm use 8.16.0

> node -v

2. mysql 설치

> sudo apt-get install mysql-server-5.7

> timedatectl set-timezone Asia/Seoul (타임존 변경)

3. yarn 설치

> npm install yarn -g

4. github clone

> git clone https://github.com/eugene94/moment.git

> cd moment

5. sequelize 설치 후 db 세팅

> export NODE_ENV=production (배포환경 설정, 관련 변수들 모두 세팅해주어야 함)

> npm install sequelize-cli -g

> yarn

> sequelize db:create

> sequelize db:migrate

> sequelize db:seed

6. 서버 실행

> cd ..

> yarn start

## Branch 설명

원래대로라면 dev branch를 따로 두어 master에는 react build 파일만 놔두는 것이 맞습니다.

그렇지만 과제임을 감안해 커밋 기록을 한눈에 볼 수 있도록 따로 브랜치를 나누지 않았습니다.
