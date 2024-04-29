radio.setGroup(1)
basic.forever(function () {
    serial.writeValue("pitch", input.rotation(Rotation.Pitch))
    serial.writeValue("roll", input.rotation(Rotation.Roll))
    if (input.rotation(Rotation.Pitch) < -20) {
        radio.sendString("forward")
    } else if (input.rotation(Rotation.Pitch) > 20) {
        radio.sendString("backward")
    } else {
    	
    }
    if (input.rotation(Rotation.Roll) < -20) {
        radio.sendString("left")
    } else if (input.rotation(Rotation.Roll) > 20) {
        radio.sendString("right")
    } else {
    	
    }
    if (input.rotation(Rotation.Roll) > -20 && input.rotation(Rotation.Roll) < 20 && (input.rotation(Rotation.Pitch) > -20 && input.rotation(Rotation.Pitch) < 20)) {
        radio.sendString("stop")
    }
})
