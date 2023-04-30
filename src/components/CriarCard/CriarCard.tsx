import React from "react";

const CriarCard = () => {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");

  function handleChangeName( event : any) {
    setName(event.target.value);
  }

  function handleChangeNumber( event : any) {
    setNumber(event.target.value);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-roxo-claro   absolute bottom-0 z-20">
      <form className="w-2/4 text-white">
        <div className="flex flex-col items-baselne justify-center mb-8">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            value={name}
            id="nome"
            autoComplete="off"
            className="bg-slate-600 rounded-lg p-2 mt-1 outline-none border-none focus:outline-slate-700"
            onChange={handleChangeName}
          />
        </div>

        <div className="flex flex-col items-baselne justify-center">
          <label htmlFor="numero">Número</label>
          <input
            type="text"
            id="numero"
            value={number}
            autoComplete="off"
            className="bg-slate-600 rounded-lg p-2 mt-1 outline-none border-none focus:outline-slate-700"
            onChange={handleChangeNumber}
          />
        </div>
      </form>
    </div>
  );
};

export default CriarCard;
