export function ERP() {
  return (
    <>
      <section className="bg-blue-800 flex items-center justify-center py-20 lg:py-40">
        <div className="flex flex-col justify-center items-center max-w-5xl px-4 lg:flex-row">
          <div className="max-w-md p-4">
            <img
              className="w-full h-auto"
              src="imagens/imagem-colada.png"
              alt="Imagem"
            />
          </div>
          <div className="max-w-md flex flex-col gap-2 bg-slate-700 bg-opacity-40 rounded-xl p-2">
            <h2 className="text-2xl font-medium text-white lg:text-3xl">
              Sistema de Gestão Empresarial
            </h2>
            <p className="text-lg text-justify text-white">
              Escolha um sistema de gerenciamento empresarial confiável e
              mantenha seus dados seguros. Desfrute da eficiência operacional ao
              conectar todos os setores para automatizar tarefas manuais,
              ganhando tempo e aumentando a produtividade da sua equipe. Tenha à
              disposição previsões e relatórios detalhados para embasar decisões
              estratégicas com precisão. <br />
              Além disso, nossa interface intuitiva facilita a navegação e
              utilização por parte dos usuários. Conte com suporte técnico
              especializado para garantir um ambiente de trabalho fluido e livre
              de contratempos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
