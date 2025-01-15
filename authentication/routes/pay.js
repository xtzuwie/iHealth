const express = require('express');
const paypal = require('../config/paypal');

const router = express.Router();

router.post('/', (req, res) => {
    const create_payment_json = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal',
        },
        redirect_urls: {
            return_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        },
        transactions: [{
            amount: {
                currency: 'USD',
                total: '10.00',
            },
            description: 'This is the payment description.',
        }],
    };

    paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error creating payment');
        } else {
            const approvalUrl = payment.links.find(link => link.rel === 'approval_url').href;
            res.redirect(approvalUrl);
        }
    });
});

module.exports = router;
