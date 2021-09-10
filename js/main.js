let app = new Vue({
    el: '.main',
    data: {
        showAbout: false,
        allTest: false,
        showAllQuestions: false,
        showMain: true,
        showSocial: false,
        showAchivments: false,
        showQuestions: false,
        showResalt: false,
        itemName: '',
        number: 0,
        allTestArr: [],
        styleObject: {
            color: 'white'
        },
        score: {
            defective: 0,
            rsp: 0,
            notSuitable: 0,
            best: 0,
            honest: 0,
            infested: 0,
            hybrid: 0,
            wife: 0,
            loser: 0,
            win: 0,
        },
        totalGame: localStorage.getItem('sc2TotalGame') ? JSON.parse(localStorage.getItem('sc2TotalGame')) : {
            defective: 0,
            rsp: 0,
            notSuitable: 0,
            best: 0,
            honest: 0,
            infested: 0,
            hybrid: 0,
            wife: 0,
            loser: 0,
            win: 0,
        },
        totalGames: localStorage.getItem('sc2TotalGames') ? localStorage.getItem('sc2TotalGames') : 0,
        questions: questions,
        results: results,
        resultRace: 'infested',
    },
    methods: {
        getInfo() {
            // Open first question
            if (document.getElementById("disabled0")) {
                document.getElementById("disabled0").disabled = false
                document.getElementById("disabled0").getElementsByTagName("img")[0].setAttribute("src", "img/star.png")
                if (JSON.parse(localStorage.getItem('sc2TotalGame'))) {
                    lavel = JSON.parse(localStorage.getItem('sc2TotalGame'))
                    if (lavel.best > 0) {
                        document.getElementById("disabled1").disabled = false
                        document.getElementById("disabled1").getElementsByTagName("img")[0].setAttribute("src", "img/star.png")
                    }
                    if (lavel.honest > 0) {
                        document.getElementById("disabled2").disabled = false
                        document.getElementById("disabled2").getElementsByTagName("img")[0].setAttribute("src", "img/star.png")
                    }
                    if (lavel.wife > 0) {
                        document.getElementById("disabled3").disabled = false
                        document.getElementById("disabled3").getElementsByTagName("img")[0].setAttribute("src", "img/star.png")
                    }
                }
            }

        },

        showLastTest() {
            document.querySelector('p.app__moreText').innerHTML = "Пройдите тест: Насколько хорошо вы разбираетесь в мужчинах - для открытия следующего."
            lavel = JSON.parse(localStorage.getItem('sc2TotalGame'))
            if (lavel.best > 0) {

                document.querySelector('p.app__moreText').innerHTML = "Пройдите: На верность"
            }
            if (lavel.honest > 0) {

                document.querySelector('p.app__moreText').innerHTML = "Пройдите тест: На крепкую семью"
            }
            if (lavel.wife > 0) {

                document.querySelector('p.app__moreText').innerHTML = "Тест: Xорошая ли вы жена"
            }
            if (lavel.win > 0) {

                document.querySelector('p.app__moreText').innerHTML = "Поздравляем тест на идеальную жену ПРОЙДЕН!"
            }


        },

        goToMain() {
            this.showAllQuestions = false
            this.showAbout = false
            this.showMain = true
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResalt = false
        },
        goToAbout() {
            this.showAllQuestions = false
            this.showAbout = true
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResalt = false
        },

        goToSocial() {
            this.showAllQuestions = false
            this.showAbout = false
            this.showMain = false
            this.showSocial = true
            this.showAchivments = false
            this.showQuestions = false
            this.showResalt = false
        },
        goToAchivments() {
            if (this.totalGames > 0) {
                this.showAllQuestions = false
                this.showAbout = false
                this.showMain = false
                this.showSocial = false
                this.showAchivments = true
                this.showQuestions = false
                this.showResalt = false
            } else {
                this.goToALLQuestions()
            }
        },
        goToQuestions() {
            this.showAllQuestions = false
            this.showAbout = false
            this.score = {
                    defective: 0,
                    rsp: 0,
                    notSuitable: 0,
                    best: 0,
                    honest: 0,
                    hybrid: 0,
                    wife: 0,
                    loser: 0,
                    win: 0,
                },
                this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = true
            this.showResalt = false
        },
        chooseQuestions(item, itemName) {
            this.itemName = itemName

            if (item == 0) {
                this.questions = questions

                this.goToQuestions()
            } else if (item == 1) {
                this.questions = questions1
                this.goToQuestions()
            } else if (item == 2) {
                this.questions = questions2
                this.goToQuestions()
            } else if (item == 3) {
                this.questions = questions3
                this.goToQuestions()
            }

        },
        goToALLQuestions() {
            this.showAllQuestions = true
            this.showAbout = false
            this.showMain = false
            this.showSocial = false
            this.showAchivments = false
            this.showQuestions = false
            this.showResalt = false
            this.allTestArr = allTestArr

        },
        goToResult(race) {
            this.showAllQuestions = false
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
            if (this.number == 9) {
                this.number = 0

                this.endGame()
            } else {

                console.log(answer)

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

            if (this.score.defective > this.score.best) {
                this.goToResult('defective')
                this.totalGame.defective++

            } else if (this.score.defective < this.score.best) {
                this.goToResult('best')
                this.totalGame.best++

            } else if (this.score.honest > this.score.notSuitable) {
                this.goToResult('honest')
                this.totalGame.honest++

                    //notSuitable
            } else if (this.score.honest < this.score.notSuitable) {
                this.goToResult('notSuitable')
                this.totalGame.notSuitable++

            } else if (this.score.hybrid < this.score.wife) {
                this.goToResult('wife')
                this.totalGame.wife++

            } else if (this.score.hybrid > this.score.wife) {
                this.goToResult('hybrid')
                this.totalGame.hybrid++

            } else if (this.score.loser > this.score.win) {
                this.goToResult('loser')
                this.totalGame.loser++

            } else if (this.score.loser < this.score.win) {
                this.goToResult('win')
                this.totalGame.win++

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
                'wife': this.totalGame.wife > 0 ? true : false,
                'loser': this.totalGame.loser > 0 ? true : false,
                'win': this.totalGame.win > 0 ? true : false,
            }
        }
    },
    updated() {
        this.getInfo()
        this.showLastTest()
    },
})