import { useState } from "react";

const useForm = (onSubmit: (data: any) => void) => {
    const [form, setForm] = useState<any>({});

    const initFormValues = (values: { name: string, value: string }[]) => {
        const formObject = values.reduce((result, field) => {
            result[field.name] = field.value;
            return result;
        }, {} as Record<string, string>);

        setForm(formObject);
    }

    const handleChange = (target: HTMLInputElement) => {
        const { name, value, type, checked } = target;

        setForm((prev: any) => ({
            ...prev,
            [name]: type == "checkbox" ? checked.toString() : value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(form);
    };

    return { form, initFormValues, handleChange, handleSubmit }
}

export default useForm;