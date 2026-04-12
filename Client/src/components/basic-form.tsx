import type { FullForm } from "../models/form";
import useForm from "../hooks/form";
import { useEffect, useState } from "react";

const BasicForm = (formFullData: FullForm) => {
    const { id, count, inputs, button } = formFullData;
    const { form, handleChange, handleSubmit } = useForm();
    const [valid, setValid] = useState<boolean>(false);

    useEffect(() => {
        const values = Object.values(form);
        const isValid = values.length == count && values.every(
            (value: any) => {
                if (value === false) return false;
                if (value === true) return true;
                return value.trim() !== "";
            }
        );

        setValid(isValid);
    }, [form])

    return <>
        <form onSubmit={handleSubmit} id={id}>
            {inputs.map((input, index) => {
                return <div key={index}>
                    <label htmlFor={input.name}>{input.hebrew}</label>
                    <input
                        id={input.name}
                        name={input.name}
                        type={input.type ?? "text"}
                        onChange={({ target }) => handleChange(target)}
                    />
                </div>
            })}

            <button type={button.type} disabled={!valid}>
                {button.caption}
            </button>
        </form>
    </>
}

export default BasicForm;