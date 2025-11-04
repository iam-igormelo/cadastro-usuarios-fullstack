# DEPENDENCIAS
- npm init -y
    * Inicializa um projeto Node
    * A flag -y é para aceitar automaticamente todas as perguntas interativas sobre nome, versão, descrição etc do projeto
- npm install typescript -D
    * Instala o Typescript
    * A flag -D é para instalar uma versão do typescript localmente no projeto apenas para desenvolvimento, garantindo que o projeto rode sempre na mesma versão do typescript
- npx tsc --init
    * Inicia configuração do Typescript. 
    * Usar o npx garante que seja usado a versão do Typescript local do projeto evitando inconsistências de versão
- npm install fastify @fastify/cors
    * Instala o Fastify
    * Instala o plugin oficial do Fastify para habilitar CORS, permitindo que o frontend em outro domínio/porta acesse a API
- npm install tsx -D
    * Permite executar arquivos Typescript diretamente do Node, sem precisar compilar manualmente
- npm install @types/node -D
    * Permite que o Typescript entenda as APIs nativas do Node e forneça autocomplete e verificação de tipos
- npm install prisma -D
    * Instala o Prisma CLI para desenvolvimento responsável por gerar migrações e gerenciar o schema
- npm install @prisma/client
    * Instala o cliente para produção (biblioteca responsável pelas queries)
- npx prisma init
    * Inicializa o prisma no projeto, criando os arquivos necessários para uso da ORM
- npm install dotenv -D
    * Instala a biblioteca que carrega variáveis de ambiente do arquivo .env para o process.env do Node
    * Ir no arquivo prisma.config.ts e importar o dotenv -> import "dotenv/config"
- npx prisma generate
    * Mapeia os modelos do banco de dados (gera o cliente prisma)

# COMANDOS

- Para rodar o server através do comando "npm run dev" vai em package.json e configura o "scripts" com o seguinte comando:
    "scripts": {
        "dev": "tsx watch src/server.ts
    }
