import { useState } from "react";

const useForm = () => {
    const [form, setForm] = useState<any>({});

    const handleChange = (target: HTMLInputElement) => {
        const { name, value, type, checked } = target;

        setForm((prev: any) => ({
            ...prev,
            [name]: type == "checkbox" ? checked : value
        }));
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('clicked');

    }
    return { form, handleChange, handleSubmit }
}

export default useForm;