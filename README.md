# MotorMatch - E-commerce website
https://motormatch.onrender.com
https://motormatch-api.onrender.com
## About
MotorMatch is a website that is a small example of e-commerce website. </br>
It have front-end and a back-end with mongodb database. <br>
1. **Front-end part** can be accessed using <a href="https://github.com/KoatKoetl/motorMatch" target="blank">link</a> 
2. **Back-end part** can be accessed using <a href="https://github.com/KoatKoetl/motorMatch-server" target="blank">link</a> 
3. **The database** is implemented using MongoDB Atlas free cluster.

## Preview


![image](https://github.com/user-attachments/assets/aa289ec9-844b-458f-b204-09f08c4686ac)
![image](https://github.com/user-attachments/assets/41237c30-2f1d-400c-8e71-8db958937cd3)
![image](https://github.com/user-attachments/assets/e05baa06-88a4-4adb-888b-3d1f6ff787bc)
![image](https://github.com/user-attachments/assets/0494f371-eee5-4c7d-be42-ffc6ba355fcc)
![image](https://github.com/user-attachments/assets/91224837-6231-4266-89be-2b0af062847c)

## Built With

![Static Badge](https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=green)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Static Badge](https://img.shields.io/badge/Vite-darkblue?style=for-the-badge&logo=vite&logoColor=yellow)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Static Badge](https://img.shields.io/badge/Redux-red?style=for-the-badge&logo=redux&logoColor=white)
![Static Badge](https://img.shields.io/badge/Express-gray?style=for-the-badge&logo=express&logoColor=white)
![Static Badge](https://img.shields.io/badge/Zod-black?style=for-the-badge&logo=zod&logoColor=blue)
![Static Badge](https://img.shields.io/badge/Docker-black?style=for-the-badge&logo=docker)


## Design and UI Components

![Static Badge](https://img.shields.io/badge/RadixUI-white?style=for-the-badge&logo=radixui&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

## Tools Used

![Static Badge](https://img.shields.io/badge/Render-white?style=for-the-badge&logo=render&logoColor=black)
![Static Badge](https://img.shields.io/badge/git-white?style=for-the-badge&logo=git&logoColor=orange)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

## How to use

### Front-end part

#### Copy the github repo
```js
git clone "https://github.com/KoatKoetl/motorMatch.git"
```

#### Open the motorMatch directory and install all dependecies
```js
npm install
// OR
bun install
```

After all is installed you're ready to start the app

#### To start in dev mode
```js
npm run dev
// OR
bun run dev
```

The bash should show something like this
```bash
> frontend@0.0.0 dev
> vite

  VITE v5.3.5  ready in 5209 ms

  ➜  Local:   http://localhost:3000/  
  ➜  Network: http://your.ip:3000/
  ➜  press h + enter to show help     
```

#### To start in prod mode
Build it first
```js
npm run build
// OR
bun run build
```
The bash should show something like this
```bash
> frontend@0.0.0 build
> tsc -b && vite build

vite v5.3.5 building for production...
✓ 1731 modules transformed.
dist/index.html                              0.47 kB │ gzip:   0.30 kB
dist/assets/Geist-Regular-w2QFeScy.woff2    39.98 kB
dist/assets/Geist-SemiBold-DkaAkULY.woff2   40.95 kB
dist/assets/Geist-Medium-BO_fXYbm.woff2     40.96 kB
dist/assets/Geist-Bold-DORQXWRF.woff2       41.08 kB
dist/assets/Geist-Regular-CDW1rAlG.woff     49.49 kB
dist/assets/Geist-SemiBold-Xdbe0ilf.woff    50.81 kB
dist/assets/Geist-Medium-COrrQ0FJ.woff      50.89 kB
dist/assets/Geist-Bold-mpQnNB6b.woff        50.98 kB
dist/assets/index-BbNYrtul.css              42.77 kB │ gzip:   8.23 kB
dist/assets/index-DkqjfYMm.js              612.14 kB │ gzip: 193.16 kB

✓ built in 8.74s
```


Start the preview
```js
npm run preview
// OR
bun run preview
```
```bash
frontend@0.0.0 preview
> vite preview

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://your.ip:3000/
  ➜  press h + enter to show help     
```

### Back-end part

#### Copy the github repo
```js
git clone "https://github.com/KoatKoetl/motorMatch-server.git"
```

#### Open the motorMatch-server directory and install all dependecies
```js
npm install
// OR
bun install
```

#### Create a .env file for variables
```env
PORT=your_port_to_start_on
URI=uri_of_your_database
PASSWORD=password_that_allow_to_add_to_database
```

#### To start in dev mode
```js
npm run dev
// OR
bun run dev
```

The bash should show something like this
```bash
> dev
> tsnd --respawn src/server.ts

[INFO] 19:33:18 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.5.3)
db connected successfully
Server running on port http://localhost:3001
```

#### To start in prod mode
Build it first
```js
npm run build
// OR
bun run build
```
The bash should show something like this
```bash
> build
> tsc
```

Start the production build
```js
npm run prod
// OR
bun run prod
```
```bash
> prod
> node dist/server.js

db connected successfully
Server running on port http://localhost:3001
```
