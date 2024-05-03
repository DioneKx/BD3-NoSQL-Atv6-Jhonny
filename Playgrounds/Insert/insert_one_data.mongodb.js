//ARQUIVO PARA INSERÇÃO DE 1 (ÚNICO) DADO NA COLLECTION bd3-nosql-atv6

const database = 'BD3-NoSQL-AtlasMongoDB'

const collection = 'bd3-nosql-atv6'

use(database)

db[collection].insertOne(
    {
        "cod_aluno": "12345",
        "nome": "José Raimundo",
        "email": "zeraimundo@gmail.com",
        "data_nascimento": "2006-08-09",
        "cpf": "57845869816",
        "rg": "01236948x",
        "telefone_aluno": "11954782548",
        "telefone_responsavel": "11956478254",
    }
)