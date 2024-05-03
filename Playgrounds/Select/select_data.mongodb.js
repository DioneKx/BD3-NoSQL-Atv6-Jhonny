//ARQUIVO PARA REQUISIÇÃO DE DADOS/ARQUIVOS NA COLLECTION bd3-nosql-atv6

const database = 'BD3-NoSQL-AtlasMongoDB'

const collection = 'bd3-nosql-atv6'

use(database)

// ====================================================================================

//LISTAR TODOS OS ALUNOS
db[collection].find()

// ===================================================================================

//LISTAGEM COM CRITÉRIOS E EXCLUSÃO DE DADOS
// db[collection].find(
//     {"cpf": /66/},
//     {"cod_aluno" : 0}
// )