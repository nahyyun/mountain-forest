# 등산의 숲

등산은 나이를 가리지 않고 누구나 참여할 수 있습니다. 등산의 숲을 통해 등산에 대한 정보를 얻고 다양한 챌린지에 참여해 등산을 하고 난 후의 경험을 기록하고 공유해보세요.

<br>

# 서비스 구성 안내

## 1. 서비스 소개

3KM, 5KM 정도를 러닝 한 후에 러닝 앱을 보면서 얼마나 뛰었는지 확인할 때, 사용자가 얼마 만큼의 목표를 이루었는지 알람을 받으면 뿌듯함이 증폭된다고 생각합니다. 이와 마찬가지로 등산의 숲을 통해서 등산에 대한 정보를 얻을뿐만 아니라 개인이나 단체간의 챌린지 달성을 통해 성취감을 얻고 이를 유저끼리 공유할 수 있는 서비스를 제공하고자 합니다.

<br>


## 2. 서비스 주요 기능 설명


- 주요 기능
  - 로그인 회원가입
  - 주변 위치의 산, 게시글 정보 제공
  - 챌린지 모집
  - 개인, 챌린지 피드(SNS)
  - 누적 점수에 따라 랭킹 매기기

<br>

- 프로젝트만의 차별점, 기대 효과
  - 지도를 이용하여 산에 대한 정보, 산 근처에서 업로드된 피드를 확인할 수 있습니다.
  - 목표 달성과 성취감이 있는 등산을 유도하기 위해 챌린지라는 기능을 추가하였습니다. 챌린지를 통해 팀원들을 모집하고 챌린지 성공에 대한 인증 완료시 뱃지라는 보상을 제공합니다.
  -  기대 효과 : 챌린지들에 도전하여 목표를 달성함으로써 성취감을 얻을 수 있습니다. 등산에 대한 정보와 커뮤니티를 찾을 때 본 서비스를 찾을 것으로 기대합니다.

<br>

## 3. 서비스 구성도

- 기술 스택
  - frontend
    -  React, Recoil, styled-components, MSW
  - backend
    - typescript, NestJS, mongodb
- [Figma](https://www.figma.com/file/xvpUMdiw41gSFBUryu36Ac/%EC%82%B0-%ED%8C%80?node-id=0%3A1&t=4uNifl41CdkULnOg-0)
- Swagger를 통해 API 관리

<br>

## 4. 프로젝트 팀원 역할 분담

| 이름   | 담당 업무        |
| ------ | ---------------- |
| 조건형 | 팀장/백엔드 개발 |
| 차지환 | 프론트엔드 개발  |
| 고나현 | 프론트엔드 개발  |
| 전세현 | 프론트엔드 개발  |
| 이상조 | 프론트엔드 개발  |

**멤버별 responsibility**

1. 조건형 : 팀장/백엔드 담당

- 기획 단계: 프로젝트 설계와 기능 명세사항 작성
- 개발 단계: 백엔드 개발, API 제작
- 수정 단계:

2. 차지환: 프론트엔드 담당

- 기획 단계: 프로젝트 설계와 기능 명세사항 작성, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 피드 페이지,유저 프로필 페이지 제작 및 관련 기능 개발
- 수정 단계:

3. 고나현: 프론트엔드 담당

- 기획 단계: 프로젝트 설계와 기능 명세사항 작성, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 맵 페이지, 랭킹 페이지, 메인 페이지 제작 및 관련 기능 개발
- 수정 단계:

4. 전세현: 프론트엔드 담당

- 기획 단계: 프로젝트 설계와 기능 명세사항 작성, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 로그인,회원가입 페이지, 챌린지 페이지 제작 및 관련 기능 개발
- 수정 단계:

2. 이상조: 프론트엔드 담당

- 기획 단계:
- 개발 단계: 와이어프레임을 기반으로 어드민 페이지 제작 및 완성
- 수정 단계:

<br>

## 5. 실행 방법

- 백엔드 :
  ```bash
  server directory
  1. npm run start:dev (혹은 npm start)
  ```
- 프론트엔드 :
  ```
  client directory
  1. yarn vite
  ```

<br>

## 6. 버전

- 프로젝트의 버전 : 1.0.0

<br>

## 7. FAQ

- 라이브러리 어떤 것 쓰셨나요?
  - 카카오맵 라이브러리, react-query, recoil
