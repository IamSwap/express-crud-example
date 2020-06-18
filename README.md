# CRUD with Express.js

A simple crud example built with [Express.js](https://expressjs.com)

## Usage

Clone the repository

```bash
git clone git@github.com:IamSwap/express-crud-example.git
```

Install node modules

```bash
cd express-crud-example && npm install
```

Set your database connection in `connection.js`

```js
const con = () => {
  return mongoose.connect('mongodb://localhost:27017/contacts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
```
