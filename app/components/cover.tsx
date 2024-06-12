export function Cover() {
  return (
    <>
      <section className="relative">
        <img
          className="w-full h-auto"
          src="imagens/fundo-inicial.png"
          alt="Imagem de fundo"
        />
        <div className="absolute inset-0 mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center text-white">
          <h1 className="text-2xl font-bold leading-tight sm:text-4xl lg:text-6xl">
            Sistema Especializado em <br /> Industria, Comércio, Saúde e
            Distribuição
          </h1>
          <p className="text-sm sm:text-xl lg:text-2xl bg-slate-700 bg-opacity-50 p-2 rounded-2xl">
            Gestão para tornar o seu negócio mais lucrativo
          </p>
          <a
            href="#contato"
            className="mt-6 text-xs sm:text-lg rounded-md bg-white p-1 text-gray-600 hover:text-gray-400"
          >
            Entre em Contato
          </a>
        </div>
      </section>
    </>
  );
}
