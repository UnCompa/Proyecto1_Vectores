const button = document.getElementById("btn")
const res = document.getElementById("resultado")
button.addEventListener('click',()=>{
    const input1 = document.getElementById("input1").value
    const input2 = document.getElementById("input2").value
    const input3 = document.getElementById("input3").value
    const input4 = document.getElementById("input4").value
    //
    let resultado1 = parseInt(input1) + parseInt(input3)
    console.log(resultado1)
    let resultado2 = parseInt(input2) + parseInt(input4)
    console.log(resultado2)
    let final = "(" + resultado1 + "," + resultado2 + ")"
    console.log(final)

    res.innerHTML = "Resultado: " + final
})