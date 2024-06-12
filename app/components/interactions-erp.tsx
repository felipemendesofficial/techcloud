export function Interactions() {
  return (
    <>
      <section className="bg-gray-200 flex items-center justify-center py-10 lg:py-20">
        <div className="px-4 max-w-5xl flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-600 sm:text-3xl lg:text-4xl">
              Interações com a TechCloud
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-xl">
              Descomplique seus processos e otimize sua gestão com a TechCloud.
            </p>
          </div>
          <div className="grid grid-rows-3 gap-4 mt-4 p-4 lg:gap-6">
            <div className="flex items-center p-4 bg-white shadow-lg hover:shadow-2xl rounded-md">
              <div className="flex items-center justify-center gap-4 lg:my-2">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2l-2 2M12 9l2 2l-2 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-600 text-sm font-bold sm:text-base">
                    +50 empresas integradas
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Simplifique a comunicação e o compartilhamento de dados.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white shadow-lg hover:shadow-2xl rounded-md">
              <div className="flex items-center justify-center gap-4 lg:my-2">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2l-2 2M12 9l2 2l-2 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-600 text-sm font-bold sm:text-base">
                    2MI NFe emitidas por semana
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Aumente sua produtividade e reduza erros.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white shadow-lg hover:shadow-2xl rounded-md">
              <div className="flex items-center justify-center gap-4 lg:my-2">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2l-2 2M12 9l2 2l-2 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-600 text-sm font-bold sm:text-base">
                    +30 boletos emitidos por dia
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
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
