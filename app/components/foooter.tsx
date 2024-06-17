export function Footer() {
  return (
    <>
      <section className="bg-gray-200 flex items-center justify-center p-5">
        <div className="bg-gray-800 max-w-5xl w-full rounded-lg text-justify">
          <div className="flex justify-between items-center p-4">
            <div>
              <img className="h-11" src="imagens/logo.png" alt="Logo" />
            </div>
            <div className="flex gap-2">
              <a href="#">
                <img
                  className="h-7"
                  src="https://img.icons8.com/?size=100&id=16712&format=png&color=FFFFFF"
                  alt="Logo WhatsApp"
                />
              </a>
              <a href="https://www.instagram.com/techcloud_solutions_/">
                <img
                  className="h-7"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbnN0YWdyYW0iPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMiIgeT0iMiIgcng9IjUiIHJ5PSI1Ii8+PHBhdGggZD0iTTE2IDExLjM3QTQgNCAwIDEgMSAxMi42MyA4IDQgNCAwIDAgMSAxNiAxMS4zN3oiLz48bGluZSB4MT0iMTcuNSIgeDI9IjE3LjUxIiB5MT0iNi41IiB5Mj0iNi41Ii8+PC9zdmc+"
                  alt="Logo Instagram"
                />
              </a>
              <a href="#">
                <img
                  className="h-7"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mYWNlYm9vayI+PHBhdGggZD0iTTE4IDJoLTNhNSA1IDAgMCAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAgMSAxLTFoM3oiLz48L3N2Zz4="
                  alt="Logo Facebook"
                />
              </a>
              <a href="#">
                <img
                  className="h-7"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS15b3V0dWJlIj48cGF0aCBkPSJNMi41IDE3YTI0LjEyIDI0LjEyIDAgMCAxIDAtMTAgMiAyIDAgMCAxIDEuNC0xLjQgNDkuNTYgNDkuNTYgMCAwIDEgMTYuMiAwQTIgMiAwIDAgMSAyMS41IDdhMjQuMTIgMjQuMTIgMCAwIDEgMCAxMCAyIDIgMCAwIDEtMS40IDEuNCA0OS41NSA0OS41NSAwIDAgMS0xNi4yIDBBMiAyIDAgMCAxIDIuNSAxNyIvPjxwYXRoIGQ9Im0xMCAxNSA1LTMtNS0zeiIvPjwvc3ZnPg=="
                  alt="Logo YouTube"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center p-2">
            <div className="grid grid-row-3 max-x-7xl gap-4 mb-10 p-2 text-xs sm:grid-cols-3 md:text-base">
              <div className="flex flex-col">
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
              <div className="flex flex-col">
                <div className="text-white font-bold">
                  <h1>Produtos</h1>
                </div>
                <div className="text-gray-400">
                  <p className="hover:text-gray-300">Sistema para Indústria</p>
                  <p className="hover:text-gray-300">
                    Sistema para Distribuição
                  </p>
                  <p className="hover:text-gray-300">Sistema para Saúde</p>
                  <p className="hover:text-gray-300">App Força de Vendas</p>
                  <p className="hover:text-gray-300">App de Entregas</p>
                </div>
              </div>
              <div className="flex flex-col">
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
          </div>

          <div className="m-3 border-t-2 border-gray-400 p-4">
            <div className="flex flex-col items-center justify-center text-gray-400 gap-4 text-xs md:text-base">
              <p>Mendes Informática Ltda. | 96.841.671/0001-54</p>
              <p className="hover:text-gray-300">
                Todos os direitos reservados
              </p>
              <p className="mt-5">
                Desenvolvido por{" "}
                <a href="#" className="hover:text-white">
                  Felipe Mendes
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
