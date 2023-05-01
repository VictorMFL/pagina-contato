import React from "react";

import { MdEdit, MdDelete } from "react-icons/md";

import { PeapleProps } from "../App";

type PersonProps = {
  person: PeapleProps[];
  setPerson: React.Dispatch<React.SetStateAction<PeapleProps[]>>;
};

const Main = ({ person, setPerson }: PersonProps) => {

  function removerContato(event: React.MouseEvent<SVGElement, MouseEvent>) {
    const num = Number(event.currentTarget.id);
    const idDoObjetoASerRemovido = num;
    setPerson((person) => person.filter((obj) => obj.id !== idDoObjetoASerRemovido));
  }

  return (
    <main className="bg-roxo-claro p-8 flex justify-center items-center flex-col">
      {person.map((item) => (
        <div
          className="flex items-center justify-center mb-8 relative cards-pessoa z-10"
          key={item.id}
          
        >
          <p className="w-20 h-20 rounded-full bg-slate-400 flex items-center justify-center mr-8">
            img
          </p>
          <div>
            <div>
              <p className="font-bold">{item.name}</p>
              <p className="font-light">{item.number}</p>
            </div>
          </div>
          <div className="absolute -right-16 customizar">
            <MdDelete size={24} className="mb-3 cursor-pointer z-30" id={String(item.id)} onClick={removerContato} />
            <MdEdit size={24} className="cursor-pointer" />
          </div>
        </div>
      ))}
    </main>
  );
};

export default Main;
