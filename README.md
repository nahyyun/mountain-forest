# 등산의 숲

등산은 나이를 가리지 않고 누구나 참여할 수 있습니다. 등산의 숲을 통해 등산에 대한 정보를 얻고 다양한 챌린지에 참여해 등산을 하고 난 후의 경험을 기록하고 공유해보세요.

<br>

# 서비스 구성 안내

## 1. 서비스 소개

3KM, 5KM 정도를 러닝 한 후에 러닝 앱을 보면서 얼마나 뛰었는지 확인할 때, 사용자가 얼마 만큼의 목표를 이루었는지 알람을 받으면 뿌듯함이 증폭된다고 생각합니다. 이와 마찬가지로 등산의 숲을 통해서 등산에 대한 정보를 얻을뿐만 아니라 개인이나 단체간의 챌린지 달성을 통해 성취감을 얻고 이를 유저끼리 공유할 수 있는 서비스를 제공하고자 합니다.

<br>


## 2. 서비스 주요 기능 설명

  - 로그인 회원가입
    
  - 주변 위치의 산, 게시글 정보 제공
    > ![ezgif com-resize](https://github.com/sohwakhaeng-fe/lotto/assets/86196026/cf7df4b8-ce1b-4852-91c2-4adc50b5eb80)
    
  - 챌린지 모집
    > ![challenge_resize](https://github.com/nahyyun/mountain-forest/assets/86196026/83b0c78b-d52a-48a2-abf9-29e32c5eebf1)

  - 개인, 챌린지 피드(SNS)
    > ![feed_resize](https://github.com/nahyyun/mountain-forest/assets/86196026/1bc8499b-7074-4cce-84a8-cfa6c14794ce)
    
  - 누적 점수에 따라 랭킹 매기기

<br>

### 프로젝트만의 차별점, 기대 효과
  - 지도를 이용하여 산에 대한 정보, 산 근처에서 업로드된 피드를 확인할 수 있습니다.
  - 목표 달성과 성취감이 있는 등산을 유도하기 위해 챌린지라는 기능을 추가하였습니다. <br/>
    - 챌린지를 통해 팀원들을 모집하고 챌린지 성공에 대한 인증 완료시 뱃지라는 보상을 제공합니다.
  - 챌린지들에 도전하여 목표를 달성함으로써 성취감을 얻을 수 있습니다. 산에 대한 정보와 커뮤니티를 찾을 때 본 서비스를 찾을 것으로 기대합니다.

<br>

## 3. 기술 스택

- frontend
  -  React, Recoil, styled-components, MSW
- backend
  - typescript, NestJS, mongodb
- [Figma](https://www.figma.com/file/xvpUMdiw41gSFBUryu36Ac/%EC%82%B0-%ED%8C%80?node-id=0%3A1&t=4uNifl41CdkULnOg-0)
- Swagger를 통해 API 관리

<br>

## 4. 프로젝트 팀원

| 이름   | 담당 업무        |
| ------ | ---------------- |
| 조건형 | 팀장/백엔드 개발 |
| 차지환 | 프론트엔드 개발  |
| 고나현 | 프론트엔드 개발  |
| 전세현 | 프론트엔드 개발  |
| 이상조 | 프론트엔드 개발  |


## 5. 실행 방법

- 백엔드 
  ```bash
  cd server
  1. npm run start:dev (혹은 npm start)
  ```
- 프론트엔드
  ```
  cd client
  yarn install
  yarn vite
  ```

