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
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contacts',
});
```

OPTIONAL : Create a mysql database & import `contacts.sql`

