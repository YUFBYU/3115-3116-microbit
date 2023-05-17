pins.digitalWritePin(DigitalPin.P0, 1)
basic.pause(5000)
pins.digitalWritePin(DigitalPin.P1, 1)
basic.pause(5000)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 1)
music.playSoundEffect(music.createSoundEffect(
WaveShape.Noise,
54,
54,
255,
255,
1200,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), SoundExpressionPlayMode.UntilDone)
basic.pause(2000)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P1, 1)
music.playSoundEffect(music.createSoundEffect(
WaveShape.Sine,
2920,
2742,
113,
90,
1200,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), SoundExpressionPlayMode.UntilDone)
basic.pause(5000)
pins.digitalWritePin(DigitalPin.P1, 0)
