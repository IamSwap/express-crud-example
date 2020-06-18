var con = require('./connection');

module.exports = (app) => {
  // Return home page
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  // Get all contacts
  app.get('/api/contacts', (req, res) => {
    var sql = 'SELECT * FROM contacts';

    con.query(sql, (err, result) => {
      if (err) throw err;

      res.json(result);
    });
  });

  // Add a contact
  app.post('/api/add-contact', (req, res) => {
    if (!req.body.name || !req.body.mobile) {
      res.json({
        message: 'Please provide required fields data.',
      });
      return;
    }

    var sql = `INSERT INTO contacts (name, mobile) VALUES ('${req.body.name}', '${req.body.mobile}') `;

    con.query(sql, (err, result) => {
      if (err) throw err;

      res.json({
        message: 'Contact added successfully!',
      });
    });
  });
};
