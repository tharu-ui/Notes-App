const request = require('supertest');
const assert = require('node:assert/strict');
const { test } = require('node:test');
const app = require('../app');

test('Add a note', async () => {
    const response = await request(app)
        .post('/notes')
        .send({ note: 'Study Jenkins' });

    assert.equal(response.status, 200);
    assert.equal(response.text, 'Note added');
});

test('List notes', async () => {
    const response = await request(app).get('/notes');

    assert.equal(response.status, 200);
    assert.ok(Array.isArray(response.body));
    assert.ok(response.body.includes('Study Jenkins'));
});

test('Reject an empty note', async () => {
    const response = await request(app)
        .post('/notes')
        .send({ note: '' });

    assert.equal(response.status, 400);
});
