import React from "react";

import { MdEdit, MdDelete } from "react-icons/md";

import { PeapleProps } from "../App";

type PersonProps = {
  person: PeapleProps[];
};

const Main = ({ person }: PersonProps) => {
  const [customize, setCustomizer] = React.useState(false);

  function openCustomizer() {
    setCustomizer(true);
  }

  function closeCustomizer() {
    setCustomizer(false);
  }

  return (
    <main className="bg-roxo-claro p-8 flex justify-center items-center flex-col">
      {person.map((item) => (
        <div
          className="flex items-center justify-center mb-8 relative cards-pessoa z-10"
          key={item.id}
          onMouseEnter={openCustomizer}
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
          <div
            className={`absolute -right-16 customizar ${
              customize ? "abrirCustomizar" : "fecharCustomizar"
            }`}
          >
            <MdDelete size={24} className="mb-2" />
            <MdEdit size={24} />
          </div>
        </div>
      ))}
    </main>
  );
};

export default Main;
