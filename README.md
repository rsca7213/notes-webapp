### :page_facing_up: Table of Contents

---

This README consists of the following parts, listed below:

- [Developer](#man_technologist-developer)
- [Tech Stack](#computer-teck-stack)
- [Required Installs](#warning-required-installs)
- [App Install](#-app-install)
- [Running the App](#electric_plug-running-the-app)

### :man_technologist: Developer

---

| Full Name            | User     | GitHub                      |
| -------------------- | -------- | --------------------------- |
| Ricardo Salvatorelli | rsca7213 | https://github.com/rsca7213 |

### :computer: Teck Stack

---

| Logo                                                                                                                                               | Type                | Name                  | Download Link                                                   | Version |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------- | --------------------------------------------------------------- | ------- |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="24">                                                | Language            | TypeScript            | https://www.typescriptlang.org/download                         | 5.3.2   |
| <img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" width="24">                | Framework           | Nest.JS               | https://docs.nestjs.com/#installation                           | 10.0.0  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" width="24">                              | Dependency Manager  | Node Package Manager  | https://www.npmjs.com/get-npm                                   | 10.4.0  |
| <img src="https://nodejs.org/static/images/logo.svg" width="24">                                                                                   | Runtime Environment | Node.JS               | https://nodejs.org/en/download/                                 | 18.17.0 |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/256px-Sqlite-square-icon.svg.png" width="24">           | Database Manager    | SQLite with TypeORM   | npm install sqlite3                                             | 3       |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png" width="24"> | Framework           | Angular               | https://angular.io/guide/setup-local                            | 17.2.0  |
| <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" width="24">                                                    | CSS Library         | Bootstrap             | https://getbootstrap.com/docs/5.2/getting-started/introduction/ | 5.3.2   |
| <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-material-design-icon.png" width="24">                | Icon Library        | Material Design Icons | https://pictogrammers.com/docs/guides/iconify/                  | 7.4.47  |

### :warning: Required Installs

> These installations are mandatory and the application will not work without them, **Follow the order listed here**

---

- Node.JS and Node Package Manager

  > Version 18.17.0 (Node.JS) y 10.4.0 (Node Package Manager)

  The technologies are necessary because they allow the execution of JavaScript files without the need for a browser and allow you to manage the dependencies of projects written in JavaScript.

  **Steps for installation:**

  - Access the Node.JS download website https://nodejs.org/en/download/

  - When you are on the website, you must select the installer for the operating system version you are using.
    **Note:** This installer contains Node.JS and NPM.

  - Once the installer download is complete, run it and proceed to install the technologies. **Note:** It is very important to add the variables to the system PATH if you are on Windows.

- TypeScript

  > Version 5.3.2

  This language is required to interpret and translate files with the extension `".ts"` to files `".js"` that are understandable by the execution environment.

  **Steps for installation:**

  - To install this language, you must open any command prompt and run the following command:

    `npm install -g typescript`

### :wrench: App Install

---

To install the application, you must follow the following steps:

- Clone the repository to your device.

- Then, run the following command inside the folder to get the stack of frameworks and libraries on which the application infrastructure depends:

  `cd backend && npm install`

  `cd frontend && npm install`

### :electric_plug: Running the App

---

To run the application, you simply need to write one of the following two commands in a command prompt located in the application folder:

- Back-End:

  `npm run start:dev`

- Front-End:

  `npm run start`
