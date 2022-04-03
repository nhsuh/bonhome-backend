import express from 'express'
import bodyParser from 'body-parser'
import Stripe from 'stripe';

import providerRoutes from './routes/providers.js';
import parentRoutes from './routes/parents.js';

const app = express();
const PORT = 5000;

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([[
    
]])

app.use(bodyParser.json());

app.use('/providers', providerRoutes)
app.use('/parents', parentRoutes)

app.get('/', (req, res) => {
    console.log('TEST');

    res.send("Hello from Homepage");
} );

app.listen(PORT, () => console.log(`Server running on port: http://localhost${PORT}`));