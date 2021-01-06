# FindHotel Front-end Engineer Assignment

Simple single page application.

## How It Works

### Technologies And Libraries

App is powered by [React JS](http://reactjs.org/) and [Redux](https://redux.js.org/).

- [Babel](https://github.com/babel/babel) for transcompiling code and backward compatibility.
- [Webpack](https://github.com/webpack/webpack) for bundling purposes.
- [Jest](https://github.com/facebook/jest) and [RTL (React Testing Library)](https://github.com/testing-library/react-testing-library) for testing.
- [TypeScript](https://www.typescriptlang.org/) for adding types.
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and code format.

TypeScript codes are compiled with Babel. All types are checked in pre-commit stage using [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky).

## Get Started Immediately

**You’ll need to have Node 10.16.0 or later version on your local development machine.** You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

1. Clone project.
2. Run `npm ci` in project root directory to install dependencies.
3. Rename **.env.example** to **.env**
4. Start project in developement mode using `npm run dev`. This command will open browser automatically.

## Commands

- Test will run with `npm run test` and `npm run test:watch`
- Code linting with `npm run lint:code`
- Building project and make it ready for deployment with `npm run build`.

## Structure of App

```
socket-chat-client
├── README.md
├── public
│   └── index.html
└── src
    ├── __tests__
    ├── components
    ├── helpers (Reusable utilities and custom hooks)
    ├── assets (images, SVG icons)
    ├── app.tsx
    ├── index.tsx
    └── globals.d.ts
```
