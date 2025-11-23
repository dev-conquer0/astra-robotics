import { Hono } from "hono";
import { Env } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
    // Existing test route
    app.get('/api/test', (c) => c.json({ success: true, data: { name: 'this works' }}));
    // Mock endpoint for booking a demo
    app.post('/api/book-demo', async (c) => {
        const body = await c.req.json().catch(() => ({}));
        console.log('Demo booking request:', body);
        // Basic validation
        if (!body.email || !body.name || !body.preferredTime) {
            return c.json({ success: false, error: 'Missing required fields' }, 400);
        }
        return c.json({ success: true, data: { message: 'Demo booked successfully!', bookingId: `ASTRA-${Date.now()}` } });
    });
    // Mock endpoint for initiating a payment
    app.post('/api/initiate-payment', async (c) => {
        const body = await c.req.json().catch(() => ({}));
        console.log('Payment initiation request:', body);
        if (!body.plan) {
            return c.json({ success: false, error: 'Plan is required' }, 400);
        }
        return c.json({ success: true, data: { message: 'Payment initiated.', paymentToken: `mock_token_${Math.random().toString(36).substring(2)}`, estimatedDelivery: '4-6 weeks' } });
    });
    // Mock endpoint for newsletter/contact form
    app.post('/api/contact', async (c) => {
        const body = await c.req.json().catch(() => ({}));
        console.log('Contact form submission:', body);
        if (!body.email) {
            return c.json({ success: false, error: 'Email is required' }, 400);
        }
        return c.json({ success: true, data: { message: 'Thank you for subscribing!' } });
    });
}