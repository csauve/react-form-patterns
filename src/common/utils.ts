import {path, flatten, assocPath, dissocPath, isEmpty, pipe, isNil, reject} from "ramda";

export interface BindingProps<T> {
    value?: T;
    onChange?: (newValue?: T) => void;
}

export type FieldPath = string | string[];

export function bindField<F>(props: BindingProps<unknown>, fieldPath: FieldPath): BindingProps<F> {
    fieldPath = flatten([fieldPath]);
    return {
        value: path(fieldPath, props.value),
        onChange: (newFieldValue) => {
            const newValue = pipe(
                newFieldValue === undefined ?
                    dissocPath(fieldPath) :
                    assocPath(fieldPath, newFieldValue),
                reject(isNil)
            )(props.value);
            props.onChange(isEmpty(newValue) ? undefined : newValue);
        }
    };
}