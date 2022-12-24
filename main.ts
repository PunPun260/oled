let _1 = 0
OLED12864_I2C.init(60)
basic.forever(function () {
    _1 = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
    OLED12864_I2C.rect(
    25,
    30 - Math.map(_1, 0, 1001, 0, 30),
    35,
    30,
    1
    )
    basic.pause(500)
    OLED12864_I2C.clear()
})
