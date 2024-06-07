export function Interactions() {
  return (
    <>
      <section className="bg-gray-200 flex items-center justify-center py-10">
        <div className="p-4 text-justify">
          <div className="flex flex-col items-center justify-center p-2">
            <h1 className="text-xl font-bold text-gray-600">
              Interações com a TechCloud
            </h1>
            <p className="text-gray-600 text-xs">
              Descomplique seus processos e otimize sua gestão com a TechCloud.
            </p>
          </div>
          <div className="grid grid-rows-3 gap-4 mt-8 p-6">
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M9 12l2-2l-2-2M12 9l2-2l-2-2" />
                </svg>
                <div className="ml-4">
                  <h4 className="text-gray-600 text-sm font-bold">
                    +50 empresas integradas
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Simplifique a comunicação e o compartilhamento de dados.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2l-2 2M12 9l2 2l-2 2" />
                </svg>
                <div className="ml-4">
                  <h4 className="text-gray-600 text-sm font-bold">
                    2MI NFe emitidas por semana
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Aumente sua produtividade e reduza erros.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2l-2 2M12 9l2 2l-2 2" />
                </svg>
                <div className="ml-4">
                  <h4 className="text-gray-600 text-sm font-bold">
                    +30 boletos emitidos por dia
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Agilize seus processos financeiros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
