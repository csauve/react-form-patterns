import React from "react";
import StringInput from "./StringInput";
import {bindField, BindingProps} from "./utils";

export interface Address {
    line1?: string;
    line2?: string;
    city?: string;
}

export interface AddressInputProps extends BindingProps<Address> {
    label: React.ReactNode;
}

export default function AddressInput(props: AddressInputProps) {
    return (
        <fieldset>
            <legend>{props.label}</legend>
            <StringInput
                label="Line 1"
                {...bindField<string>(props, "line1")}
            />
            <StringInput
                label="Line 2"
                {...bindField<string>(props, "line2")}
            />
            <StringInput
                label="City"
                {...bindField<string>(props, "city")}
            />
        </fieldset>
    );
}