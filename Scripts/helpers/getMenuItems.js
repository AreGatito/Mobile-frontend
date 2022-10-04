export const getMenuItems = () => {
    const burger = document.querySelector("#burger");
    const offCanvas = document.querySelector ("#off-canvas");
    const close = document.querySelector ("#close-menu");

    return{
        burger,
        offCanvas,
        close
    }
}