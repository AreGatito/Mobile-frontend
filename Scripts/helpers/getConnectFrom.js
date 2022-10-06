export const getConnectForm = () => {
    const formContainer = document.querySelector ("#form-popup");
    const closeForm = document.querySelector ("#close-pop");
    const form = document.querySelector ("#connect-form");
    const input = document.querySelector ("#tv-id");
    const tvValue = document.querySelector ("#current-tv");

    return {
        formContainer,
        closeForm,
        form,
        input,
        tvValue
    }
}