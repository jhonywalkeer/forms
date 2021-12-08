import React, { useEffect, useRef } from "react";
import Input from "./../Input/index";
import InputMask from "./../InputMask/index";
import ReactSelect from "./../Select/index";
import Button from "../Button";
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import * as Yup from "yup";
import { Group2, Group3 } from "./styles";
import { Container } from "./styles";
import InputImage from "./../ImageInput/index";

const states = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AM", label: "Amazonas" },
  { value: "AP", label: "Amapá" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraiba" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "PR", label: "Paraná" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RO", label: "Rondonia" },
  { value: "RR", label: "Roraima" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SE", label: "Sergipe" },
  { value: "SP", label: "São Paulo" },
  { value: "TO", label: "Tocantins" },
];

function Layout() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("O e-mail é obrigatório"),
        street: Yup.string().required("Nome da rua é obrigatório"),
        city: Yup.string().required("Nome da cidade é obrigatório"),
        cep: Yup.string().required("CEP é obrigatório"),
        arquivo: Yup.mixed().required("O PDF ou Imagem é obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      formRef.current.setErrors({});
      reset();
      alert("Dados alterados com sucesso!");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      formRef.current.setData({
        name: "",
        telefone: "",
        cpf: "",
        matricula: "",
        email: "",
        empresa: "",
      });
    }, 2000);
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Nome Completo"
          placeholder="Informe seu nome"
        />
        <Input type="email" label="E-mail" name="email" placeholder="E-mail" />
        <Group2>
          <Input name="street" label="Rua" placeholder="Informe o logradouro" />
          <Input name="number" label="Número" />
          <Input
            name="complement"
            label="Complemento"
            placeholder="Casa, Apartamento..."
          />
        </Group2>
        <Group3>
          <Input name="city" label="Cidade" placeholder="Informe a cidade" />
          <ReactSelect
            name="state"
            label="Estado"
            options={states}
            placeholder="Selecione um estado"
          />
          <InputMask
            name="cep"
            mask="99999-999"
            label="CEP"
            placeholder="Informe o CEP..."
          />
        </Group3>

        <InputImage name="arquivo" />

        <Button type="submit" title="Salvar" />
      </Form>
    </Container>
  );
}

export default Layout;
