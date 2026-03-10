import { validar } from "../framework-teste";

interface IUsuario {
    id: number
    nome: string
}

interface ILivro {
    id: number
    titulo: string
}

interface IEmprestar {
    usuario: IUsuario
    livros: ILivro[]
}


//Sistema de emprestimo de Livros
//Requisitos:
//1. Prazo -> O empréstimo padrão é de 7 dias.
//2. Multa -> Se o livro for entregue com atraso, cobra-se uma multa fixa de R$5,00 + R$1,00 por dia de atraso.
//3. Limite -> Cada aluno pode pegar no máximo 3 livros simultaneamente.
//4. Emprestimo -> O usuário deverá estar previamente cadastrado.

const usuarios = [
  { id: 1, nome: 'Kely'},
  { id: 2, nome: 'Jaine'}
];

const emprestar = ({livros, usuario}: IEmprestar) => {
const usuariosFiltrados = usuarios.filter(user => user.id === usuario.id);
 if(!(usuariosFiltrados.length <= 0)) return false
 if (livros.length > 3) return false
return true
}
 emprestar({usuario: {id: 1, nome: 'Kely'}, livros: [{id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel'}]})

validar ({
    descricao: 'emprestar () - Usuário previamente cadastrado e Quantidade de livros menor que o máximo',
    esperado: true,
    atual: emprestar({
        usuario: {id: 1, nome: 'Kely'}, 
        livros: [
            {id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel'},
            {id: 2, titulo: 'O Senhor dos Anéis - As Duas Torres'},
            {id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei'},
                   ]})
                }
            )

validar ({
    descricao: 'emprestar () - Usuário previamente cadastrado e Quantidade de livros maior que o máximo',
    esperado: false,
    atual: emprestar({
        usuario: {id: 1, nome: 'Kely'}, 
        livros: [
            {id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel'},
            {id: 2, titulo: 'O Senhor dos Anéis - As Duas Torres'},
            {id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei'},
                   ]})
                }
            )         
            
validar ({
    descricao: 'emprestar () - Usuário não cadastrado e Quantidade de livros menor que o máximo',
    esperado: false,
    atual: emprestar({
        usuario: {id: 1, nome: 'Kely'}, 
        livros: [
            {id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel'},
            {id: 2, titulo: 'O Senhor dos Anéis - As Duas Torres'},
            {id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei'},
                   ]})
                }
            )              

// validar({
//     esperado: 10,
//     descricao: 'Teste inicial',
//     atual: 10,
// })