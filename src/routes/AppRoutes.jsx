import { Routes, Route } from "react-router-dom";
import { CadastrarReceita } from "../pages/CadastrarReceita/CadastrarReceita";
import { Home } from "../pages/Home/Home";
import { Receitas } from "../pages/Receitas/Receitas";
import { DetalharReceita } from "../pages/DetalharReceita/DetalharReceita";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/cadastrar-receita' element={<CadastrarReceita></CadastrarReceita>}></Route>
            <Route path='/receitas' element={<Receitas></Receitas>}></Route>
            <Route path='/detalhar-receita' element={<DetalharReceita></DetalharReceita>}></Route>
        </Routes>
    )
}