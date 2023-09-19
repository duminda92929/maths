basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() <= 21) {
        basic.showString("Cool Condition")
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        basic.showString("Dry Condition")
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
