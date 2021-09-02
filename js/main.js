let app = new Vue({
    el: '.main',
    data: {
        showAbout: false,
        showMain: true,
        showSocial: false,
        showAchivments: false,
        showQuestions: false,
        showResalt: false,
        number: 0,
        styleObject: {
            color: 'white'
        },
        score: {
            defective: 0,
            rsp: 0,
            notSuitable: 0,
            best: 0,
            honest: 0,
        },
        totalGame: localStorage.getItem('sc2TotalGame') ? JSON.parse(localStorage.getItem('sc2TotalGame')) : {
            defective: 0,
            rsp: 0,
            notSuitable: 0,
            best: 0,
            honest: 0,
            infested: 0,
            // hybrid: 0,
        },
        totalGames: localStorage.getItem('sc2TotalGames') ? localStorage.getItem('sc2TotalGames') : 0,
        questions: questions,
        results: results,
        resultRace: 'infested',
    },
    methods: {
        goToMain() {
            this.showAbout = false
            this.showMain = true
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResalt = false
        },
        goToAbout() {
            this.showAbout = true
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResalt = false
        },

        goToSocial() {
            this.showAbout = false
            this.showMain = false
            this.showSocial = true
            this.showAchivments = false
            this.showQuestions = false
            this.showResalt = false
        },
        goToAchivments() {
            if (this.totalGames > 0) {
                this.showAbout = false
                this.showMain = false
                this.showSocial = false
                this.showAchivments = true
                this.showQuestions = false
                this.showResalt = false
            } else {
                this.goToQuestions()
            }
        },
        goToQuestions() {
            this.showAbout = false
            this.score = {
                    defective: 0,
                    rsp: 0,
                    notSuitable: 0,
                    best: 0,
                    honest: 0,
                },
                this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = true
            this.showResalt = false
        },
        goToResult(race) {
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResalt = true
            this.resultRace = race
            if (race == 'honest') {
                this.styleObject.color = 'white'
            } else {
                this.styleObject.color = 'white'
            }

        },
        nextQuestions(answer) {
            if (this.number == 24) {
                this.number = 0

                this.endGame()
            } else {
                this.number++

            }
            eval(answer)

        },
        endGame() {
            for (let i in this.score) {
                console.log(i)
                console.log(this.score[i])
            }
            this.totalGames++
                localStorage.setItem('sc2TotalGames', this.totalGames)
                // defective
            if (this.score.defective >= 5) {
                this.goToResult('defective')
                this.totalGame.defective++
                    // primle
            } else if (this.score.rsp >= 9) {
                this.goToResult('rsp')
                this.totalGame.rsp++

                    //honest
            } else if (this.score.honest >= 11) {
                this.goToResult('honest')
                this.totalGame.honest++

                    // best
            } else if (this.score.best >= 18) {
                this.goToResult('best')
                this.totalGame.best++

                    // notSuitable
            } else if (this.score.notSuitable >= 8) {
                this.goToResult('notSuitable')
                this.totalGame.notSuitable++

                    // hybrid
            } else if (this.score.defective == 30) {
                this.goToResult('hybrid')
                this.totalGame.hybrid++

                    //infested
            } else {
                this.goToResult('infested')
                this.totalGame.infested++

            }
            localStorage.setItem('sc2TotalGame', JSON.stringify(this.totalGame))
        }
    },
    // вычесляемые свойства
    computed: {
        totalScore() {
            let score = 0
            for (let i in this.totalGame) {
                score += (this.totalGame[i] * results[i].points)
            }
            return score
        },
        openRaces() {
            let count = 0
            for (let i in this.totalGame) {
                if (this.totalGame[i] > 0) {
                    count++
                }
            }
            return count
        },
        favoriteRace() {
            let max = 'defective'
            for (let i in this.totalGame) {
                if (this.totalGame[i] > this.totalGame[max])
                    max = i
            }
            return results[max].name
        },

        showResultRace() {
            return {
                'defective': this.totalGame.defective > 0 ? true : false,
                'rsp': this.totalGame.rsp > 0 ? true : false,
                'honest': this.totalGame.honest > 0 ? true : false,
                'best': this.totalGame.best > 0 ? true : false,
                'notSuitable': this.totalGame.notSuitable > 0 ? true : false,
                'infested': this.totalGame.infested > 0 ? true : false,
                'hybrid': this.totalGame.hybrid > 0 ? true : false,
            }
        }
    }
})

let audio = new Audio('audio/soundtrack.mp3')
let audio_btn = document.querySelector('.btn__sound')
let audio_icon = document.querySelector('.btn__sound i')

audio.muted = true
audio.autoplay = true
audio.volume = 0.2
audio.addEventListener('loadedmetadata', function() {
    audio.currentTime = 0 + Math.random() * (audio.duration + 1 - 0)
})
audio_btn.addEventListener('click', function() {
    if (audio.muted) {
        audio.muted = false
        audio_icon.classList.add('fa-volume-up')
        audio_icon.classList.remove('fa-volume-off')
    } else if (!audio.muted) {
        audio.muted = true
        audio_icon.classList.add('fa-volume-off')
        audio_icon.classList.remove('fa-volume-up')
    }
})