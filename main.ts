I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
basic.forever(function () {
    I2C_LCD1602.ShowString("Hello", 0, 0)
    I2C_LCD1602.ShowNumber(10, 4, 0)
    basic.pause(input.lightLevel())
    I2C_LCD1602.clear()
})
