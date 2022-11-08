const score = document.querySelector('.score')
const result = document.querySelector('.result')
const options = document.querySelectorAll('.option')

let compScore = 0
let userScore = 0

options.forEach(i =>{
    i.addEventListener('click', (e) =>{
        let userChoice = e.target.dataset.option
        game(userChoice)
    })
})

const game = (userChoice) =>{
    let compChoice = Math.ceil(Math.random(0.1) * 3)

    if(compChoice === 1){
        compChoice = 'rock'
    }
    else if (compChoice === 2){
        compChoice = 'Paper'
    }
    else{
        compChoice ='scissors'
    }
    
    switch(compChoice[0] + userChoice[0]){
        case 'RP':
            userWin(userChoice, compChoice)
            break
        case 'RS':
            compWin(compChoice, userChoice)
            break
        case 'PR':
            compWin(compChoice, userChoice)
            break
        case 'PS':
            userWin(userChoice, compChoice)
            break
        case 'SP':
            compWin(compChoice, userChoice)
            break
        case 'SR':
            userWin(userChoice, compChoice)
            break
        default:
            draw(userChoice)
            break
    }
}

const compWin = (compChoice, userChoice) =>{
    score.innerHTML = `${userScore}:${++compScore}`
    result.innerHTML = `${compChoice} бьет ${userChoice}. Комп победил!`
    optionAnimation(userChoice)
}


const userWin = (userChoice, compChoice) =>{
    score.innerHTML = `${++userScore}:${compScore}`
    result.innerHTML = `${userChoice} бьет ${compChoice}. Юзер победил!`
    optionAnimation(userChoice)
}

const draw = (userChoice) =>{
   result.innerHTML = `Ничья. Продолжайте!`
   optionAnimation(userChoice)
}

