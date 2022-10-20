export const useVolumeChannel = () => {
    let vol = {
        value: localStorage.getItem('volume')
    }
    let cha = {
        value:localStorage.getItem('channel')
    }

    const subirVol = () => {
        vol.value ++
    }
    const bajarVol = () => {
        if(vol.value <=0){
            vol.value = 0
        } else {
            vol.value--
        }
    }

    const subirCanal = () => {
        cha.value ++
    }
    const bajarCanal = () => {
        if (cha.value === 0) {
            cha.value = 0
        } else {
            cha.value--
        }
    }

    const updateVol = (el) => {
        localStorage.setItem('volume',vol.value);
        const currentVol = localStorage.getItem('volume');
        el.innerHTML = currentVol;
    }

    const updateChannel = (el) => {
        localStorage.setItem('channel',cha.value)
        const currentChannel = localStorage.getItem('channel');
        el.innerHTML = currentChannel;
    }

    return {
        vol,
        cha,
        subirVol,
        bajarVol,
        subirCanal,
        bajarCanal,
        updateVol,
        updateChannel
    }
}