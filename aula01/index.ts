// // Cenário de Utilização
// // Regra de Negócio: O aluno ganha XP por tarefa concluída.
// // Ao atingir 1000XP, ele sobe de nível. Tarefas entregues com atraso
// // rendem apenas 50% do XP. Existe um multiplicador de "Combo" para quem
// // entrega 3 tarefas seguidas no prazo.
// // cada tarefa vale 200xp
// interface IEntregarTarefa {
//     idAluno: number,
//     tarefa: ITarefa
// }

// interface ITarefa {
//     id: number
//     titulo: string
//     prazo: Date
// }

// const tarefasParaEntrega: ITarefa[] = [
//     { id: 1, titulo: 'Configurar ambiente do projeto', prazo: new Date('2026-03-05') },
//     { id: 2, titulo: 'Criar testes unitários de autenticação', prazo: new Date('2026-03-07') },
//     { id: 3, titulo: 'Implementar validação de formulário', prazo: new Date('2026-03-08') },
//     { id: 4, titulo: 'Refatorar módulo de cadastro', prazo: new Date('2026-03-10') },
//     { id: 5, titulo: 'Corrigir bug de cálculo de desconto', prazo: new Date('2026-03-12') },
//     { id: 6, titulo: 'Escrever documentação da API', prazo: new Date('2026-03-14') },
//     { id: 7, titulo: 'Adicionar testes de integração', prazo: new Date('2026-03-16') },
//     { id: 8, titulo: 'Otimizar consulta ao banco de dados', prazo: new Date('2026-03-18') },
//     { id: 9, titulo: 'Implementar tela de relatório', prazo: new Date('2026-03-20') },
//     { id: 10, titulo: 'Revisar e ajustar regras de negócio', prazo: new Date('2026-03-22') }
// ]

// let aluno = {
//     id: 110,
//     nome: 'Kely',
//     xp: 0,
//     nivel: 0,
//     multiplicadorCombo: false
// }

// function entregarTarefa({ idAluno, tarefa }: IEntregarTarefa): boolean {
//     if (!idAluno || !tarefa) {
//         return false
//     }
//     let totalXp = true
//     const dataAtual = new Date();
//     if (tarefa.prazo < dataAtual) {
//         totalXp = false
//     }

//     const xpRecebida = totalXp ? 200 : 100

//     aluno = { ...aluno, xp: aluno.xp + xpRecebida }

//     return true;
// }

// const tarefaSelecionada = tarefasParaEntrega[0]
// const entregaRealizada = entregarTarefa({ idAluno: aluno.id, tarefa: tarefaSelecionada })

// console.log('Entrega realizada:', entregaRealizada)
// console.log('Aluno atualizado:', aluno)



// interface IPedido {
//   valorCompra: number;
//   usarCupom: boolean;
// }


// let loja = {
//   frete: 20,
//   cupom: 0.1,
// };


// function calcularPedido({ valorCompra, usarCupom }: IPedido): boolean {
//   if (!valorCompra) {
//     return false;
//   }


//   let frete = loja.frete;


//   if (valorCompra > 300) {
//     frete = 0;
//   }


//   let desconto = 0;


//   if (usarCupom) {
//     desconto = valorCompra * loja.cupom;
//   }


//   const total = valorCompra - desconto + frete;


//   console.log("Valor da compra:", valorCompra);
//   console.log("Desconto:", desconto);
//   console.log("Frete:", frete);
//   console.log("Total:", total);


//   return true;
// }


// calcularPedido({ valorCompra: -30, usarCupom: true });


// "Exercicio 2"


// interface IUsuario {
//   nome: string;
//   idade: number;
//   Senha: string;
// }


// function cadastrarUsuario(usuario: IUsuario): boolean {
//   if (!usuario.nome || !usuario.idade || !usuario.Senha) {
//     return false;
//   }
//   if (usuario.nome.length < 3) {
//     return false;
//   }


//   if (usuario.idade < 18 || usuario.idade > 120) {
//     return false;
//   }


//   if (usuario.Senha.length < 8) {
//     return false;
//   }
 
// console.log("Nathan", usuario.nome);
// console.log("Idade:", usuario.idade);
// console.log("Senha:", usuario.Senha);


//   return true;
// }


// const resultado = cadastrarUsuario({
//   nome: "Nathan",
//   idade: 20,
//   Senha: "12345678"
// });


// console.log("Cadastro válido:", resultado);


"Exercicio 3"
interface ISistema {


   pix: number;
   saldo: number;
}


function processarPagamento(sistema: ISistema): boolean {
    if (sistema.pix <= 0) {
        return false;
    } else if (sistema.pix > 5000) {
        return false;
    }
    if (sistema.saldo <=-1 || sistema.saldo - sistema.pix < 0) {


        return false;
    }
    console.log("Valor do Pix:", sistema.pix);
    console.log("Saldo disponível:", sistema.saldo);
    return true;    
   
}
const resultado = processarPagamento({ pix: 1000, saldo: 6000 });
console.log("Pagamento processado:", resultado);