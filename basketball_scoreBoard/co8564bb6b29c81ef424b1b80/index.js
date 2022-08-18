let homescore = document.getElementById("score")
let omscorBtn = document.getElementById("btn")
let score = 0
function increaseByOne(){
    score += 1
    homescore.textContent = score
    
}

function increaseByTwo(){
    score +=2
    homescore.textContent = score
}

function increaseByThree (){
    score += 3
    homescore.textContent = score
}

let guessScore = document.getElementById("scoreT")
let scoreBtn = document.getElementById("guessBtn")
let scoreT = 0
function increaseByOone(){
    scoreT +=1
    guessScore.textContent = scoreT
}

function increaseByTwoo(){
    scoreT += 2
    guessScore.textContent = scoreT
}

function increaseByThrree(){
    scoreT += 3
    guessScore.textContent = scoreT
}