import { useState } from "react";

const Contador = () => {
  // let numero = 0;
  const [numero, setNumero] = useState(0);

  return (
    <section className="text-center">
      <h2>Contador</h2>
      <p>{numero}</p>
      <button
        className="btn btn-primary me-2"
        onClick={() => setNumero(numero + 1)}
      >
        +1
      </button>
      <button className="btn btn-danger" onClick={() => setNumero(numero - 1)}>
        -1
      </button>
    </section>
  );
};

export default Contador;
