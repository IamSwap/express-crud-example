# CRUD with Express.js

A simple crud example built with [Express.js](https://expressjs.com)

## Requirements
Before starting make sure that you have installed & configured Node.js & MongoDB server on your system.
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

## Usage

Clone the repository

```bash
git clone git@github.com:IamSwap/express-crud-example.git
```

Install node modules

```bash
cd express-crud-example && npm install
```


Create your `.env` file by copying `.env.example` file.

```bash
cp .env.example .env
```

Then set `DATABASE_URL` in `.env`.

```env
DATABASE_URL=mongodb://localhost:27017/contacts
```

Finally run the app! 🎉

```bash
npm run dev
```
