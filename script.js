const button = document.getElementById("btn")
const res = document.getElementById("resultado")
button.addEventListener('click',()=>{
    const input1 = document.getElementById("input1").value
    const input2 = document.getElementById("input2").value
    const input3 = document.getElementById("input3").value
    const input4 = document.getElementById("input4").value
    //Calculo
    let resultado1 = parseInt(input1) + parseInt(input3)
    let resultado2 = parseInt(input2) + parseInt(input4)
    let final = "(" + resultado1 + "," + resultado2 + ")"
    res.innerHTML = "Resultado: " + final
})

const button2 = document.getElementById("btn-2")
const res2 = document.getElementById("resultado-2")
button2.addEventListener('click', ()=>{
    const input1 = document.getElementById("vec3_input1").value
    const input2 = document.getElementById("vec3_input2").value
    const input3 = document.getElementById("vec3_input3").value
    const input4 = document.getElementById("vec3_input4").value
    const input5 = document.getElementById("vec3_input5").value
    const input6 = document.getElementById("vec3_input6").value
        //Calculo
        let resultado1 = parseInt(input1) + parseInt(input3) + parseInt(input5)
        let resultado2 = parseInt(input2) + parseInt(input4) + parseInt(input6)
        let final = "(" + resultado1 + "," + resultado2 + ")"
        res2.innerHTML = "Resultado: " + final
})