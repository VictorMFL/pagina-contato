import React from "react";

import { MdClose } from "react-icons/md";

import { PeapleProps } from "../../App";

type CriarCardProps = {
  person: PeapleProps[];
  setPerson: React.Dispatch<React.SetStateAction<PeapleProps[]>>;
  setCriarContato: React.Dispatch<React.SetStateAction<boolean>>;
};

const CriarCard = ({ person, setPerson, setCriarContato }: CriarCardProps) => {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  function validateNumber(value: string) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    }else {
      setError(null);
      return true;
    }
  }

  function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    validateNumber(event.target.value);
  }

  function handleChangeName({ target }: React.ChangeEvent<HTMLInputElement>) {
    setName(target.value);
  }

  function handleChangeNumber({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) validateNumber(target.value);
    setNumber(target.value);
  }

  function closeCriarContato() {
    setCriarContato(false);
  }

  function formatPhoneNumber(phoneNumber: string): string {
    // Remover caracteres não numéricos
    const cleaned = phoneNumber.replace(/\D/g, "");

    // Adicionar o prefixo do país e o código de área
    const countryCode = "+55";
    const areaCode = cleaned.substring(0, 2);
    const phoneBody = cleaned.substring(2);
    const formatted = `${countryCode} (${areaCode}) ${phoneBody.slice(
      0,
      5
    )}-${phoneBody.slice(5)}`;

    return formatted;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (number.length < 10) {
      setError("Adicione o ddd ou tem algum número faltando");
    }else if(number.length > 11){
      setError('Muitos números. não é necessário colocar o +55.')
    }else {
      const numberFormated = formatPhoneNumber(number);
      const newContact = {
        id: Math.floor(Math.random() * 10000),
        name: name,
        number: numberFormated,
      };
      setPerson([...person, newContact]);
      setCriarContato(false);
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-roxo-claro absolute bottom-0 z-20">
      <form
        className="w-2/4 p-8 flex flex-col justify-center text-white relative"
        onSubmit={handleSubmit}
      >
        <MdClose
          className="cursor-pointer absolute right-8 -top-4 "
          size={38}
          color="#fff"
          onClick={closeCriarContato}
        />
        <div className="flex flex-col items-baselne justify-center mb-8">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            value={name}
            id="nome"
            autoComplete="off"
            required
            className="bg-slate-600 rounded-lg p-2 mt-1 outline-none border-none focus:outline-slate-700"
            onChange={handleChangeName}
          />
        </div>

        <div className="flex flex-col items-baselne justify-center mb-4">
          <label htmlFor="numero">Número</label>
          <input
            type="number"
            id="numero"
            value={number}
            autoComplete="off"
            required
            className="bg-slate-600 rounded-lg p-2 mt-1 outline-none border-none focus:outline-slate-700"
            onChange={handleChangeNumber}
            onBlur={handleBlur}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>

        <button
          type="submit"
          className="mt-8 bg-slate-500 p-2 rounded-lg font-bold hover:bg-slate-400 hover:text-slate-100"
        >
          Concluir
        </button>
      </form>
    </div>
  );
};

export default CriarCard;
