basic.showString("Hello!")
basic.showString("Welcome to mircobit")
basic.showString("You will learn how to make a flashing hearts")
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
