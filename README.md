# Passos para executar o frontend do gerador de senhas


## Scripts

Abra o terminal no diretório raiz do projeto.

Digite 
### `yarn `

ou
### `npm i `

para instalar os pactoes.


Se o backend estiver funcionando, é só rodar

### `yarn start `


ao rodar yarn start, acesse a URL que está disponível no terminal
http://localhost:3000/

### ` Como Cliente`

Vai abrir a URL na página do cliente, caso não abrir, acesse http://localhost:3000/
onde será possível ele visualizar a senha atual (que está sendo atendida)

após ele clicar em um dos botões (Preferencial ou Normal), aparecerá a senha gerada 
para usuário no campo Sua Senha

### `Como gerente `

para acessar a área do gerente, pega a url atual, e adicione ao final /gerente
ex: http://localhost:3000/gerente

Ao topo será possível observar qual a senha atual,
e abaixo um painel onde é possível chamar a próxima senha ou zerar a contagem das senhas (isso excluirá todas as senhas que estão em espera)

Se caso não houver mais senhas para serem chamadas, o campo de senha atual ficará em branco