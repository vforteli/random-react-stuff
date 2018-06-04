﻿import axios from 'axios';

// todo maybe refactor settings if needed...  
const STRIPE_SCRIPT_URL = 'https://checkout.stripe.com/checkout.js';
const STRIPE_PK_URL = 'http://localhost:64730/api/settings/stripe';
const STRIPE_LOGO_URL = '/content/img/flexinets_logo.png';


/**
 * Add stripe script to page
 * */
function loadStripe() {
    if (!window.StripeCheckout) {
        return new Promise(function (resolve, reject) {
            const script = document.createElement('script');
            script.onload = resolve;
            script.onerror = reject;
            script.src = STRIPE_SCRIPT_URL;
            document.head.appendChild(script);
        });
    } else {
        return Promise.resolve('already loaded');
    }
}


/**
 * Create a stripeHandler with specified onToken function
 * @param {Function} onToken
 */
export async function createStripeHandler(onToken) {
    await loadStripe();
    const response = await axios.get(STRIPE_PK_URL);
    return window.StripeCheckout.configure({
        name: 'Flexible Networks Nordic AB',
        key: response.data,
        image: STRIPE_LOGO_URL,
        locale: 'auto',
        allowRememberMe: false,
        token: onToken
    });
}