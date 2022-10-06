import { getConnectForm } from "./helpers/getConnectFrom.js";
import { getConfigButtons } from "./helpers/getConfigButtons.js";
import { useConnectPop } from "./hooks/useConnectPop.js";

window.onload = () => {
    const {formContainer,closeForm,form,input,tvValue} = getConnectForm();
    const {connectButton,updateButton}= getConfigButtons();
    const{openPop,closePop} =useConnectPop(formContainer);

    form.onsubmit = (e) => {
        e.preventDefault();
        const value = input.value;
       // console.log(value)
        localStorage.setItem('connection',value);
        const currentValue = localStorage.getItem('connection');
        tvValue.innerHTML = currentValue;
    }

    closeForm.onclick = () => {
        closePop();
    }
    connectButton.onclick = () => {
        openPop();
    }
    updateButton.onclick = () => {
        window.location.reload();
    }
    
    tvValue.innerHTML = localStorage.getItem ('connection');
}