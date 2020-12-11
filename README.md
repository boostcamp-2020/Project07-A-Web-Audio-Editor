# 🔊 AUDI(AUdio eDItor)
> ✨클라이언트 기반 웹 음성 편집기✨

<div style="width:100%; display:flex; flex-direction: column; justify-content:center; align-items: center;">
  <img src="https://ifh.cc/g/PIGVGZ.png" width=900/>
   <p align-"center">
    <img src="https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript"/>
    <img src="https://img.shields.io/badge/typescript-v4.0.2-blue?logo=typescript&logoColor=007ACC" />
    <img src="https://img.shields.io/badge/node.js-v15.2.1-green?logo=node.js"/>
   </p>
</div>

## 👩‍💻Members👨‍💻

|           류남광(J064)<br/>[@pieisland](https://github.com/pieisland)          | 송원석(J098)<br/>[@Songwonseok](https://github.com/Songwonseok) | 신우진(J104)<br/> [@wooojini](https://github.com/wooojini) | 최정은(J206)<br/> [@Jeongeun-Choi](https://github.com/Jeongeun-Choi)          |
| :----------------------------------------------------------: | :---------------------------------------------: | :-------------------------------------------------: | ----------------------------------------------------------- | 
| <img src="https://avatars2.githubusercontent.com/u/35261724?s=460&u=514bbf937b4638c75c39ea1c89b13f42241001da&v=4" width=200> | <img src="https://avatars3.githubusercontent.com/u/7006837?s=460&u=5b6e7c433169c0c7b4ca093bfd1dbae6dc998c0b&v=4" width=200>           | <img src="https://user-images.githubusercontent.com/32856129/99922657-0bf59700-2d75-11eb-94c0-50df40daffa0.jpg" width=200>          |<img src="https://avatars0.githubusercontent.com/u/55783203?s=460&u=20b5c88d7b77a6c81c1272e066ec34943daf0c92&v=4" width=200>  |

## [🎨UI Prototype](https://ovenapp.io/view/q5bGJWiAvVedUkqksVhGGjf8NpimvrDb/)

## [🎼Project URL](http://www.audi-editor.ml/)

## [🥝WIKI](https://github.com/boostcamp-2020/Project14-A-Web-Audio-Editor/wiki)

## 💻실행방법

- Frontend
  - 패키지 설치 : npm i
  - 개발모드 웹팩 개발 서버 실행 : npm run dev
  - 프로덕션모드 빌드 실행 : npm run build
    - 프로젝트 빌드 스크립트에 따라 frontend/env 폴더에 환경변수 파일이 필요합니다. 
    - 개발모드 : .env.development
    - 프로덕션모드 : .env.production
    ```
    API_SERVER_URL=http://localhost:5000  //필요한 환경변수를 정의해줍니다
    ...

    ```

- Backend
  - 패키지 설치 : npm i
  - 개발모드 nodemon 서버 실행 : npm run start:dev
  - 프로덕션모드 빌드 실행 : npm run build (현재 바벨 트랜스파일링을 진행중인데 제거할 예정입니다)
    - 프로젝트 빌드 스크립트에 따라 backend/ 폴더에 환경변수 파일이 필요합니다. 
    - 모드선택 : .env
    ```
      NODE_ENV=development or production
    ```
    - 개발모드 : .env.development
    - 프로덕션모드 : .env.production
      - sqlite 환경변수 
    ```
      DATABASE_TYPE=sqlite
      DATABASE_DROP_SCHEMA=true
      DATABASE_SYNCHRONIZE=true
      DATABASE_LOGGING=all
    ```
