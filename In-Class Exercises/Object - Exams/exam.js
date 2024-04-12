class Exam {
    constructor(answer, weight) {
        this.answer = answer;
        this.weight = weight;
        this.exams = [];
    }

    // adicionando respostas de aluno ao array
    add(exam){
        // calculando nota
        let nota = 0;
        let res = exam.respostas;
        for (let i in res) {
            if (res[i] === this.answer[i]) {
                nota += weight[i]
            }
        }

        // adicionando key|valor nota ao obj aluno
        exam['nota'] = nota;

        // adicionando na database
        this.exams.push(exam);
        console.log(`Respostas de ${exam['nome']} adicionadas ao banco de dados.`)
    }

    // calculando a média
    avg() {
        let average = 0;
        let exames = this.exams;
        for (let i in exames) {
            average += exames[i].nota;
        }
        average = average/exames.length;
        return average;
    }

    // procurando menor nota
    min() {
        let exames = this.exams;
        let menor = exames[0].nota;
        for (let i = 1; i<exames.length; i++) {
            let notaAluno = exames[i].nota
            if (notaAluno < menor) {
                menor = notaAluno
            }
        }
        return menor
    }

    // procurando maior nota
    max() {
        let exames = this.exams;
        let maior = exames[0].nota;
        for (let i = 1; i<exames.length; i++) {
            let notaAluno = exames[i].nota
            if (notaAluno > maior) {
                maior = notaAluno
            }
        }
        return maior
    }

    // procurando notas menorQue -> array
    lt(n) {
        let menores = [];
        let exames = this.exams;
        for (let i in exames) {
            if (exames[i].nota<n) {
                menores.push(exames[i].nota)
            }
        }
        console.log(`Notas menores que ${n}: ${menores}`)
    }

    // procurando notas maiorQue
    gt(n) {
        let maiores = [];
        let exames = this.exams;
        for (let i in exames) {
            if (exames[i].nota>n) {
                maiores.push(exames[i].nota)
            }
        }
        console.log(`Notas menores que ${n}: ${maiores}`)
    }
}

answer = {q1: 'a', q2: 'a', q3: 'c', q4: 'b', q5: 'b'}
weight = {q1: 2, q2: 2, q3: 2, q4: 2, q5: 2}

let exam = new Exam(answer, weight);

let aluno1 = {
    nome: 'Aluno1',
    respostas: {q1: 'a', q2: 'a', q3: 'c', q4: 'b', q5: 'c'}
}

let aluno2 = {
    nome: 'Aluno2',
    respostas: {q1: 'b', q2: 'a', q3: 'c', q4: 'b', q5: 'c'}
}

exam.add(aluno1)
exam.add(aluno2)
console.log(exam)
exam.gt(6)