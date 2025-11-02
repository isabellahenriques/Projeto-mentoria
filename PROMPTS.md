Objetivo
Criar uma API Rest para criar uma lista de compras de supermado para ajudar os Maridos que não sabem realizar compras

Contexto
- A API possui as seguintes funcionalidades: CRUD
- Para que eu possa usar as funcionalidades preciso realizar o login como usuário
- O usuário ao logar pode realizar o CRUD
- O C é o Criar, para Criar posso colocar o nome do produto, uma foto, quantidade, observação e definir a categoria
- A foto pode selecionar uma imagem dos arquivos do celular, ou tirar uma foto com a camera do celular
- O R é o de Vê, para vê é retornar todos os produtos cadastrados dividido por categoria
- O U é de atualizar, para atualizar posso mudar todos os dados 
- O D é para Deletar, posso deletar o produto por completo
- As categorias são Sacolão, Proteina, Padaria, Frios, Higiene, Limpeza, Bebidas, Alimentos Diversos, Produtos Diversos 
- A API precisa gerar a lista de compras
- Após a lista criada posso vê, e colocar um check no produto quando comprar
- Posso deletar a lista de compras geradas
- Não posso editar os produtos da lista de compras

Regras
- Não me pergunte nada, só faça.
- A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API.
- Adicione um endpoint para renderizar o Swagger.
- Construa um arquivo README para descrever o projeto
- Divida a API em camadas: routes, controllers, service e model
- Armazene os dados da API em um banco de dados em memória
- Utilize a biblioteca express para construir a API Rest
- Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.