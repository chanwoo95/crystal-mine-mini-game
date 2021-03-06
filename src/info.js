import * as sound from './sound.js';

export default class Info {
    constructor() {
        this.info = document.querySelector('.top__info');
        this.infoMessage = document.querySelector('.top__info--message');
        this.info.addEventListener('click', () => {
            // this.onClick && this.onClick();
            this.showAndHideInfo();
            sound.showMenuSound();

            this.closeBtn = document.querySelector('.info__closeBtn');
            this.closeBtn.addEventListener('click', () => {
                this.infoMessage.classList.add('info-hide');
                sound.closeMenuSound();
            })
        })
        
    }

    setClickListener(onClick) {
        this.onClick = onClick;
    }

    showAndHideInfo() {
        this.infoMessage.classList.toggle('info-hide');
    }

}
