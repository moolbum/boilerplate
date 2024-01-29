# 👨‍💻 Boilerplate

CRA(Create React App)으로 파생되어 React 애플리케이션을 시작하기 위한 기본 구조와 설정이 미리 구성된 템플릿입니다. <br>
eslint, prettier, font, 컴포넌트, 색상, 폴더구조, 패키지 템플릿

## Getting started

```sh
yarn install
```

#### local start

```sh
yarn start
```

#### storybook start

```sh
yarn storybook
```

## Package

```sh
Fetching: tanstack/react-query, axios
Ui: styled-componet, framer-motion, storybook
Icon: radix-icon, lucide-react
Router: react-router-dom
Date: dayJS
Code: eslint, prettier, typeScript
Build: yarn, env-cmd, craco
StateManagement: zustand, react-hook-form
```

## Component

**atoms**
가장 작은 단위의 컴포넌트

- Accordion 🛠️
- Badge
- Button
- Card
- Callout
- Checkbox
- Dialog
- Flex
- Grid
- Icon: radix-icon, lucide-react, local(HTMLImageElement)
- Input
- Radio
- Switch
- Tabs 🛠️
- Typo
- TextArea
- Toast 🛠️

**molecules**
`atoms`의 컴포넌트를 하나 이상 사용한 컴포넌트

- AlertDialog
- CheckboxGroup
- DropDown 🛠️
- Form 🛠️
- RadioGroup
- Select: Single, Multiple, Search 🛠️

**organisms**
프로젝트의 도메인이 포함된 컴포넌트

- MainHeader 🛠️
- ProtectedPublicRoute
- SideNav 🛠️

**templates**
`organisms`의 컴포넌트를 하나 이상 사용한 컴포넌트

- MainPageLayout 🛠️
- SubPageLayout 🛠️

## Font

- Pretendard
  - [Pretendard 공식 블로그](https://cactus.tistory.com/306)

## Color

Radix UI의 color 디자인 시스템을 참고해서만든 컬러시스템

- Steps 0~1: Backgrounds
- Steps 2~4: Component backgrounds
- Steps 5~7: Borders
- Steps 8~9: Solid backgrounds
- Steps 10~11: Text

- [Radix Color Scales](https://www.radix-ui.com/colors/docs/palette-composition/scales)
- [Radix Color Understanding the scale](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale#steps-35-component-backgrounds)

## Folder Tree

```sh
.github
public
src
  |-- assets
  |     |-- fonts
  |     |-- icons
  |-- components
  |     |-- atoms
  |     |-- molecules
  |     |__ organisms
  |-- pages
  |-- routes
  |-- stories
  |-- styles
  |-- App.tsx
  |__ index.tsx
.env.development
.env.local
.env.production
.eslintrc
.gitignore
.prettierrc.js
.package.json
craco.config.js
svg.d.ts
tsconfig.json
tsconfig.paths.json
yarn.lock
README.md
```
