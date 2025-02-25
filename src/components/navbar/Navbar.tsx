import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-2'>

                  
                <div className="container flex justify-between ">
                    <Link to='/home' className="w-60"><img src="https://ik.imagekit.io/sdkyquy76/Farmacia%20projeto/logo.png?updatedAt=1740485023716" alt="" className="w-full h-full object-contain" /></Link>


                    <div className="relative flex items-center justify-center w-2/5 text-black">
						<form 
							className="flex items-center justify-center w-full"
						>
							<input
								className="w-10/12 px-4 py-4 bg-white rounded-lg h-9 focus:outline-none"
								type="search"
								placeholder="Pesquisar produto"
								id="busca"
								name="busca"
								required
							/>
							<button
								type="submit"
								className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700"
							>
								<MagnifyingGlass
									size={14}
									weight="bold"
								/>
							</button>
						</form>
					</div>

                    <div className='flex gap-4 content-center font-bold text-2xl items-center'>
                      <Link to={"/categorias"}>Categorias</Link>
                      <Link to={"/cadastrarcategoria"}>Cadastrar Categoria</Link>
                      <Link to={""}><ShoppingCart size={60} /></Link>
                      <Link to={""}><User size={60} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar