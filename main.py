_1 = ""
OLED12864_I2C.init(60)

def on_forever():
    global _1
    _1 = "" + str(pins.analog_read_pin(AnalogPin.P0))
    basic.pause(1000)
    OLED12864_I2C.clear()
    OLED12864_I2C.vline(64, 32, pins.analog_read_pin(AnalogPin.P0), 1)
basic.forever(on_forever)
