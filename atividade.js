function Pessoa(nome, sobrenome, altura, peso, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.altura = altura;
    this.peso = peso;
    this.idade = idade;

    this.minhasInfos = function() {
        console.log(`Nome: ${this.nome} ${this.sobrenome}`);
        console.log(`Altura: ${this.altura} cm`);
        console.log(`Peso: ${this.peso} kg`);
        console.log(`Idade: ${this.idade} anos`);
    };
}

const pessoa = new Pessoa('Ramon', 'Galdino', '171', '65', '21');

pessoa.minhasInfos();

// acrescentei o 'Nome' 'altura' e os demais dentro do console.log para ficar melhor apresentado //