Iniciar um novo projeto
## npm init

são 3 dependencias
## npm install --save @types/express typescript
### npm i ts-node-dev --save-dev
### npm i @types/express --save-dev
### npm install typescript --save-dev

Iniciar o typescript (Cria um arquivo tsconfig.json)(coloca strict  - false )
### npx tsc --init 




### npm install prisma --save-dev

(cria um arquivo .env-onde tem algumas variaveis e uma pasta prisma/schema.prisma)
### npx prisma init 

 ### npm install --save-dev @types/axios


### npm install jsonwebtoken
### npm install --save-dev @types/jsonwebtoken

*************************git e Gihub************************

git config --global user.name "eduardovalentim7"
git config --global user.email "eduardovalentim79@gmail.com"

git init
git status

*** passa para o stage
git add .

git commit -m "primeiro Commit"

***ver os commits 
git log

***git diff <arquivo> 
mostra as alteracoes


-----------enviar para o github-----------------

-> cria repositorio no github
-> configurar ssh  - chaves
  cadastrar chave publica:Github
  Chave privada fica no pc

como fazer:
 acessa o github (settings) - Procura ssh
  new ssh key
     noteSony
       (precisa gerar a Chave Publica)
        terminal: ssh-keygen -> digita o nome da chave ex:notesony
        nao coloca a senha
        ls
 	criou dois arquivos: notesony(pc) e notesony.pub(github)
        cat notesony.pub (copia a chave)

--> Configurar chave no pc
     eval `ssh-agent` -> retorna o pid 
     ssh-add notesony(chave que fica no pc)

--> cola a chave do notesony.pub no github









