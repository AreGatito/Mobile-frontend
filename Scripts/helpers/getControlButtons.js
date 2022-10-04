export const getControlButtons = ()=> {
    const channelUp = document.querySelector("#chanel-up");
    const channelDown = document.querySelector("#chanel-down");
    const volumeUp = document.querySelector("#high-volume");
    const volumeDown = document.querySelector("#low-volume");

    return {
        channelUp,
        channelDown,
        volumeUp,
        volumeDown
    }
}