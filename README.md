# API Lista de Compras de Supermercado

Esta API foi criada para ajudar na organização de listas de compras de supermercado, especialmente para quem precisa de praticidade e controle. A autenticação é feita via JWT e todas as operações de CRUD exigem login.

## Funcionalidades
- Autenticação de usuário (login e registro)
- CRUD de produtos (nome, foto, quantidade, observação, categoria)
- Upload de foto do produto (arquivo ou câmera do celular)
- Listagem de produtos agrupados por categoria
- Geração de lista de compras
- Marcação de produtos como comprados
- Exclusão de listas de compras
- Documentação Swagger disponível em `/api-docs`

## Categorias
- Sacolão
- Proteina
- Padaria
- Frios
- Higiene
- Limpeza
- Bebidas
- Alimentos Diversos
- Produtos Diversos

## Como usar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   node index.js
   ```
3. Acesse a documentação Swagger em [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Estrutura do Projeto
- `routes/` - Rotas da API
- `controllers/` - Lógica dos endpoints
- `service/` - Serviços e middlewares (ex: autenticação)
- `model/` - Modelos e armazenamento em memória
- `resources/` - Documentação Swagger

## Autenticação
- Registre um usuário em `/user/register`
- Faça login em `/user/login` para obter o token JWT
- Envie o token no header `Authorization: Bearer <token>` para acessar os endpoints protegidos

## Observações
- O banco de dados é em memória, todos os dados são perdidos ao reiniciar o servidor
- Não é possível editar produtos dentro de uma lista de compras gerada
- Para upload de fotos, envie o campo `photo` como arquivo no formato multipart/form-data

## Status Codes
Consulte a documentação Swagger para detalhes dos códigos de resposta e erros de cada endpoint.

---

API desenvolvida para mentoria e aprendizado.