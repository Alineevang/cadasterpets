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
    }
}

const petsTeste = new Pets ("Aline", "Marshall", "Pastor-alemão", "...", "12/04/2022");
console.log(petsTeste);