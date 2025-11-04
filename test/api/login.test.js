const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();

describe('Login', () => {
    describe('POST /user/login', () => {
        before(async function () {
            // Cria o usuário "Bella" antes dos testes
            await request(process.env.BASE_URL_REST)
                .post('/user/register')
                .send({
                    "username": "Bella",
                    "password": "123456"
                });
        });

        it('Deve retornar status code 200 ao logar com usuário e senha correto', async function () {
            const resposta = await request(process.env.BASE_URL_REST)
                .post('/user/login')
                .send({
                    "username": "Bella",
                    "password": "123456"
                });

            console.log(resposta.status);
            expect(resposta.status).to.equal(200);

        })
        it('Deve retornar o token ao realizar login com sucesso', async function () {
            const resposta = await request(process.env.BASE_URL_REST)
                .post('/user/login')
                .send({
                    "username": "Bella",
                    "password": "123456"
                });
            console.log(resposta.body);

            expect(resposta.body).to.have.property('token');
        })
        it('Deve retornar status code 401 ao logar com usuário errado', async function () {
            const resposta = await request(process.env.BASE_URL_REST)
                .post('/user/login')
                .send({
                    "username": "Bellas",
                    "password": "senha123"
                });
            console.log(resposta.status);

            expect(resposta.status).to.equal(401);
        })
    });
});