import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "TechCloud" },
    { name: "description", content: "Bem vindos a TechCloud" },
  ];
};

export default function Index() {
  return (
    <div>
      <nav className="bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 flex h-16 w-full">

          {/* Logotipo */}
          <div className="flex items-center">
            <img className="h-11" src="imagens/logo.png" alt="Logo" />
          </div>

          {/* Links de navegação (centralizados) */}
          <div className="flex justify-center items-center flex-1 md:justify-center">
            <div className="hidden md:flex space-x-4">
              <a href="#segmentos" className="text-white hover:text-gray-300">Segmentos</a>
              <a href="#funcionalidades" className="text-white hover:text-gray-300">Funcionalidades</a>
              <a href="#produtos" className="text-white hover:text-gray-300">Produtos</a>
              <a href="#sobre" className="text-white hover:text-gray-300">Sobre Nós</a>
              <a href="#blog" className="text-white hover:text-gray-300">Blog</a>
              <a href="#clientes" className="text-white hover:text-gray-300">Clientes</a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <a href="#contato" className="text-gray-800 bg-white rounded-md p-1 hover:text-gray-500 hidden md:block">Entre em Contato</a>
          </div>


          {/* Ícone do menu (para telas menores) */}
          <div className="flex items-center md:hidden">
            <button type="button" className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 6h16v1H4V6zm0 5h16v1H4v-1zm0 5h16v1H4v-1z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      <section className="relative">
        <img className="w-full h-auto" src="imagens/fundo-inicial.png" alt="Imagem de fundo" />

        <div className="absolute inset-0 mx-auto flex max-w-3xl flex-col items-center justify-center text-center text-white">

          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Sistema Especializado em <br /> Industria, Comércio, Saúde e Distribuição
          </h1>

          <p className="mb-4 text-base md:text-lg lg:text-xl">
            Gestão para tornar o seu negócio mais lucrativo
          </p>
          <a href="#contato" className="rounded-md bg-white p-1 text-gray-800 hover:text-gray-500 md:block" > Entre em Contato </a>
        </div>
      </section>
    </div>
  );
}
