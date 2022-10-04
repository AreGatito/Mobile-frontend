export const useVolumeChannel = () => {
    let vol = {
        value: 0 
    }
    let cha = {
        value:0
    }

    const subirVol = () => {
        vol.value ++
    }
    const bajarVol = () => {
        if(vol.value ===0){
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
        el.innerHTML =vol.value;
    }

    const updateChannel = (el) => {
        el.innerHTML = cha.value;
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