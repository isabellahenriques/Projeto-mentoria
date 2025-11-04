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
describe('Registrar', () => {
    describe('POST /user/register', () => {
        before(async function () {
            // Cria o usuário "Isabella" antes dos testes
            await request(process.env.BASE_URL_REST)
                .post('/user/register')
                .send({
                    "username": "Isabella",
                    "password": "senha123"
                });
        });
        it('Deve retornar status code 201 ao criar usuário com sucesso', async function () {
            // Gerar dados únicos para cada execução
            const usuarioAleatorio = gerarUsuarioAleatorio();

            const resposta = await request(process.env.BASE_URL_REST)
                .post('/user/register')
                .send(usuarioAleatorio);

            console.log(resposta.status);

            expect(resposta.status).to.equal(201);
        })

        it('Deve retornar a mensagem Usuário registrado ao criar usuário com sucesso', async function () {
            // Gerar dados únicos para cada execução
            const usuarioAleatorio = gerarUsuarioAleatorio();

            const resposta = await request(process.env.BASE_URL_REST)
                .post('/user/register')
                .send(usuarioAleatorio);

            console.log(resposta.body);

            expect(resposta.body.message).to.equal('Usuário registrado');
        })

        it('Deve retornar a mensagem de erro Usuário já existe ao criar usuário já cadastrado no sistema', async function () {
            const resposta = await request(process.env.BASE_URL_REST)
                .post('/user/register')
                .send({
                    "username": "Isabella",
                    "password": "senha123"
                });
            console.log(resposta.body);
            expect(resposta.body.message).to.equal('Usuário já existe');
        })

        it('Deve retornar status code 409 ao criar usuário já cadastrado no sistema', async function () {
            const resposta = await request(process.env.BASE_URL_REST)
                .post('/user/register')
                .send({
                    "username": "Isabella",
                    "password": "senha123"
                });
            console.log(resposta.status);

            expect(resposta.status).to.equal(409);
        })

    });
});