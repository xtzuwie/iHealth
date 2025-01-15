const express = require('express');
const paypal = require('../config/paypal');

const router = express.Router();

router.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        payer_id: payerId,
        transactions: [{
            amount: {
                currency: 'USD',
                total: '10.00',
            },
        }],
    };

    paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
        if (error) {
            console.error(error.response);
            res.status(500).send('Payment execution failed');
        } else {
            res.send('Payment successful');
        }
    });
});

router.get('/cancel', (req, res) => {
    res.send('Payment canceled');
});

module.exports = router;
