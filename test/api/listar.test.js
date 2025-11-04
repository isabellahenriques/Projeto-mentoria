const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();

// Função para gerar dados aleatórios
function gerarUsuarioAleatorio() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);

    return {
        username: `user_${timestamp}_${random}`,
        password: `senha_${random}`
    };
}

describe('Listar', () => {
    describe('GET /user/list', () => {
        before(async function () {
            // Cria o usuários antes dos testes
            await request(process.env.BASE_URL_REST)
                .post('/user/register')
                .send({
                    ...gerarUsuarioAleatorio()
                });
        });

        it('Deve retornar status code 200 ao listar os usuários', async function () {
            const resposta = await request(process.env.BASE_URL_REST)
                .get('/user/list').send();
            console.log(resposta.status);
            expect(resposta.status).to.equal(200);
        })

        it('Deve retornar uma lista de usuários', async function () {
            const resposta = await request(process.env.BASE_URL_REST)
                .get('/user/list').send();
            console.log(resposta.body);
            expect(resposta.body).to.be.an('array');
        })

    });
});