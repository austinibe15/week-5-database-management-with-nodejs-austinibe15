const request = require('supertest');  
const app = require('./server'); // Assuming server.js exports 'app'  

describe('POST /register', () => {  
    it('should register a user', (done) => {  
        request(app)  
            .post('/register')  
            .send({ username: 'testUser', password: 'testPass' })  
            .expect(200)  
            .expect('User registered!', done);  
    });  
});