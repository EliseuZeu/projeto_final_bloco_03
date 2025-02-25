import { ShoppingCart, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-2'>

                <div className="container flex justify-between ">
                    <Link to='/home' className="w-60"><img src="https://ik.imagekit.io/sdkyquy76/Farmacia%20projeto/logo.png?updatedAt=1740485023716" alt="" className="w-full h-full object-contain" /></Link>

                    <div className='flex gap-4 content-center font-bold text-2xl items-center'>
                      <Link to={""}>Categorias</Link>
                      <Link to={""}>Cadastrar Categoria</Link>
                      <Link to={""}><ShoppingCart size={60} /></Link>
                      <Link to={""}><User size={60} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar