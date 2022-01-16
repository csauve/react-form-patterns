import {path, flatten, assocPath, dissocPath, isEmpty, pipe, isNil, reject} from "ramda";

export interface BindingProps<T> {
    name: string;
    value?: T;
    onChange?: (newValue?: T) => void;
}

type Index = string | number;
export type FieldPath = Index | Index[];

export function bindField<F>(props: BindingProps<unknown>, fieldPath: FieldPath): BindingProps<F> {
    fieldPath = flatten([fieldPath]) as string[];
    return {
        name: `${props.name}-${fieldPath.join("-")}`,
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