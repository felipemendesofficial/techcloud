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
            <a href="#contato" className="text-gray-600 bg-white rounded-md p-1 hover:text-gray-400 hidden md:block">Entre em Contato</a>
          </div>


          {/* Ícone do menu (para telas menores) */}
          <div className="flex items-center md:hidden">
            <button type="button" className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400">
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
          <a href="#contato" className="rounded-md bg-white p-1 text-gray-600 hover:text-gray-500 md:block" > Entre em Contato </a>
        </div>
      </section>

      {/* Primeiro card */}
      <section className="bg-gray-100 flex justify-center items-center p-40">
        <div className="max-w-5xl">
          <h1 className=" flex justify-center text-4xl font-medium text-gray-600">
            O Sistema ERP ideal para
          </h1>
          <div className="flex justify-center gap-4 mt-10">
            <div className="my-8 w-80 max-w-xs rounded-2xl bg-white shadow-lg hover:shadow-2xl p-10">
              <div className="p-4">
                <div className="mx-auto h-24 w-24 rounded-full bg-blue-800 p-4">
                  <img className="h-full w-full object-cover" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mYWN0b3J5Ij48cGF0aCBkPSJNMiAyMGEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJWOGwtNyA1VjhsLTcgNVY0YTIgMiAwIDAgMC0yLTJINGEyIDIgMCAwIDAtMiAyWiIvPjxwYXRoIGQ9Ik0xNyAxOGgxIi8+PHBhdGggZD0iTTEyIDE4aDEiLz48cGF0aCBkPSJNNyAxOGgxIi8+PC9zdmc+"
                  alt="Imagem do Card 1" />
                </div>
                <div className="mt-4">
                  <p className="mt-2 text-center text-sm text-gray-600">
                    Segmento de
                  </p>
                  <p className="text-center text-4xl font-bold text-gray-600">
                    Industria
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8 w-80 max-w-xs rounded-2xl bg-white shadow-lg hover:shadow-2xl p-10">
              <div className="p-4">
                <div className="mx-auto h-24 w-24 rounded-full bg-blue-800 p-4">
                  <img
                    className="h-full w-full object-cover" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oZWFydC1wdWxzZSI+PHBhdGggZD0iTTE5IDE0YzEuNDktMS40NiAzLTMuMjEgMy01LjVBNS41IDUuNSAwIDAgMCAxNi41IDNjLTEuNzYgMC0zIC41LTQuNSAyLTEuNS0xLjUtMi43NC0yLTQuNS0yQTUuNSA1LjUgMCAwIDAgMiA4LjVjMCAyLjMgMS41IDQuMDUgMyA1LjVsNyA3WiIvPjxwYXRoIGQ9Ik0zLjIyIDEySDkuNWwuNS0xIDIgNC41IDItNyAxLjUgMy41aDUuMjciLz48L3N2Zz4=" alt="Imagem do Card 2"
                  />
                </div>
                <div className="mt-4">
                  <p className="mt-2 text-center text-sm text-gray-600">
                    Segmento de
                  </p>
                  <p className="text-center text-4xl font-bold text-gray-600">
                    Saúde
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8 w-80 max-w-xs rounded-2xl bg-white shadow-lg hover:shadow-2xl p-10">
              <div className="p-4">
                <div className="mx-auto h-24 w-24 rounded-full bg-blue-800 p-4">
                  <img
                    className="h-full w-full object-cover" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYWNrYWdlIj48cGF0aCBkPSJtNy41IDQuMjcgOSA1LjE1Ii8+PHBhdGggZD0iTTIxIDhhMiAyIDAgMCAwLTEtMS43M2wtNy00YTIgMiAwIDAgMC0yIDBsLTcgNEEyIDIgMCAwIDAgMyA4djhhMiAyIDAgMCAwIDEgMS43M2w3IDRhMiAyIDAgMCAwIDIgMGw3LTRBMiAyIDAgMCAwIDIxIDE2WiIvPjxwYXRoIGQ9Im0zLjMgNyA4LjcgNSA4LjctNSIvPjxwYXRoIGQ9Ik0xMiAyMlYxMiIvPjwvc3ZnPg=="
                    alt="Imagem do Card 3"
                  />
                </div>
                <div className="mt-4">
                  <p className="mt-2 text-center text-sm text-gray-600">
                    Segmento de
                  </p>
                  <p className="text-center text-4xl font-bold text-gray-600">
                    Distribuição
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda section */}
      <section className="flex items-center justify-center bg-blue-800 py-40">
        <div className="max-w-5xl w-full flex">
          <div className="w-1/3 content-center">
            <img className="w-full h-auto" src="imagens/imagem-colada.png" alt="Imagem" />
          </div>
          <div className="w-2/3 p-4">
            <h2 className="text-4xl font-medium text-white mb-2">
              Sistema de Gestão Empresarial
            </h2>
            <p className="text-base text-white">
              Escolha um sistema de gerenciamento empresarial confiável e mantenha
              seus dados seguros. Desfrute da eficiência operacional ao conectar
              todos os setores para automatizar tarefas manuais, ganhando tempo e
              aumentando a produtividade da sua equipe. Tenha à disposição previsões
              e relatórios detalhados para embasar decisões estratégicas com
              precisão. <br />
              Além disso, nossa interface intuitiva facilita a navegação e
              utilização por parte dos usuários. Conte com suporte técnico
              especializado para garantir um ambiente de trabalho fluido e livre de
              contratempos.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario de novidades */}
      <section className="p-20 flex bg-gray-100">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Cadastre seu email, receba as novidades!
          </h2>
          {/* Formulário */}
          <form action="#" method="POST">
            {/* Campo Nome */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Nome
              </label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md text-sm text-gray-800 border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Digite seu nome ou nome da empresa" required=""/>
            </div>
            {/* Campo Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md text-sm text-gray-800 border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Digite seu email" required=""/>
            </div>
            {/* Botão Enviar */}
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition duration-300">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
