maqueen.IR_callbackUser(function (message) {
    if (message == 2) {
        // Move forward
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else if (message == 4) {
        // Turn Left
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else if (message == 6) {
        // Turn Right
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    } else if (message == 8) {
        // Move Backwards
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    } else {
        // Stop if we don't recognize the message
        maqueen.motorStop(maqueen.Motors.All)
    }
})
