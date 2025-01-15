const express = require('express');
const router = express.Router();

const services = [
    { name: 'General Medicine', price: 100 },
    { name: 'Pediatrician', price: 150 }
];

router.get('/', (req, res) => {
    res.json(services);
});

module.exports = router;