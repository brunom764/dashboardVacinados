
import Fabricantes from "../../analises/fabricante"
import Generos from "../../analises/genero"
import GeralAnalise from "../../analises/geral"
import Grupo from "../../analises/grupos"
import Header from "../../componentes/header"

function Galeria(){
    return(
        <>
        <Header/>
        <GeralAnalise/>
        <Generos/>
        <Fabricantes/>
        <Grupo/>
        </>
    )
}

export default Galeria