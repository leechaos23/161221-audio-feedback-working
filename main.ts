radio.onReceivedNumber(function (receivedNumber) {
    midi.toneOn(receivedNumber)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    midi.toneOff(receivedNumber)
})
radio.setGroup(1)
midi.useSerial()
midi.useRawSerial()
input.setAccelerometerRange(AcceleratorRange.OneG)
let Roll = 100
basic.forever(function () {
    Roll = input.rotation(Rotation.Roll)
    Roll += 160
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(Roll)
        music.playTone(Roll, music.beat(BeatFraction.Quarter))
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        midi.toneOff(Roll)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        radio.sendNumber(Roll)
        music.playTone(Roll, music.beat(BeatFraction.Quarter))
        basic.showIcon(IconNames.StickFigure)
        basic.clearScreen()
        midi.toneOff(Roll)
    } else {
        basic.clearScreen()
    }
})
