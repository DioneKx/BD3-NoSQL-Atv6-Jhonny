//ARQUIVO PARA INSERÇÃO DE MULTIPLOS DADOS NA COLLECTION bd3-nosql-atv6

const database = 'BD3-NoSQL-AtlasMongoDB'

const collection = 'bd3-nosql-atv6'

use(database)

const data = [
    {
        "cod_aluno": "61234",
        "nome": "José Ribeirao",
        "email": "ribeiraodoze@gmail.com",
        "data_nascimento": "2006-08-09",
        "cpf": "57845888816",
        "rg": "01236948m",
        "telefone_aluno": "11955585548",
        "telefone_responsavel": "11954448288",
    },
    {
        "cod_aluno": "12311",
        "nome": "Carlinhos Berranteiro",
        "email": "berrante@gmail.com",
        "data_nascimento": "0800-13-00",
        "cpf": "95878406548",
        "rg": "123658974",
        "telefone_aluno": "11948720652",
        "telefone_responsavel": "11987634588",
    },
    {
        "cod_aluno": "21345",
        "nome": "Maria Carlos José",
        "email": "zemariacarlinhos@gmail.com",
        "data_nascimento": "1999-01-01",
        "cpf": "78548926518",
        "rg": "11122265j",
        "telefone_aluno": "11948200052",
        "telefone_responsavel": "11985642505",
    },
    {
        "cod_aluno": "32335",
        "nome": "Ribeirão da Silva Mendez",
        "email": "mendeonza@gmail.com",
        "data_nascimento": "1929-02-04",
        "cpf": "78548926555",
        "rg": "11133365j",
        "telefone_aluno": "11948200000",
        "telefone_responsavel": "11985552505",
    },
    {
        "cod_aluno": "33333",
        "nome": "Jhonny Test",
        "email": "testando@gmail.com",
        "data_nascimento": "2006-08-09",
        "cpf": "78548946568",
        "rg": "14562265j",
        "telefone_aluno": "11948233052",
        "telefone_responsavel": "11984442505",
    },
    {
        "cod_aluno": "12344",
        "nome": "Silveira da Silva Salvado",
        "email": "silverinhadokitnet@gmail.com",
        "data_nascimento": "2000-04-02",
        "cpf": "78546686518",
        "rg": "11522165j",
        "telefone_aluno": "11948246052",
        "telefone_responsavel": "11988882505",
    },
    {
        "cod_aluno": "15425",
        "nome": "Mario Brow",
        "email": "himario@gmail.com",
        "data_nascimento": "1999-01-01",
        "cpf": "78548966518",
        "rg": "11892265j",
        "telefone_aluno": "11948222011",
        "telefone_responsavel": "11985612505",
    },
    {
        "cod_aluno": "12123",
        "nome": "Josivaldo Perreira",
        "email": "perreira@gmail.com",
        "data_nascimento": "1999-01-02",
        "cpf": "51148926698",
        "rg": "11552445g",
        "telefone_aluno": "11948220066",
        "telefone_responsavel": "11966699505",
    },
    {
        "cod_aluno": "12312",
        "nome": "Castor Castorado",
        "email": "castorzin@gmail.com",
        "data_nascimento": "2001-08-08",
        "cpf": "78548926688",
        "rg": "111442622",
        "telefone_aluno": "11944440033",
        "telefone_responsavel": "11925644566",
    },
]

db[collection].insertMany(data)