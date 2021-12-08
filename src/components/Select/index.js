import React, { useRef, useEffect } from "react";
import Select from "react-select/creatable";
import { useField } from "@unform/core";
import { Container } from "../Input/styles";

export default function ReactSelect({ name, label, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "state.value",
      getValue: (ref) => {
        if (ref.isMulti) {
          if (!ref.state.value) {
            return [];
          }

          return ref.state.value.map((option) => option.value);
        } else {
          if (!ref.state.value) {
            return "";
          }

          return ref.state.value.value;
        }
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      {label && <label>{label}</label>}
      <Select
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
      {error && <span>{error}</span>}
    </Container>
  );
}
