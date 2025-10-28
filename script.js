
//Código feito pelo Rodolfo na aula

// function generateNumber() {
//     const min = Math.ceil(document.querySelector(".input-min").value)
//     const max = Math.floor(document.querySelector(".input-max").value)
//     const result = Math.floor(Math.random() * (max - min + 1)) + min;

//     alert(result)
//   }


//Código feito por mim validando campos

function generateNumber() {
    const minInput = document.querySelector(".input-min")
    const maxInput = document.querySelector(".input-max")

    min = minInput.value
    max = maxInput.value

    if (min === "" || max === "") {
        alert("Não deixe campos vazio por favor")
        return;
    }

    min = Number(min)
    max = Number(max)

    if (isNaN(min) || isNaN(max)) {
        alert("Digite numeros válidos por favor")
        return;
    }

    if (min > max) {
        alert("O número mínimo não pode ser maior que o máximo!")
       return; 
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    let messageDraw = document.querySelector(".message-draw")
    messageDraw.style.color = "red"
    messageDraw.innerHTML = "Número sorteado foi"

    const boxInput = document.querySelector(".box-input")
    boxInput.style.display ="none"

    const drawnNumber = document.querySelector(".drawn-number")
    drawnNumber.style.display = "block"
    drawnNumber.innerHTML = result

    const button = document.querySelector(".button")
    button.innerHTML = "Voltar"

    button.onclick = () => {
        // Restaura a interface inicial
        boxInput.style.display = "flex";
        drawnNumber.style.display = "none";
        messageDraw.innerHTML = "Sortear um Número";
        messageDraw.style.color = "white";

        //limpar os campos do input
        minInput.value = "";
        maxInput.value = "";
        button.innerHTML = "Sortear";

        button.onclick = generateNumber; // volta a função original
    }


}