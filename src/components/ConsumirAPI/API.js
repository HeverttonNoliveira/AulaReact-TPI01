import "./api.css";
import { useState } from "react";
import axios from "axios";

function API() {
	const [buscaCep, setBuscaCep] = useState();
	const [data, setData] = useState([]);
	const api = `https://viacep.com.br/ws/${buscaCep}/json/`;

	const btnbuscar = (e) => {
		e.preventDefault();
		axios
			.get(api)
			.then((response) => {
				if(response.data.erro === true){
					setData([])
				}else{
					setData(response.data)
				}
			
			})
			.catch((error) => {
				console.log(error);
				setData([])
			});
	};

	return (
		<div className="conteiner">
			<form action="">
				<label className="div-label">Buscar CEP</label>
				<input
					type="text"
					value={buscaCep}
					placeholder="Ex: 04848010"
					onChange={(e) => setBuscaCep(e.target.value)}
				/>
			</form>
			<div className="div-btnBuscar">
				<button className="btn-buscar" onClick={btnbuscar}>
					Buscar
				</button>
			</div>
			<p className="div-p">
				{data.length === 0
					? "Digite um CEP para buscar"
					: `${data.bairro}
					${data.cep}-
					${data.localidade}-
					${data.logradouro}`}
			</p>
		</div>
	);
}
export default API;
