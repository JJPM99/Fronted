    // arreglos en objetos 

    const game = {

        id: 1,
        name: 'god of war ',
        dev: 'Santa Monica Studios',
        console: 'playstation consoles',
        brand: {
            id: 1,
            name: 'Sony',
            location: 'USA',
        },
        dificult: [

        { id:1,
        level: 'very easy',
        description: 'not a challenge',
        hoursToComplete: 20
        },
        { id:2,
            level: 'medium',
            description: 'enemies are stronger and you are limited',
            hoursToComplete: 23       },
        { id:3,
            level: 'hard',
            description: 'enemies will defeat you with one attack',
            hoursToComplete: 28
        },

        ]    
        ,
        timeComplete: function () {
            let total = 0;
            this.dificult.forEach( difficulties => {
                total = total + difficulties.hoursToComplete;
            })
            return total;   
        }
        ,
        cost: 800,
        yearRelease: 2018,
        status: 'available',
        stock: function () {
            return `this game is currently: ${this.status}`
        } 

    }


    console.log(game.timeComplete());
    console.log(game);