import React from "react";
import AddressInput, {Address} from "./AddressInput";
import StringInput from "./StringInput";
import {bindField, BindingProps} from "./utils";

export interface Person {
    name?: string;
    address?: Address;
}

export interface PersonInputProps extends BindingProps<Person> {
    label: React.ReactNode;
}

export default function PersonInput(props: PersonInputProps) {
    return (
        <fieldset>
            <legend>{props.label}</legend>
            <StringInput
                label="Name"
                {...bindField<string>(props, "name")}
            />
            <AddressInput
                label="Address"
                {...bindField<Address>(props, "address")}
            />
        </fieldset>
    );
}