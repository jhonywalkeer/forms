import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import ReactInputMask from "react-input-mask";
import { Container } from "../Input/styles";

export default function InputMask({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue("");
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <label>{label}</label>}
      <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <span>{error}</span>}
    </Container>
  );
}
