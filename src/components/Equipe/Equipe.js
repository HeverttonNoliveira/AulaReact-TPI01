//import ExibePerfil from '../ExibePerfil/ExibePerfil';
import "./equipe.css";

function Equipe({ titulo, listaP }) {
	const cat = (c, n) => {
		if (c === "prof")
			return (
				<div className="div-prof">
					<p>Professor</p>
				</div>
			);
		else if (c === "aluno") {
			return (
				<div className="div-aluno">
					<p>Aluno</p>
				</div>
			);
		}else{
            console.log(`Falta categoria: ${n}`) 
        }
        
	};
	return (
		<>
			<h1>{titulo}</h1>
			<div className="div-exibe">
				{listaP.map((p) => (
					<div>
						<img className="img-exibe-perfil" src={p.imagem} alt={p.nome} />
                        {p.nome === undefined ?
                                <h1>Sem nome</h1>
                            :<h1>Nome: {p.nome}</h1>
                            }

                        {p.crt === undefined ?
                                <h1>habilidade não insirida</h1>
                            :<h1>Caracteristica: {p.crt}</h1>
                            }


                        {cat(p.categoria, p.nome)}
						
						{/* {p.categoria === "prof" ? (
							<div className="div-prof">
								<p>Professor</p>
							</div>
						) : (
							""
						)}

						{p.categoria === "aluno" ? (
							<div className="div-aluno">
								<p>Aluno</p>
							</div>
						) : (
							""
						)} */}
					</div>
				))}
			</div>
		</>
	);
}

export default Equipe;
