import React from "react";

import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
import CriarCard from "./CriarCard/CriarCard";

const Header = () => {
  const [criarContato, setCriarContato] = React.useState(false) 

  function criarCard() {
    setCriarContato(!criarContato)
  }

  return (
    <header className=" h-52 p-10 text-cor-texto bg-roxo-escuro flex flex-col justify-center items-center">
      <nav className="w-2/3 flex items-center justify-between mb-8">
        <h2 className="text-2xl">Meus contatos</h2>
        <div className="flex items-center justify-between gap-4">
          <AiOutlinePlus size={24} className="cursor-pointer" onClick={criarCard} />
          <MdEdit size={24} className="cursor-pointer" />
          <MdDelete size={24} className="cursor-pointer" />
        </div>
      </nav>
      <form className="w-2/3 relative">
        <input
          type="text"
          name="pesquisa"
          id="ipesquisa"
          placeholder="Busque por nome ou por dados de contato..."
          autoComplete="off"
          className="py-4 px-14 w-full bg-roxo-claro outline-none focus:outline-roxo-claro border-none"
        />
        <button type="submit" className="absolute left-3 top-4">
          <BsSearch size={24} />
        </button>
      </form>

      {criarContato && <CriarCard />}
    </header>
  );
};

export default Header;
