let Par_ou_ímpar = 0
let Número = 0
input.onGesture(Gesture.Shake, function () {
    Par_ou_ímpar = randint(0, 1)
    if (Par_ou_ímpar == 1) {
        basic.showString("Par")
    } else {
        basic.showString("Ímpar")
    }
    Número = randint(1, 10)
    if (Número == 1) {
        basic.showNumber(1)
    } else if (Número == 2) {
        basic.showNumber(2)
    } else {
        basic.showNumber(randint(3, 10))
    }
})
