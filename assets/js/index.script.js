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