import React from "react";

import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import CriarCard from "./CriarCard/CriarCard";

import { PeapleProps } from "../App";

type HeaderProps = {
  person: PeapleProps[];
  setPerson: React.Dispatch<React.SetStateAction<PeapleProps[]>>;
};

const Header = ({ person, setPerson }: HeaderProps) => {
  const [criarContato, setCriarContato] = React.useState(false);
  const [pesquisa, setPesquisa] = React.useState("");

  function criarCard() {
    setCriarContato(!criarContato);
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setPesquisa(target.value);
  }

  const inputRef = React.useRef<HTMLInputElement>(null);

  function limparPesquisa() {
    setPesquisa("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  const filteredData = person.filter((item) => {
    return item.name.toLowerCase().includes(pesquisa.toLowerCase());
  });

  return (
    <header className=" h-52 p-10 text-cor-texto bg-roxo-escuro flex flex-col justify-center items-center">
      <nav className="w-2/3 flex items-center justify-between mb-8">
        <h2 className="text-2xl">Meus contatos</h2>
        <AiOutlinePlus
          size={24}
          className="cursor-pointer"
          onClick={criarCard}
        />
      </nav>
      <form className="w-2/3 relative">
        <input
          type="text"
          name="pesquisa"
          id="ipesquisa"
          placeholder="Busque por nome ou por dados de contato..."
          autoComplete="off"
          className="py-4 px-14 w-full bg-roxo-claro outline-none focus:outline-roxo-claro border-none"
          onChange={handleChange}
          value={pesquisa}
          ref={inputRef}
        />
        <div className="absolute top-16 bg-roxo-escuro rounded-lg z-30 py-4 w-full text-center">
          {pesquisa != "" &&
            filteredData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="p-2 hover:bg-slate-500"
                >
                  <a href={`#${item.id}`} onClick={limparPesquisa}>
                    {item.name}
                  </a>
                </div>
              );
            })}
        </div>
        <button type="submit" className="absolute left-3 top-4">
          <BsSearch size={24} />
        </button>
      </form>

      {criarContato && (
        <CriarCard
          person={person}
          setPerson={setPerson}
          setCriarContato={setCriarContato}
        />
      )}
    </header>
  );
};

export default Header;
