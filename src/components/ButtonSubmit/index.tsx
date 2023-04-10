import React from "react";
import { Loading } from "../Loading";

type Props = {
  onPress: () => void
  isLoading: boolean,

  message: string,
  interval: number,
}


export function ButtonSubmit({ onPress, isLoading = false, message, interval }: Props) {

  const valitadedForm = () => {
    if(message === "") {
      alert("Preencha o campo de Texto");

      return false;
    }

    if (interval <= 0) {
      alert("Aplique um intervalo de envio maior que 0");

      return false;
    }

    else {
      onPress();
    }
  } 

  return (
    <button
      onClick={valitadedForm}
      className='btn btn-lg pl-20 pr-20 mt-6 md:mt-10 mb-2 cursor-pointer'
      disabled={isLoading || message === "" || interval < 0}
    >
      {isLoading ? <Loading /> : "INICIAR ENVIO"}
    </button>
  );
}