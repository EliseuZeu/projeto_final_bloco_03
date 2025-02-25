function Home() {
    return (
        <>
            <div className="bg-cyan-300 flex justify-center">
                <div className='container grid grid-cols-2 bg-cyan-300 w-2/1'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Aqui você encontra os melhores produtos para sua saúde.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            bg-indigo-700 border-solid border-2 py-2 px-4'
                                >
                                Cadastrar Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src="https://ik.imagekit.io/sdkyquy76/Farmacia%20projeto/home.png?updatedAt=1740485023703"
                            alt="Imagem Página Home"
                            className='w-2/3 h-2/3 object-contain '
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home