
const nameInputEl = document.querySelector("#start-screen__name-input")
const startBtnEL = document.querySelector('.start-screen__btn')

let gameQuestions = []
let questionIndex = 0
let highScoreData = []

// Check for highscore data in localStorage

if (localStorage.hasOwnProperty('highScoreArr')) {
    highScoreData = JSON.parse(localStorage.getItem('highScoreArr'))    // Get local storage
} 




let player = {
    playerName: '',
    accPoints: 0
}

document.querySelector('#player-change').addEventListener('click', ()=> {
    window.location.reload()
})

startBtnEL.addEventListener('click', function() {
    if (nameInputEl.value.length > 1) {
        player.playerName = nameInputEl.value

        document.querySelector('.points-display').classList.add('visible')
        document.querySelector('#player-change').classList.add('change-player--visible')

        startNewGame()
    } else {
        alert("Du måste fylla i ett namn som är minst 2 bokstäver långt")
    }

})

function startNewGame() {

    const allQuestions = [...originalQuestionsArr]

    gameQuestions = []
    questionIndex = 0
    player.accPoints = 0

    updateScoreAndName()

    let i = 0
    while (i < 10) {
        gameQuestions.push(allQuestions.splice(Math.floor(Math.random() * allQuestions.length), 1)[0])
        i++
    }
 
    renderQuestion()

}

function updateScoreAndName() {
    const pointsDisplayEl = document.querySelector('.points-display')
    pointsDisplayEl.textContent = `${player.playerName}: ${player.accPoints}`
    
}

function renderQuestion() {

    if (questionIndex < 10) {

        const mainEl = document.querySelector('main')

        let questionsHtmlVariable = ``
     
        for (let i = 0; i < gameQuestions[questionIndex].alternatives.length; i++) {
    
            questionsHtmlVariable += `
                <label><input name='question${questionIndex + 1}' type='radio' value='${i}'>${gameQuestions[questionIndex].alternatives[i]}</label>
            `
           
        }
    
    
        let returnVariable = `
            <form class='question'>
                <p class='question-index-p'>Fråga ${questionIndex + 1} av ${gameQuestions.length}</p>
                <p class='question__question-p'>${gameQuestions[questionIndex].question}</p>
                ${questionsHtmlVariable}
                <button class='guess-btn' type='submit' class='start-screen__btn'>Gissa</button>
            </form>
        `
    
        mainEl.innerHTML = returnVariable
    
    
        // FORM HANDLING
    
        const form = document.querySelector('.question')
    
        form.addEventListener('submit', (event) => {
    
            const data = new FormData(form);
            let answer 
            for (const entry of data) {
    
            answer = entry[1];
            }
            event.preventDefault();
    
            if (answer !== undefined) {
                evaluateAnswer(answer);
            }
        })
    }
}

function evaluateAnswer(answer) {
    if (answer == gameQuestions[questionIndex].correctIndex) {
        console.log('Right answer')
        player.accPoints += 10
        updateScoreAndName()
    } else {
        console.log('Wrong answer')
    }

    const allAlternatives = document.querySelectorAll('label')
    for (let label of allAlternatives) {
        if (label.firstChild.value == gameQuestions[questionIndex].correctIndex) {
            label.innerHTML += `
            <span class='emoji-span'><p class='emoji-p'>&#9989;</p></span>
            `
        } else {
            label.innerHTML += `
            <span class='emoji-span'><p class='emoji-p'>&#10060;</p></span>
            `
        }
    }
    cleanUpButtons()
    
}

function cleanUpButtons() {
    const questionEl = document.querySelector('.question')
    const guessBtn = document.querySelector('.guess-btn')

    questionEl.removeEventListener('submit', (event) => {

        const data = new FormData(form);
        let answer 
        for (const entry of data) {
    
        answer = entry[1];
        }
        event.preventDefault();
    
        if (answer !== undefined) {
            evaluateAnswer(answer);
        }
    
    })

    questionEl.removeChild(guessBtn)

    if (questionIndex !== 9) {
        questionEl.innerHTML += `<button class='next-btn start-screen__btn'>Nästa fråga</button>`
        const nextBtn = document.querySelector('.next-btn')
        nextBtn.addEventListener('click', () => {
            questionIndex++
            renderQuestion()
        })
    } else {

        submitHighscore()

        questionEl.innerHTML = `<button class="start-screen__btn play-again-btn">SPELA IGEN!</button>` + questionEl.innerHTML
        const playAgainBtn = document.querySelector('.play-again-btn')
        playAgainBtn.addEventListener('click', () => {
            startNewGame()
        })

    }

}

function drawHighscoreTable() {

    sortTable()

    const tableBodyEl = document.getElementById('table-body')
    let acc = ``

    for (let i = 0; i < 10; i++) {
        if (i === 0 && highScoreData.length !== 0) {
            acc += `
            <tr>
                <td>&#127941;</td>
                <td>1.</td>
                <td>${highScoreData[i].player}</td>
                <td>${highScoreData[i].finalScore}</td>
            </tr>
            `
        }
        else if (i < highScoreData.length) {
            acc += `
            <tr>
                <td></td>
                <td>${i + 1}.</td>
                <td>${highScoreData[i].player}</td>
                <td>${highScoreData[i].finalScore}</td> 
            </tr>
            
            `
        } else {
            acc += `
            <tr>
                <td></td>
                <td>${i + 1}.</td>
                <td></td>
                <td>0</td>
            </tr>
            `
        }
    }

    tableBodyEl.innerHTML = acc
    
}

function submitHighscore() {
    if (highScoreData.length < 10) {
        highScoreData.push({
            player: player.playerName,
            finalScore: player.accPoints
        })
    } else if (player.accPoints > highScoreData[highScoreData.length - 1].finalScore) {
        let newArr = [...highScoreData]
        newArr.pop()
        newArr.push({
            player: player.playerName,
            finalScore: player.accPoints
        })
        highScoreData = [...newArr]
    }
    localStorage.setItem('highScoreArr', JSON.stringify(highScoreData)) // Set local storage

    drawHighscoreTable()
}

function sortTable() {
    highScoreData.sort((a, b) => {
        if (a.finalScore > b.finalScore) {
            return -1
        } else if (a.finalScore < b.finalScore) {
            return 1
        }
    })
}


// startNewGame()

drawHighscoreTable()

