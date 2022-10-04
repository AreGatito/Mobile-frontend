export const getCurrentVC = ()=> {
    const volume = document.querySelector("#current-volume");
    const channel = document.querySelector("#current-channel");

    return {
        volume,
        channel
    }
}