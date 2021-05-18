const bgSound = new Audio('./sound/bg.mp3');
const gunSound = new Audio('./sound/shotgun.mp3');

export function backgroundSound() {
    playSound(bgSound);
}

export function gunshotSound() {
    playSound(gunSound)
}

function playSound(sound) {
    sound.play();
}