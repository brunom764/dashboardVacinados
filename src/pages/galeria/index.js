
import Fabricantes from "../../analises/fabricante"
import Generos from "../../analises/genero"
import GeralAnalise from "../../analises/geral"
import Grupo from "../../analises/grupos"
import Local from "../../analises/local"
import Header from "../../componentes/header"

function Galeria(){
    return(
        <>
        <Header/>
        <GeralAnalise/>
        <Generos/>
        <Fabricantes/>
        <Grupo/>
        <Local/>
        </>
    )
}

export default Galeria