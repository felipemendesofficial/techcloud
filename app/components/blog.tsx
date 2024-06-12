export function Blog() {
  return (
    <>
      <section className="bg-blue-800 flex items-center justify-center py-20">
        <div className="max-w-7xl p-4">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold text-white">Blog</h1>
          </div>
          <div className="grid grid-rows-4 gap-4 mt-8">
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex flex-col items-center h-full w-auto p-1 gap-2">
                <div className="flex justify-center items-center h-40 w-60">
                  <img
                    className="w-full h-auto rounded-lg"
                    src="https://www.sofis.com.br/wp-content/uploads/2015/10/04-1.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1 text-gray-600">
                  <h1 className="text-xl font-bold">Introdução</h1>
                  <p className="text-justify">
                    Bem-vindo ao nosso blog sobre Empresas ERP! Aqui,
                    exploraremos o mundo dos sistemas de Planejamento de
                    Recursos Empresariais (ERP) e como eles transformam a gestão
                    empresarial moderna. Os ERPs são ferramentas essenciais para
                    qualquer organização que deseja integrar e automatizar seus
                    processos de negócios, aumentando a eficiência e a
                    competitividade. Vamos mergulhar nesse universo e descobrir
                    tudo o que você precisa saber sobre ERPs.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex flex-col items-center h-full w-auto p-1 gap-2">
                <div className="flex justify-center items-center h-40 w-60">
                  <img
                    className="w-full h-auto rounded-lg"
                    src="https://blog.asaas.com/wp-content/uploads/2022/01/ERP-1024x576.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1 text-gray-600">
                  <h1 className="text-xl font-bold">O que é um ERP?</h1>
                  <p className="text-justify">
                    Um ERP, ou Enterprise Resource Planning, é um sistema de
                    software que integra todas as facetas de uma operação
                    empresarial, incluindo planejamento, desenvolvimento,
                    fabricação, vendas e marketing. A principal característica
                    de um ERP é sua capacidade de proporcionar uma visão
                    integrada dos processos empresariais, facilitando a tomada
                    de decisões informadas e estratégicas.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex flex-col items-center h-full w-auto p-1 gap-2">
                <div className="flex justify-center items-center h-40 w-60">
                  <img
                    className="w-full h-auto rounded-lg"
                    src="https://media.licdn.com/dms/image/D4E12AQHkLZeWzZVHhw/article-cover_image-shrink_720_1280/0/1702998715115?e=2147483647&v=beta&t=3gqfB--1g1e3wBUGCiwH6WqzHQGD8KsFUd-X_2ijNfM"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1 text-gray-600">
                  <h1 className="text-xl font-bold">Implementção de ERP</h1>
                  <h2 className="text-lg font-medium">Planejamento</h2>
                  <p className="text-justify">
                    A fase de planejamento é crucial para o sucesso da
                    implementação de um ERP. Envolve a definição de objetivos, a
                    seleção do sistema adequado e o desenvolvimento de um plano
                    detalhado de implementação.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg hover:shadow-2xl rounded-md p-4">
              <div className="flex flex-col items-center h-full w-auto p-1 gap-2">
                <div className="flex justify-center items-center h-40 w-60">
                  <img
                    className="w-full h-auto rounded-lg"
                    src="https://fia.com.br/wp-content/uploads/2019/02/computacao-em-nuvem-conclusao.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1 text-gray-600">
                  <h1 className="text-xl font-bold">
                    Tendêcias e Inovaçẽs em ERP
                  </h1>
                  <h2 className="text-lg font-medium">Computação em nuvem</h2>
                  <p className="text-justify">
                    Os ERPs baseados em nuvem oferecem maior flexibilidade,
                    escalabilidade e redução de custos com infraestrutura.
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
