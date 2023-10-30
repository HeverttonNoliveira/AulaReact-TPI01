import { useState } from "react";

function Eventos() {
	const textoP = useState("Botão Clicado");
	let [conta, setConta] = useState(0);
	const [nome, setNome] = useState();

	function enviaNome(e) {
        e.preventDefault()
		console.log(`O nome: ${nome} foi enviado com sucesso;`);
	}

	return (
		<>
			<p>O botão foi clicado {conta} vezes</p>
			<button onClick={() => setConta(conta++)}>Clique aqui!</button>
			<br />
			<form action="">
				<input
					type="text"
					value={nome}
					onChange={(e) => setNome(e.target.value)}
				/>
				<p>O nome é: {nome}</p>
				<button type="submit" onClick={enviaNome}>Enviar</button>
			</form>
		</>
	);
}
export default Eventos;
