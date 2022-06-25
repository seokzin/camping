# Space

- Youtube Data API를 활용한 유튜브 음악 플레이어

<br />

## 🔧 Install

```sh
yarn (= yarn install)
yarn start
```

<br />

## 📚 Stack

- React
- Redux Toolkit
- Typescript
- Styled-components

<br />

## 📂 Structure

```
./
├── public                            // index.html 및 빌드와 관련 없는 정적 파일
│
└── src
    ├── app
    │   ├── App.tsx                   // App 컴포넌트 (Store, Router, Styles 연동)
    │   ├── App.styled.tsx            // App 컴포넌트 스타일 코드
    │   ├── rootReducer               // Slices를 통합한 rootReducer
    │   └── store                     // store 및 관련 hooks
    │
    ├── assets
    │   ├── icons
    │   └── ...
    │
    ├── components                    //
    │   ├── Button                    // 폴더 단위로 컴포넌트 관리
    │   │   ├── Button.tsx            // 컴포넌트 메인 코드
    │   │   ├── Button.styled.ts      // 컴포넌트 스타일 코드
    │   │   ├── Button.stories.ts     // 컴포넌트 스토리북 코드 (optional)
    │   │   └── index.ts              // 개별 인덱싱 파일
    │   │
    │   ├── ...
    │   │
    │   └── index.ts                  // 통합 인덱싱 파일
    │
    ├── features                      // Redux Slice 관련 파일
    │   ├── todo                      // 의미 단위의 Slice를 폴더 단위로 관리
    │   │   ├── TodoSlice.ts
    │   │   └── index.ts              // 개별 인덱싱 파일
    │   │
    │   ├── store.types               // Store 공용 타입 관리
    │   │
    │   └── ...
    │
    ├── hooks                         // Custom Hooks
    │   ├── useHookName.ts
    │   ├── ...
    │   │
    │   └── index.ts                  // 통합 인덱싱 파일
    │
    │
    ├── pages                         // 폴더 단위로 페이지 관리
    │   ├── Home
    │   │   ├── Home.tsx              // 페이지 메인 코드
    │   │   └── Home.styled.ts        // 페이지 스타일 코드
    │   │
    │   ├── ...
    │   │
    │   └── index.ts                  // 통합 인덱싱 파일
    │
    ├── services
    │   ├── API..
    │   └── API..
    │
    ├── styles                        // 스타일 관련 파일
    │   ├── Normalize                 // Normalize CSS
    │   ├── Global                    // 글로벌 테마
    │   ├── theme                     // 스타일 관련 변수
    │   ├── ...
    │   │
    │   └── index.ts                  // 통합 인덱싱 파일
    │
    ├── utils                         // 유틸함수 관련 파일
    │   ├── funcName.ts
    │   ├── ...
    │   │
    │   └── index.ts                  // 통합 인덱싱 파일
    │
    └── index.tsx                     // 최종 렌더링 컴포넌트
```

<br />

## 📸 Screenshots

### 페이지 구성

![image](https://user-images.githubusercontent.com/43740455/168425339-4b79d9af-4e08-48f4-83c6-cf1bd9ea035d.png)

### 다크모드

![image](https://user-images.githubusercontent.com/43740455/168425345-dc2ec9ee-96bc-4f54-b2bb-cc9ac4912ed0.png)

## 현재 개발중입니다!

