import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "TechCloud" },
    { name: "description", content: "Bem vindos a TechCloud" },
  ];
};

export default function Index() {
  return (
    <>
    {/* NavBar */}
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
      
      {/* Primeira section */}
      <section className="relative">
        <img className="w-full h-auto" src="imagens/fundo-inicial.png" alt="Imagem de fundo" />

        <div className="absolute inset-0 mx-auto flex max-w-3xl flex-col items-center justify-center text-center text-white">

          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-6xl">
            Sistema Especializado em <br /> Industria, Comércio, Saúde e Distribuição
          </h1>

          <p className="mb-4 text-base md:text-lg lg:text-xl">
            Gestão para tornar o seu negócio mais lucrativo
          </p>
          <a href="#contato" className="rounded-md bg-white p-1 text-gray-800 hover:text-gray-500 md:block" > Entre em Contato </a>
        </div>
      </section>

      {/* Cards */}
      <section>
      <h1 className="mt-40 flex justify-center text-4xl font-medium text-gray-800">
        O Sistema ERP ideal para
      </h1>
      <div className="flex justify-center gap-4 mt-10">
        <div className="my-8 w-80 max-w-xs rounded-lg bg-white shadow-2xl p-10">
          <div className="p-4">
            <div className="mx-auto h-24 w-24 rounded-full bg-blue-800 p-4">
              <img
                className="h-full w-full object-cover"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mYWN0b3J5Ij48cGF0aCBkPSJNMiAyMGEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJWOGwtNyA1VjhsLTcgNVY0YTIgMiAwIDAgMC0yLTJINGEyIDIgMCAwIDAtMiAyWiIvPjxwYXRoIGQ9Ik0xNyAxOGgxIi8+PHBhdGggZD0iTTEyIDE4aDEiLz48cGF0aCBkPSJNNyAxOGgxIi8+PC9zdmc+"
                alt="Imagem do Card 1"
              />
            </div>
            <div className="mt-4">
              <p className="mt-2 text-center text-sm text-gray-600">
                Segmento de
              </p>
              <p className="text-center text-4xl font-bold text-gray-800">
                Industria
              </p>
            </div>
          </div>
        </div>
        <div className="my-8 w-80 max-w-xs rounded-lg bg-white shadow-2xl p-10">
          <div className="p-4">
            <div className="mx-auto h-24 w-24 rounded-full bg-blue-800 p-4">
              <img
                className="h-full w-full object-cover"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oZWFydC1wdWxzZSI+PHBhdGggZD0iTTE5IDE0YzEuNDktMS40NiAzLTMuMjEgMy01LjVBNS41IDUuNSAwIDAgMCAxNi41IDNjLTEuNzYgMC0zIC41LTQuNSAyLTEuNS0xLjUtMi43NC0yLTQuNS0yQTUuNSA1LjUgMCAwIDAgMiA4LjVjMCAyLjMgMS41IDQuMDUgMyA1LjVsNyA3WiIvPjxwYXRoIGQ9Ik0zLjIyIDEySDkuNWwuNS0xIDIgNC41IDItNyAxLjUgMy41aDUuMjciLz48L3N2Zz4="
                alt="Imagem do Card 2"
              />
            </div>
            <div className="mt-4">
              <p className="mt-2 text-center text-sm text-gray-800">
                Segmento de
              </p>
              <p className="text-center text-4xl font-bold text-gray-800">
                Saúde
              </p>
            </div>
          </div>
        </div>
        <div className="my-8 w-80 max-w-xs rounded-lg bg-white shadow-2xl p-10">
          <div className="p-4">
            <div className="mx-auto h-24 w-24 rounded-full bg-blue-800 p-4">
              <img
                className="h-full w-full object-cover"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYWNrYWdlIj48cGF0aCBkPSJtNy41IDQuMjcgOSA1LjE1Ii8+PHBhdGggZD0iTTIxIDhhMiAyIDAgMCAwLTEtMS43M2wtNy00YTIgMiAwIDAgMC0yIDBsLTcgNEEyIDIgMCAwIDAgMyA4djhhMiAyIDAgMCAwIDEgMS43M2w3IDRhMiAyIDAgMCAwIDIgMGw3LTRBMiAyIDAgMCAwIDIxIDE2WiIvPjxwYXRoIGQ9Im0zLjMgNyA4LjcgNSA4LjctNSIvPjxwYXRoIGQ9Ik0xMiAyMlYxMiIvPjwvc3ZnPg=="
                alt="Imagem do Card 3"
              />
            </div>
            <div className="mt-4">
              <p className="mt-2 text-center text-sm text-gray-800">
                Segmento de
              </p>
              <p className="text-center text-4xl font-bold text-gray-800">
                Distribuição
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
