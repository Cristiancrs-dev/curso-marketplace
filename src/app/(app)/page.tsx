import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-500 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">Domine os Marketplaces: Torne-se um Analista Profissional</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Curso completo do básico ao avançado para operar com sucesso no Mercado Livre, Amazon, Shopee, Magalu e integrar com Bling/Tiny.
          </p>
          <Link href="/estrutura-do-curso" className="btn btn-secondary text-lg">
            Explore o Conteúdo Completo
          </Link>
          {/* Placeholder for Banner Image - Will use the downloaded one */}
          <div className="mt-12">
            <Image 
              src="/images/homepage_banner.jpeg" 
              alt="Banner do Curso Analista de Marketplaces" 
              width={800} 
              height={400} 
              className="rounded-lg shadow-premium mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Para Quem é Este Curso? Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12">Para Quem é Este Curso?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="mb-3">Empreendedores</h3>
              <p>Donos de negócios que desejam expandir suas vendas para os maiores marketplaces do Brasil.</p>
            </div>
            <div className="card text-center">
              <h3 className="mb-3">Profissionais de E-commerce</h3>
              <p>Analistas, gestores e assistentes que buscam especialização em marketplaces.</p>
            </div>
            <div className="card text-center">
              <h3 className="mb-3">Iniciantes na Área</h3>
              <p>Pessoas que querem iniciar uma carreira promissora como Analista de Marketplaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Vai Aprender? Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12">O Que Você Vai Aprender?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start"><span className="text-primary-600 mr-2">✔</span> Dominar as principais plataformas: Mercado Livre, Amazon, Shopee e Magalu.</li>
                <li className="flex items-start"><span className="text-primary-600 mr-2">✔</span> Criar anúncios otimizados que vendem mais.</li>
                <li className="flex items-start"><span className="text-primary-600 mr-2">✔</span> Gerenciar preços, estoque e logística de forma eficiente.</li>
                <li className="flex items-start"><span className="text-primary-600 mr-2">✔</span> Utilizar estratégias de publicidade (Ads) para alavancar vendas.</li>
                <li className="flex items-start"><span className="text-primary-600 mr-2">✔</span> Integrar sua operação com ERPs (Bling e Tiny).</li>
                <li className="flex items-start"><span className="text-primary-600 mr-2">✔</span> Analisar dados e tomar decisões estratégicas para crescer.</li>
                <li className="flex items-start"><span className="text-primary-600 mr-2">✔</span> Oferecer atendimento de excelência e gerenciar reputação.</li>
              </ul>
            </div>
            <div>
              <Image 
                src="/images/online_store_illustration.jpeg" 
                alt="Ilustração de aprendizado em e-commerce" 
                width={500} 
                height={500} 
                className="rounded-lg shadow-premium mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura do Curso Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-12">Estrutura Completa do Curso</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">Organizado em níveis progressivos para garantir seu aprendizado sólido, do básico ao avançado.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-primary-700 mb-3">Nível Básico</h3>
              <p>Fundamentos essenciais, cadastro nas plataformas, políticas e introdução à integração ERP.</p>
            </div>
            <div className="card">
              <h3 className="text-primary-700 mb-3">Nível Intermediário</h3>
              <p>Otimização de anúncios, gestão de preços, estoque, logística, atendimento e introdução a Ads.</p>
            </div>
            <div className="card">
              <h3 className="text-primary-700 mb-3">Nível Avançado</h3>
              <p>Estratégias de precificação, Ads avançado, SEO, análise de dados, automação e crescimento.</p>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/estrutura-do-curso" className="btn btn-primary">
              Ver Estrutura Detalhada
            </Link>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12">Diferenciais do Curso</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-4">
              {/* Placeholder for Icon */}
              <div className="text-4xl text-secondary-500 mb-3">💡</div> 
              <h4 className="mb-2">Conteúdo Atualizado</h4>
              <p>Material revisado e alinhado com as últimas práticas do mercado.</p>
            </div>
            <div className="text-center p-4">
              {/* Placeholder for Icon */}
              <div className="text-4xl text-secondary-500 mb-3">🎯</div> 
              <h4 className="mb-2">Foco Prático</h4>
              <p>Apostilas detalhadas, exemplos reais e materiais complementares aplicáveis.</p>
            </div>
            <div className="text-center p-4">
              {/* Placeholder for Icon */}
              <div className="text-4xl text-secondary-500 mb-3">📊</div> 
              <h4 className="mb-2">Plataformas Relevantes</h4>
              <p>Cobertura dos maiores players: Mercado Livre, Amazon, Shopee e Magalu.</p>
            </div>
            <div className="text-center p-4">
              {/* Placeholder for Icon */}
              <div className="text-4xl text-secondary-500 mb-3">⚙️</div> 
              <h4 className="mb-2">Integração ERP</h4>
              <p>Módulos dedicados à integração com Bling e Tiny para otimizar a gestão.</p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}

