const express = require('express');
const bodyParser = require('body-parser');
const payRoute = require('./routes/pay');
const successRoute = require('./routes/success');
const servicesRoute = require('./routes/services');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/pay', payRoute);
app.use('/success', successRoute);
app.use('/services', servicesRoute);

app.get('/', (req, res) => {
    res.send('<h1>PayPal Integration</h1>');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
