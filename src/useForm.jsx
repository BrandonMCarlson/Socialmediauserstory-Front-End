import { useState } from "react";

const useForm = (callback) => {
    const [formValue, setFormValue] = useState("");

    const handleChange = (event) => {
        event.persist(); 
        setFormValue(event.target.value);
    };

    const handleSubmit = (event, comment=null) => {
        event.preventDefault();
        callback(comment);
        setFormValue("");
    };

    return {formValue, handleChange, handleSubmit, setFormValue}
};
 
export default useForm;