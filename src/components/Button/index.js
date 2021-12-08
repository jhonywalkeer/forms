import React from "react";
import { Btn } from "./styles";

export default function Button({ title, type }) {
  return <Btn type={type}>{title}</Btn>;
}
