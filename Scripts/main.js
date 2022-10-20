import openItem from "./menu-controllers/open.js";
import closeItem from "./menu-controllers/close.js";
import {getMenuItems} from "./helpers/getMenuItems.js";
import {getCurrentVC} from "./helpers/getCurrentVC.js";
import {getControlButtons} from "./helpers/getControlButtons.js";
import {useVolumeChannel} from "./hooks/useVolumeChannel.js";

document.addEventListener ("DOMContentLoaded", () => {
    const {burger, offCanvas, close} = getMenuItems ();
    const {volume, channel} = getCurrentVC ();
    const {channelUp,channelDown,volumeUp,volumeDown} = getControlButtons ();
    const {vol,cha,subirVol,bajarVol,subirCanal,bajarCanal,updateVol,updateChannel} = useVolumeChannel ();
    
    
    close.onclick = () => {
        closeItem(offCanvas);
    }
    
    burger.onclick = () => {
        openItem(offCanvas);
    }

    volume.innerHTML = localStorage.getItem('volume');
    channel.innerHTML = localStorage.getItem('channel');

    channelUp.onclick = () => {
        subirCanal();
        updateChannel(channel);
    }
    channelDown.onclick = () => {
        bajarCanal();
        updateChannel(channel);
    }
    volumeUp.onclick = () => {
        subirVol();
        updateVol(volume);
    }
    volumeDown.onclick = () => {
        bajarVol();
        updateVol(volume);
    }
    
    
});
