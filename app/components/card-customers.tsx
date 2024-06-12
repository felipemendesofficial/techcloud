export function Customers() {
  return (
    <>
      <section className="bg-blue-800 flex items-center justify-center py-10">
        <div className="p-4">
          <div className="flex justify-center items-center">
            <h1 className="text-xl font-bold text-white text-justify">
              Mais de 50 clientes ja transformaram sua gestão com nossas
              soluções
            </h1>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 max-x-5xl lg:grid-cols-4 gap-4 mt-10">
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <a
                href="https://www.telhasnordeste.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex justify-center items-center h-full w-auto p-1">
                  <img
                    src="https://www.telhasnordeste.com.br/imagens/logo-telhas-nordeste.png"
                    alt="Empresa Telhas Nordeste"
                  />
                </div>
              </a>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <a
                href="http://www.adinor.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex justify-center items-center h-full w-auto p-1">
                  <img
                    src="http://www.adinor.com.br/imagens/logo-adinor-oficial.png"
                    alt="Empresa Adinor"
                  />
                </div>
              </a>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <a
                href="https://www.vittacroc.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex justify-center items-center h-full w-auto p-1">
                  <img
                    src="https://www.vittacroc.com.br/wp-content/uploads/2018/01/marca-vittacroc.png"
                    alt="Empresa Vitta Croc"
                  />
                </div>
              </a>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <a
                href="http://www.carballofaroimport.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex justify-center items-center h-full w-auto p-1">
                  <img
                    src="http://www.carballofaroimport.com.br/ws/media-library/ac121b05d18247809d5a4f7038146364/carballo_faro.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
