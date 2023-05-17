const form = document.getElementById('form-ab');

form.addEventListener("submit", function(e) {


    const campoA = document.getElementById('campo_A').value
    const campoB = document.getElementById('campo_B').value
    const campoAInteger = parseInt(campoA, 10);
    const campoBInteger = parseInt(campoB, 10);

    if (campoBInteger > campoAInteger) {
        alert("Válido")
    } 
    else {
        alert("Inválido")
    }
})

console.log(form)