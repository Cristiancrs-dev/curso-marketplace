import Link from 'next/link';
import Layout from '@/components/Layout';

// Dados da estrutura do curso (poderiam vir de um CMS ou API no futuro)
const courseStructure = {
  objetivo: "Capacitar profissionais para atuar de forma estratégica e operacional nos principais marketplaces do Brasil (Mercado Livre, Amazon, Shopee, Magalu), dominando desde os fundamentos até técnicas avançadas de gestão, vendas, marketing e integração com ERPs (Bling e Tiny).",
  niveis: [
    {
      nome: "Nível Básico: Fundamentos do E-commerce em Marketplaces",
      modulos: [
        { id: 1, nome: "Introdução aos Marketplaces" },
        { id: 2, nome: "Conhecendo as Plataformas Principais" },
        { id: 3, nome: "Primeiros Passos - Cadastro e Configuração" },
        { id: 4, nome: "Políticas e Boas Práticas Essenciais" },
        { id: 5, nome: "Introdução à Integração com ERPs" },
      ]
    },
    {
      nome: "Nível Intermediário: Operação e Otimização",
      modulos: [
        { id: 6, nome: "Cadastro de Produtos Otimizado" },
        { id: 7, nome: "Gestão de Preços e Estoque" },
        { id: 8, nome: "Logística e Envio" }, // Ajustado nome conforme apostila, estrutura_curso.md tinha 'Gestão de Pedidos e Logística'
        { id: 9, nome: "Atendimento ao Cliente e Reputação" }, // Ajustado nome conforme apostila, estrutura_curso.md tinha 'Métricas e Indicadores de Performance'
        { id: 10, nome: "Introdução à Publicidade em Marketplaces (Ads)" }, // Ajustado nome conforme apostila, estrutura_curso.md tinha 'Marketing e Publicidade em Marketplaces'
        { id: 11, nome: "Integração Intermediária com ERPs" },
      ]
    },
    {
      nome: "Nível Avançado: Estratégia e Performance",
      modulos: [
        { id: 12, nome: "Estratégias Avançadas de Precificação" },
        { id: 13, nome: "Otimização Avançada de Anúncios (Ads)" }, // Ajustado nome conforme apostila, estrutura_curso.md tinha 'Ads Avançado e Performance Marketing'
        { id: 14, nome: "SEO para Marketplaces" }, // Ajustado nome conforme apostila, estrutura_curso.md tinha 'Integração ERP Avançada e Automação'
        { id: 15, nome: "Análise de Dados e Performance" }, // Ajustado nome conforme apostila, estrutura_curso.md tinha 'Analytics, Reporting e Planejamento Estratégico'
        // Módulos 16, 17, 18 mencionados em estrutura_curso.md não possuem apostilas correspondentes no ZIP. Serão omitidos por enquanto.
      ]
    }
  ],
  materiaisComplementares: true // Indicar que existem materiais complementares
};

export default function EstruturaCursoPage() {
  return (
    <Layout>
      <section className="section">
        <div className="container mx-auto px-6">
          <h1 className="text-center mb-6">Estrutura Detalhada do Curso</h1>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            {courseStructure.objetivo}
          </p>

          {courseStructure.niveis.map((nivel, nivelIndex) => (
            <div key={nivelIndex} className="mb-16">
              <h2 className="text-center text-primary-700 mb-10">{nivel.nome}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nivel.modulos.map((modulo) => (
                  <Link key={modulo.id} href={`/modulo/${String(modulo.id).padStart(2, '0')}`} className="card block hover:bg-primary-50">
                    <h3 className="text-xl mb-2">Módulo {String(modulo.id).padStart(2, '0')}</h3>
                    <p className="text-gray-700">{modulo.nome}</p>
                    <span className="text-primary-600 mt-4 inline-block">Ver Conteúdo →</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {courseStructure.materiaisComplementares && (
            <div className="text-center mt-16 bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="mb-4">Materiais Complementares</h3>
              <p className="text-gray-700 mb-4">
                O curso também inclui checklists, guias rápidos, planilhas modelo, estudos de caso e exercícios práticos para reforçar seu aprendizado.
              </p>
              <Link href="/recursos" className="btn btn-primary">
                Acessar Recursos
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

