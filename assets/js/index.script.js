function verificarInputs() {
    let tutor = document.getElementById("input-tutor").value;
    let nome = document.getElementById("input-nome").value;
    let especie = document.getElementById("input-especie").value;
    let foto = document.getElementById("input-fotinha").value;
    let birthday = document.getElementById("input-birthday").value;

    console.log({tutor});
    console.log({nome});
    console.log({especie});
    console.log({foto});
    console.log({birthday});

    if (tutor == '' || nome == '' || especie == '' || foto == '' || birthday == '') {
        console.log("Os campos estão vazios!");

        return true;
    }else {
        console.log("Os campos estão preenchidos");
        return false
    }

}

function envieMsg (msg, tipo) {
    let msgDiv= document.getElementById("msg");
    msgDiv.innerHTML = "";

    let exibirMsg = `
    <p class='${tipo}'>${msg}</p>
    `
    msgDiv.innerHTML += exibirMsg;

    setTimeout (function ()  {
        msgDiv.innerHTML = '';
    }, 3000);
}

class Pets {
    constructor(tutor, nome, especie, foto, birthday) {
        this.tutor = tutor;
        this.nome = nome;
        this.especie = especie;
        this.foto = foto;
        this.birthday = birthday;
        this.idade = this.calcularIdade(birthday);
    }
    
    calcularIdade(idade) {
        const newDate = new Date (idade);
        const yearDate = newDate.getFullYear()
        
        const todayDate = new Date ();
        const nowDate = todayDate.getFullYear();

        const age = nowDate - yearDate;
        return age
    }
}


const petsTeste = new Pets ("Aline", "Marshall", "Pastor-alemão", "...", "12/04/2022");
console.log(petsTeste);

function cadastrarPets() {
    let tutor = document.getElementById("input-tutor").value;
    let nome = document.getElementById("input-nome").value;
    let especie = document.getElementById("input-especie").value;
    let foto = document.getElementById("input-fotinha").value;
    let birthday = document.getElementById("input-birthday").value;

    const pets = new Pets(tutor, nome, especie, foto, birthday);
    console.log(pets);
    bibliotecaPets.add(pets);
    renderizarConteudo()
}

class ListaPets {
    constructor() {
        this.listaPets = [];
    }
    add(parametro){
        if (verificarInputs()) {
            envieMsg("Preencha todos os campos!", "erro");
        }else {
            this.listaPets.push(parametro);
            limparInputs();
            envieMsg("Cadastrado com sucesso!", "sucesso");
            console.log(this.listaPets);
        }
    }
}

const bibliotecaPets = new ListaPets();
console.log(bibliotecaPets);

function limparInputs() {
    let tutor = document.getElementById("input-tutor").value = '';
    let nome = document.getElementById("input-nome").value = '';
    let especie = document.getElementById("input-especie").value = '';
    let foto = document.getElementById("input-fotinha").value = '';
    let birthday = document.getElementById("input-birthday").value = '';
}

function renderizarConteudo() {
    const listaHTML = document.getElementById('containerLista');
    listaHTML.innerHTML = '';

    let array = bibliotecaPets.listaPets;

    console.log(array);

    array.forEach(pet => {
        const petDiv = `
        <div class='petDetalhe'>
        <h2>Tutor(a): ${pet.tutor}</h2>
        <p>Nome: ${pet.nome}</p>
        <p>Espécie: ${pet.especie}</p>
        <p>Aniversário: ${pet.birthday}</p>
        <p>Idade: ${pet.idade}</p>
        <img src="${pet.foto}" alt="${pet.titulo}">
        `;

        listaHTML.innerHTML += petDiv;
    })
}