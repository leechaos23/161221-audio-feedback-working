def on_received_number(receivedNumber):
    midi.tone_on(receivedNumber)
    basic.show_icon(IconNames.HEART)
    basic.clear_screen()
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(Position)
    midi.tone_on(Position)
    basic.show_icon(IconNames.HEART)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p1():
    radio.send_number(Position)
    midi.tone_on(Position)
    basic.show_icon(IconNames.STICK_FIGURE)
    basic.clear_screen()
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

Position = 0
radio.set_group(1)
midi.use_serial()
midi.use_raw_serial()
input.set_accelerometer_range(AcceleratorRange.ONE_G)
Position = 100

def on_forever():
    global Position
    Position = input.rotation(Rotation.ROLL)
    Position += 160
basic.forever(on_forever)
