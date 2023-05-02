import React from "react";

import { MdEdit, MdDelete } from "react-icons/md";

import { PeapleProps } from "../App";
import Editar from "./EditarContato/Editar";

type PersonProps = {
  person: PeapleProps[];
  setPerson: React.Dispatch<React.SetStateAction<PeapleProps[]>>;
};

const Main = ({ person, setPerson }: PersonProps) => {
  const [editar, setEditar] = React.useState(false);

  function removerContato(event: React.MouseEvent<SVGElement, MouseEvent>) {
    const num = Number(event.currentTarget.id);
    const idDoObjetoASerRemovido = num;
    setPerson((person) =>
      person.filter((obj) => obj.id !== idDoObjetoASerRemovido)
    );
  }

  function editarContato(event: React.MouseEvent<SVGElement, MouseEvent>) {
    const num = event.currentTarget.id;
    window.localStorage.setItem("id contato", num);
    setEditar(!editar);
  }

  // Deixando os dados do person em ordem alfabética
  const ordenanadoPerson = [...person].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Retorna a primeira letra do nome da pessoa apenas para a primeira pessoa que começa com essa letra
  const firstLetter = (name: string) => {
    const letter = name[0].toUpperCase();
    if (ordenanadoPerson.find((i) => i.name[0] === letter)?.name === name) {
      return letter;
    } else {
      return null;
    }
  };

  return (
    <main className="bg-roxo-claro p-8 flex justify-center items-center flex-col">
      {ordenanadoPerson.map((item) => (
        <div
          className="w-1/3 flex items-center mb-8 relative cards-pessoa z-10"
          key={item.id}
        >
          <p className="w-20 h-20 rounded-full bg-slate-400 flex items-center justify-center mr-8">
            img
          </p>
          <div>
            <div>
              {firstLetter(item.name) && (
                <span
                  style={{
                    backgroundColor:
                      item.name.charAt(0) === "A"
                        ? "#633BBC"
                        : item.name.charAt(0) === "B"
                        ? "#07847E"
                        : item.name.charAt(0) === "C"
                        ? "#9A00B3"
                        : item.name.charAt(0) === "D"
                        ? "#f09580"
                        : item.name.charAt(0) === "E"
                        ? "#80043a"
                        : item.name.charAt(0) === "F"
                        ? "#101942"
                        : item.name.charAt(0) === "G"
                        ? "#420b58"
                        : item.name.charAt(0) === "H"
                        ? "#63d3ff"
                        : item.name.charAt(0) === "I"
                        ? "#ff360e"
                        : item.name.charAt(0) === "J"
                        ? "#2c171c"
                        : item.name.charAt(0) === "K"
                        ? "#fd6081"
                        : item.name.charAt(0) === "L"
                        ? "#332c26"
                        : item.name.charAt(0) === "M"
                        ? "#457d97"
                        : item.name.charAt(0) === "N"
                        ? "#565175"
                        : item.name.charAt(0) === "O"
                        ? "#538a95"
                        : item.name.charAt(0) === "P"
                        ? "#cf5a60"
                        : item.name.charAt(0) === "Q"
                        ? "#660860"
                        : item.name.charAt(0) === "R"
                        ? "#31a252"
                        : item.name.charAt(0) === "S"
                        ? "#6b456c"
                        : item.name.charAt(0) === "T"
                        ? "#539fa2"
                        : item.name.charAt(0) === "U"
                        ? "#4d3b36"
                        : item.name.charAt(0) === "V"
                        ? "#606078"
                        : item.name.charAt(0) === "W"
                        ? "#b380cc"
                        : item.name.charAt(0) === "X"
                        ? "#8cbfe6"
                        : item.name.charAt(0) === "Y"
                        ? "#5c65c0"
                        : item.name.charAt(0) === "Z"
                        ? "#301c41"
                        : "#1d0c20",
                  }}
                  className="w-10 h-10 text-cor-texto rounded-lg flex items-center justify-center absolute -left-32"
                >
                  {firstLetter(item.name)}
                </span>
              )}
              <p className="font-bold">{item.name}</p>
              <p className="font-light">{item.number}</p>
            </div>
          </div>
          <div className="absolute right-0 customizar">
            <MdDelete
              size={24}
              className="mb-3 cursor-pointer z-30"
              id={String(item.id)}
              onClick={removerContato}
            />
            <MdEdit
              size={24}
              className="cursor-pointer"
              id={String(item.id)}
              onClick={editarContato}
            />
          </div>
        </div>
      ))}
      {editar && (
        <Editar person={person} setPerson={setPerson} setEditar={setEditar} />
      )}
    </main>
  );
};

export default Main;
