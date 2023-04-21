function diaSem(dia){ 
    switch(dia){ 
        case 0:
            hj=("Domingo")
            break
        case 1:
            hj =("Segunda-feira")
            break
        case 2:
            hj=("Terça-feira")
            break
        case 3:
            hj=("Quarta-feira")
            break
        case 4:
            hj=("Quinta-feira")
            break
        case 5:
            hj=("Sexta-feira")
        case 6:
            hj=("Sábado")
            break
    }
    return hj
}
var dds= new Date().getDay()
var ontem=dds-1
console.log(`Hoje é ${diaSem(dds)}`)
console.log(`Ontem foi ${diaSem(ontem)}`)