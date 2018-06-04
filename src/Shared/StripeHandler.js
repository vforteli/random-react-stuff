

export function loadStripe(onload) {
    if (!window.StripeCheckout) {
        const script = document.createElement('script');
        script.onload = function () {
            console.info("Stripe script loaded");
            onload();
        };
        script.src = 'https://checkout.stripe.com/checkout.js';
        document.head.appendChild(script);
    } else {
        onload();
    }
}

