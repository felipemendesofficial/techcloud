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
          <a href="#contato" className="rounded-md bg-white p-1 text-gray-600 hover:text-gray-400 md:block" > Entre em Contato </a>
        </div>
      </section>

      {/* Primeiro card */}
      <section className="bg-gray-200 flex items-center justify-center py-40">
        <div className="max-w-5xl px-4">
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
      <section className="bg-blue-800 flex items-center justify-center py-40">
        <div className="max-w-5xl w-full flex px-4">
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

      {/* Terceira section */}
      <section className="bg-gray-200 flex items-center justify-center py-20">
        <div className="max-w-7xl p-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-600 leading-tight tracking-wide margin-10">Interações com a TechCloud</h1>
            <p className="text-gray-600 text-base">Descomplique seus processos e otimize sua gestão com a TechCloud.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M9 12l2-2l-2-2M12 9l2-2l-2-2" />
                </svg>
                <div className="ml-4">
                  <h4 className="text-gray-600 text-lg">+50 empresas integradas</h4>
                  <p className="text-gray-600 text-sm">Simplifique a comunicação e o compartilhamento de dados.</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M9 12l2 2l-2 2M12 9l2 2l-2 2" />
                </svg>
                <div className="ml-4">
                  <h4 className="text-gray-600 text-lg">2MI NFe emitidas por semana</h4>
                  <p className="text-gray-600 text-sm">Aumente sua produtividade e reduza erros.</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M9 12l2 2l-2 2M12 9l2 2l-2 2" />
                </svg>
                <div className="ml-4">
                  <h4 className="text-gray-600 text-lg">+30 boletos emitidos por dia</h4>
                  <p className="text-gray-600 text-sm">Agilize seus processos financeiros.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card clientes */}
      <section className="bg-blue-800 flex items-center justify-center py-40">
        <div className="max-w-7xl p-4">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold text-white">Mais de 50 clientes ja transformaram sua gestão com nossas soluções</h1>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
                <div className="flex justify-center items-center h-full w-auto p-1">
                  <img src="https://www.telhasnordeste.com.br/imagens/logo-telhas-nordeste.png" alt="Telhas Nordeste" />
                </div>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex justify-center items-center h-full w-auto p-1">
                  <img src="http://www.adinor.com.br/imagens/logo-adinor-oficial.png" alt="Telhas Nordeste" />
              </div>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex justify-center items-center h-full w-auto p-1">
                  <img src="https://www.vittacroc.com.br/wp-content/uploads/2018/01/marca-vittacroc.png" alt="Telhas Nordeste" />
              </div>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex justify-center items-center h-full w-auto p-1">
                  <img src="http://www.carballofaroimport.com.br/ws/media-library/ac121b05d18247809d5a4f7038146364/carballo_faro.png" alt="Telhas Nordeste" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de novidades */}
      <section className="bg-gray-200 flex items-center justify-center py-20">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-600 mb-6">
            Cadastre seu email, receba as novidades!
          </h2>
          {/* Formulário */}
          <form action="#" method="POST">
            {/* Campo Nome */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Nome
              </label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md text-sm text-gray-600 border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Digite seu nome ou nome da empresa" required=""/>
            </div>
            {/* Campo Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md text-sm text-gray-600 border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Digite seu email" required=""/>
            </div>
            {/* Botão Enviar */}
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition duration-300">
              Enviar
            </button>
          </form>
        </div>
      </section>

      <div className="bg-blue-800">
        <h1 className="p-20">Espaco</h1>
      </div>

      {/* Footer */}
      <section className="bg-gray-200 flex items-center justify-center p-20">
        <div className="bg-gray-800 max-w-5xl w-full rounded-xl">
          <div className="flex justify-between items-center p-4">
            <div>
              <img className="h-11" src="imagens/logo.png" alt="Logo" />
            </div>
            <div className="flex gap-2">
              <a href="#">
                <img className="h-7" src="https://img.icons8.com/?size=100&id=16712&format=png&color=FFFFFF" alt="Logo WhatsApp" />
              </a>
              <a href="https://www.instagram.com/techcloud_solutions_/">
                <img className="h-7" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbnN0YWdyYW0iPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMiIgeT0iMiIgcng9IjUiIHJ5PSI1Ii8+PHBhdGggZD0iTTE2IDExLjM3QTQgNCAwIDEgMSAxMi42MyA4IDQgNCAwIDAgMSAxNiAxMS4zN3oiLz48bGluZSB4MT0iMTcuNSIgeDI9IjE3LjUxIiB5MT0iNi41IiB5Mj0iNi41Ii8+PC9zdmc+" alt="Logo Instagram" />
              </a>
              <a href="#">
                <img className="h-7" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mYWNlYm9vayI+PHBhdGggZD0iTTE4IDJoLTNhNSA1IDAgMCAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAgMSAxLTFoM3oiLz48L3N2Zz4=" alt="Logo Facebook" />
              </a>
              <a href="#">
                <img className="h-7" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS15b3V0dWJlIj48cGF0aCBkPSJNMi41IDE3YTI0LjEyIDI0LjEyIDAgMCAxIDAtMTAgMiAyIDAgMCAxIDEuNC0xLjQgNDkuNTYgNDkuNTYgMCAwIDEgMTYuMiAwQTIgMiAwIDAgMSAyMS41IDdhMjQuMTIgMjQuMTIgMCAwIDEgMCAxMCAyIDIgMCAwIDEtMS40IDEuNCA0OS41NSA0OS41NSAwIDAgMS0xNi4yIDBBMiAyIDAgMCAxIDIuNSAxNyIvPjxwYXRoIGQ9Im0xMCAxNSA1LTMtNS0zeiIvPjwvc3ZnPg==" alt="Logo YouTube" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 mx-24 mt-5 mb-16">
            <div>
              <div className="text-white font-bold">
                <h1>Institucional</h1>
              </div>
              <div className="text-gray-400">
                <p className="hover:text-gray-300">Empresa</p>
                <p className="hover:text-gray-300">Clientes</p>
                <p className="hover:text-gray-300">Blog</p>
                <p className="hover:text-gray-300">Fale Conosco</p>
              </div>
            </div> 
            <div>
              <div className="text-white font-bold">
                <h1>Produtos</h1>
              </div>
              <div className="text-gray-400">
                <p className="hover:text-gray-300">Sistema para Indústria</p>
                <p className="hover:text-gray-300">Sistema para Distribuição</p>
                <p className="hover:text-gray-300">Sistema para Saúde</p>
                <p className="hover:text-gray-300">App Força de Vendas</p>
                <p className="hover:text-gray-300">App de Entregas</p>
              </div>
            </div>
            <div>
              <div className="text-white font-bold">
                <h1>Atendimento</h1>
              </div>
              <div className="text-gray-400">
                <p className="text-white font-bold">+55 (75) 9-8802-0728</p>
                <p className="hover:text-gray-300">Área do Cliente</p>
                <p className="hover:text-gray-300">Poítica de Privacidade</p>
                <p>De segunda a sexta das 8:00 ás 11:30 e 14:00 ás 17:30</p>
              </div>
            </div>
          </div>
          
          <div className="m-3 border-t-2 border-gray-400 p-4">
            <div className="flex flex-col items-center justify-center text-gray-400 gap-2">
              <p>Mendes Informática Ltda. | 96.841.671/0001-54</p>
              <p className="hover:text-gray-300">Todos os direitos reservados</p>
              <p className="mt-10">Desenvolvido por <a href="#" className="hover:text-white">Felipe Mendes</a></p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
