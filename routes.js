var Person = require('./models/Person');

module.exports = (app) => {
  // Return home page
  app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/index.html');
  });

  // Get all contacts
  app.get('/api/contacts', async (req, res) => {
    return res.json(await Person.find());
  });

  // Add a contact
  app.post('/api/add-contact', async (req, res) => {
    if (!req.body.name || !req.body.mobile) {
      return res.json({ message: 'Please provide required fields data.' });
    }

    await Person.create({ name: req.body.name, mobile: req.body.mobile });
    return res.json({ message: 'Record created!' });
  });
};
