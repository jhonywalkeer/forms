import React, { useRef, useEffect, useCallback, useState } from "react";
import { useField } from "@unform/core";
import { Container } from "./styles";

export default function InputImage({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
    }
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "files[0]",
      clearValue(ref) {
        ref.value = "";
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {preview && <img src={preview} alt="Preview" width="100%" />}

      <input type="file" ref={inputRef} onChange={handlePreview} accept="image/*" {...rest} />
      {!preview && (
        <strong>Clique aqui para adicionar um arquivo Imagem</strong>
      )}
      {error && <span>{error}</span>}
    </Container>
  );
}
