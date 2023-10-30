import { useState } from "react";
import "./InputUseState.css";

function InputUseState() {
	const [user, setUser] = useState();
	const [senha, setSenha] = useState();
	const [vLogin, setVlogin] = useState();

	const entrar = (e) => {
		e.preventDefault();

		if (user.toLowerCase() === "senac" && senha === "123") {
			setVlogin(true);
		} else {
			if (user.toLowerCase() !== "senac" && senha === "123") {
				setVlogin("Login incorreto");
			} else if (user.toLowerCase() === "senac" && senha !== "124") {
				setVlogin("Senha incorreto");
			} else {
				setVlogin("Login e senha incorretos");
			}
		}
	};

	return (
		<>
			<h2>Forms React </h2>
			<form action="">

				<label>E-mail ou Usuario</label>
				<input
					type="email"
					value={user}
					onChange={(e) => setUser(e.target.value)}
					autoFocus
					placeholder="E-mail ou Usuario"
				/>
				<label>Senha</label>
				<input
					type="password"
					value={senha}
					onChange={(e) => setSenha(e.target.value)}
					placeholder="Senha"
				/>
			</form>

			<div className="btn-entrar">
				<button type="submit" onClick={entrar}>
					Login
				</button>
			</div>

			{vLogin === true ? <p className="entrar">Login feito com sucesso</p> : ""}

			{vLogin !== true ? <p className="erro">{vLogin}</p> : ""}
		</>
	);
}
export default InputUseState;
