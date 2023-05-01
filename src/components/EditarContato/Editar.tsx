import React from "react";

import { MdClose } from "react-icons/md";

import { PeapleProps } from "../../App";

type PersonProps = {
  person: PeapleProps[];
  setPerson: React.Dispatch<React.SetStateAction<PeapleProps[]>>;
  setEditar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Editar = ({ person, setPerson, setEditar }: PersonProps) => {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  function validateNumber(value: string) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  // Mensagem de Erro.
  function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    validateNumber(event.target.value);
  }

  function handleChangeNumber({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) validateNumber(target.value);
    setNumber(target.value);
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

  const id = window.localStorage.getItem("id contato");
  const idDoObjetoASerEditado = Number(id);

  // Encontra o objeto com o id correspondente
  const objetoASerEditado = person.find(
    (objeto) => objeto.id === idDoObjetoASerEditado
  );

  // Atualiza o estado com os dados do objeto encontrado
  React.useEffect(() => {
    if (objetoASerEditado) {
      setName(objetoASerEditado.name);
      setNumber(objetoASerEditado.number);
    }
  }, [objetoASerEditado]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (number.length < 10) {
      setError("Adicione o ddd ou tem algum número faltando");
    } else if (number.length > 11) {
      setError("Muitos números. não é necessário colocar o +55.");
    } else {
      // Cria um novo array com o objeto atualizado
      const novoArray = person.map((objeto) =>
        objeto.id === idDoObjetoASerEditado
          ? { ...objeto, name: name, number: formatPhoneNumber(number) }
          : objeto
      );

      // Atualiza o estado com o novo array
      setPerson(novoArray);

      // Limpa o localStorage
      window.localStorage.removeItem("id contato");

      // Fecha o componente de Editar
      setEditar(false);
    }
  };

  function fecharOEditar() {
    setEditar(false)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-roxo-opaco absolute bottom-0 z-20">
      <form
        onSubmit={handleSubmit}
        className="w-2/4 p-8 flex flex-col justify-center text-white relative"
      >
        <MdClose
          className="cursor-pointer absolute right-8 -top-4 "
          size={38}
          color="#fff"
          onClick={fecharOEditar}
        />

        <h1 className="mb-8 text-3xl text-center">Editar</h1>

        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="off"
          required
          className="bg-slate-600 rounded-lg p-2 mt-1 outline-none border-none focus:outline-slate-700 mb-8"
        />
        <label htmlFor="number">Número:</label>
        <input
          type="number"
          id="number"
          value={number}
          onChange={handleChangeNumber}
          onBlur={handleBlur}
          autoComplete="off"
          placeholder="Novo número"
          className="bg-slate-600 rounded-lg p-2 mt-1 outline-none border-none focus:outline-slate-700"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="mt-8 bg-slate-500 p-2 rounded-lg font-bold hover:bg-slate-400 hover:text-slate-100"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Editar;
