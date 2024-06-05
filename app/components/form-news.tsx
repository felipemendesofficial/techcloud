export function FormNews(){
    return(
        <>
        <section className="bg-gray-200 flex items-center justify-center py-10">
            <div className="p-4">
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl">
                    <h2 className="text-xl font-bold text-gray-600">
                        Cadastre seu email, receba as novidades!
                    </h2>
                    {/* Formulário */}
                    <form className="p-4" action="#" method="POST">
                        {/* Campo Nome */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-xs font-medium text-gray-600">
                                Nome
                            </label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md text-xs text-gray-600 border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Digite seu nome ou nome da empresa" required=""/>
                        </div>
                        {/* Campo Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-xs font-medium text-gray-600">
                                Email
                            </label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md text-xs text-gray-600 border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Digite seu email" required=""/>
                        </div>
                        {/* Botão Enviar */}
                        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition duration-300">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}