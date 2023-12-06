function Pessoa(nome, sobrenome, altura, peso, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.altura = altura;
    this.peso = peso;
    this.idade = idade;

    this.apresentarInformacoes = function() {
        console.log(`Altura: ${this.altura} cm`);
        console.log(`Peso: ${this.peso} kg`);
        console.log(`Idade: ${this.idade} anos`);
    };
}

function Atleta(nome, sobrenome, altura, peso, idade, modalidade) {
    Pessoa.call(this, nome, sobrenome, altura, peso, idade);
    this.modalidade = modalidade;

    this.apresentarAtleta = function() {
        console.log(`Nome do Atleta: ${this.nome} ${this.sobrenome}`);
        console.log(`Modalidade: ${this.modalidade}`);
    };
}

function Estudante(nome, sobrenome, altura, peso, idade, instituicao) {
    Pessoa.call(this, nome, sobrenome, altura, peso, idade);
    this.instituicao = instituicao;

    this.apresentarEstudante = function() {
        console.log(`Nome do Estudante: ${this.nome} ${this.sobrenome}`);
        console.log(`Instituição: ${this.instituicao}`);
    };
}

const atleta1 = new Atleta('Ramon', 'Galdino', '171', '63', '21', 'Musculação');
const estudante1 = new Estudante('Ramon', 'Galdino', '171', '65', '21', 'EBAC Full Stack Python');
const atleta2 = new Atleta('Ana', 'Lucia', '164', '65', '23', 'Musculação');



atleta1.apresentarAtleta();
console.log('--------------------');
atleta1.apresentarInformacoes();
console.log('--------------------');
estudante1.apresentarEstudante();
console.log('--------------------');
atleta2.apresentarAtleta();
console.log('--------------------');