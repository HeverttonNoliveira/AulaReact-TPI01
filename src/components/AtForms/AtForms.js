import { useState } from "react";
import "./AtForms.css";

function AtForms() {
	const [user, setUser] = useState();
	const [senha, setSenha] = useState();

	const login = (u, s) => {
		if (u === "senac" && s === "123") {
			console.log(`login correto, Bem vindo`);
		} else {
			if (u === "senac") {
				alert(`senha incorreta`);
			} else if (s === "123") {
				alert(`usuario incorreto`);
			} else {
				alert(`usuario e senha estão incorreto`);
			}
		}
	};

	function envieCadastro(e) {
		e.preventDefault();
		login(user, senha);
	}

	return (
		<>
			<h1>Cadastro</h1>
			<form action="">
				<p>Usuario</p>
				<input
					type="text"
					value={user}
					onChange={(e) => setUser(e.target.value)}
				/>
				<p>Senha</p>
				<input
					type="password"
					value={senha}
					onChange={(e) => setSenha(e.target.value)}
				/>
				<div className="btn-entrar">
					<button type="submit" onClick={envieCadastro}>
						Entrar
					</button>
				</div>
			</form>
		</>
	);
}
export default AtForms;
