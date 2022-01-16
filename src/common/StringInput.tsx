import React from "react";
import { BindingProps } from "./utils";

export interface StringInputProps extends BindingProps<string> {
    label: React.ReactNode;
}

export default function StringInput(props: StringInputProps) {
    const handleChange = (e) => {
        const newVal = e.target.value;
        props.onChange(newVal === "" ? undefined : newVal);
    };
    return (
        <label>
            {props.label}
            <input
                name={props.name}
                type="text"
                value={props.value ?? ""}
                onChange={handleChange}
            />
        </label>
    );
}