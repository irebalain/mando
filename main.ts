radio.setGroup(1)
basic.forever(function () {
    if (input.acceleration(Dimension.X) >= 200) {
        radio.sendString("der")
        basic.showArrow(ArrowNames.East)
    } else if (input.acceleration(Dimension.X) <= -200) {
        radio.sendString("izq")
        basic.showArrow(ArrowNames.West)
    } else if (input.acceleration(Dimension.Y) >= 200) {
        radio.sendString("tras")
        basic.showArrow(ArrowNames.South)
    } else if (input.acceleration(Dimension.Y) <= -200) {
        radio.sendString("del")
        basic.showArrow(ArrowNames.North)
    }
})
