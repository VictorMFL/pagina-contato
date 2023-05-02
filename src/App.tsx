import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";

export type PeapleProps = {
  name: string;
  number: string;
  id: number;
};

const App = () => {
  const [person, setPerson] = React.useState<Array<PeapleProps>>([
    { name: "Exemplo", number: "+55 (21) 99999-9999", id: 1 },
  ]);

  return (
    <div className="bg-black text-white">
      <Header person={person} setPerson={setPerson} />
      <Main person={person} setPerson={setPerson} />
    </div>
  );
};

export default App;
