# Apostila - Módulo 13: Ads Avançado e Performance Marketing

**Nível:** Avançado

**Objetivo:** Aprofundar o conhecimento sobre as plataformas de Ads dos marketplaces, explorando estratégias avançadas de otimização de campanhas, análise de funil, modelos de atribuição, estratégias de lances e o conceito de performance marketing aplicado a marketplaces.

---

## Aula 13.1: Performance Marketing em Marketplaces

Performance Marketing é uma abordagem de marketing digital focada em **resultados mensuráveis** e **ações específicas** do usuário (cliques, leads, vendas). Em marketplaces, isso se traduz em usar dados e otimizações constantes para maximizar o retorno sobre o investimento (ROAS/ACoS) das campanhas de publicidade e outras ações de marketing.

### Princípios do Performance Marketing:

*   **Foco em Dados:** Decisões baseadas em métricas e KPIs (Impressões, Cliques, CTR, CVR, CPC, CPA, ACoS, ROAS, LTV).
*   **Mensurabilidade:** Capacidade de rastrear e medir o impacto de cada ação de marketing.
*   **Otimização Contínua:** Testar, analisar e ajustar campanhas constantemente para melhorar os resultados.
*   **Foco em ROI:** O objetivo final é gerar um retorno positivo sobre o investimento.
*   **Segmentação:** Direcionar anúncios e ofertas para públicos específicos com maior probabilidade de conversão.

### Aplicando ao Contexto de Marketplaces:

*   **Ads como Principal Ferramenta:** As plataformas de Ads (Mercado Ads, Amazon Advertising, etc.) são as principais ferramentas de performance marketing dentro dos marketplaces.
*   **Objetivo Principal:** Geralmente, gerar vendas diretas com um custo por aquisição (CPA) ou ACoS/ROAS que garanta a lucratividade.
*   **Ciclo de Otimização:**
    1.  **Planejar:** Definir objetivos (vendas, ROAS), orçamento, público-alvo, produtos a promover.
    2.  **Executar:** Criar e lançar campanhas de Ads (escolher tipo, segmentação, lances).
    3.  **Medir:** Coletar dados de performance (impressões, cliques, custos, vendas, receita).
    4.  **Analisar:** Calcular KPIs (CTR, CVR, CPC, ACoS, ROAS), identificar o que funciona e o que não funciona (quais palavras-chave, anúncios, segmentações geram mais retorno).
    5.  **Otimizar:** Ajustar lances, pausar elementos de baixo desempenho, refinar segmentação, testar novos criativos/palavras-chave.
    6.  **Repetir:** O ciclo é contínuo.

*[IMAGEM: Ciclo de Performance Marketing: Planejar -> Executar -> Medir -> Analisar -> Otimizar, com setas indicando a natureza contínua.]*

### Desafios em Marketplaces:

*   **Dados Limitados:** Marketplaces nem sempre fornecem todos os dados desejados (Ex: dados demográficos detalhados, jornada completa do cliente).
*   **Atribuição:** Modelos de atribuição podem variar entre plataformas e nem sempre capturam toda a complexidade da jornada.
*   **Controle Limitado:** Menos controle sobre a experiência do usuário e o ambiente da plataforma comparado a um site próprio.

---

## Aula 13.2: Estrutura Avançada de Campanhas de Ads

Uma estrutura de campanha bem organizada é crucial para gerenciar orçamentos, otimizar lances e analisar resultados de forma eficaz.

### Princípios de Estruturação:

*   **Granularidade:** Separar campanhas e grupos de anúncios de forma lógica para permitir controle e análise específicos.
*   **Nomenclatura Clara:** Usar nomes padronizados para campanhas e grupos de anúncios que indiquem o objetivo, tipo de produto, estratégia, etc. (Ex: "SP - Automatica - Categoria X", "SB - Manual - PalavraChave Marca - TopoBusca", "SD - Remarketing - Visitantes Produto Y").
*   **Agrupamento Lógico:** Agrupar produtos ou palavras-chave com características ou objetivos similares.

### Modelos Comuns de Estruturação (Exemplos na Amazon Ads, adaptáveis a outras):

1.  **Estrutura por Tipo de Produto/Categoria:**
    *   **Campanhas:** Uma campanha por linha de produto ou categoria principal (Ex: "SP - Smartphones", "SP - Acessórios Celular").
    *   **Grupos de Anúncios:** Dentro de cada campanha, grupos por subcategoria ou marca (Ex: Dentro de "SP - Smartphones": "GA - Samsung", "GA - Apple", "GA - Motorola").
    *   **Prós:** Fácil de gerenciar orçamento por categoria.
    *   **Contras:** Pode misturar produtos com margens ou performance muito diferentes no mesmo grupo.
2.  **Estrutura por Estratégia/Funil:**
    *   **Campanhas:** Separar por objetivo (Ex: "SP - Pesquisa KW [Descoberta]", "SP - Performance KW [Otimizada]", "SP - Product Targeting [Concorrentes]").
    *   **Grupos de Anúncios:** Agrupar palavras-chave ou ASINs com base na intenção (Ex: Dentro de "SP - Pesquisa KW": "GA - Termos Genéricos", "GA - Termos Long Tail").
    *   **Prós:** Permite aplicar estratégias de lances e orçamentos diferentes para cada etapa do funil.
    *   **Contras:** Requer maior entendimento do funil e da jornada do cliente.
3.  **Estrutura por Performance (Tiered Structure):**
    *   **Campanha Automática (Catch-All):** Uma campanha automática com lance baixo para capturar novos termos de busca e ASINs.
    *   **Campanha Manual (Pesquisa/Broad):** Migrar termos de bom desempenho da automática para cá, usando correspondência ampla/frase com lances moderados.
    *   **Campanha Manual (Performance/Exact):** Migrar termos de *excelente* desempenho (alto volume, bom ROAS) para cá, usando correspondência exata com lances mais agressivos.
    *   **Campanha Manual (Product Targeting):** Para segmentar ASINs específicos (concorrentes, complementares).
    *   **Negativação Cruzada:** Essencial negativar os termos exatos na campanha Broad/Automática e os termos Broad na campanha Automática para direcionar o tráfego corretamente.
    *   **Prós:** Controle granular sobre lances e orçamento para termos de diferentes níveis de performance.
    *   **Contras:** Mais complexa de configurar e gerenciar.

*[IMAGEM: Diagrama visual da Estrutura por Performance (Tiered Structure), mostrando o fluxo de palavras-chave da Automática -> Broad -> Exact e a negativação cruzada.]*

### Adaptação para Outras Plataformas:

*   **Mercado Ads:** A estrutura tende a ser mais simples, geralmente por campanha de Product Ads, mas a lógica de agrupar produtos similares ou com objetivos comuns ainda se aplica.
*   **Shopee Ads:** Separar campanhas de Busca de Produto, Busca de Loja e Descoberta. Dentro de Busca de Produto, pode-se agrupar por similaridade de produto ou performance.

**Recomendação:** Comece com uma estrutura mais simples (por categoria) e evolua para estruturas mais granulares (por performance) conforme ganha experiência e volume de dados.

---

## Aula 13.3: Estratégias Avançadas de Lances (Bidding)

Definir o lance correto é crucial para a rentabilidade e visibilidade das campanhas. As plataformas oferecem diferentes estratégias de lances automáticos e manuais.

### Tipos de Lances:

*   **CPC (Custo por Clique):** Modelo mais comum em anúncios de busca e descoberta. Você paga cada vez que alguém clica no seu anúncio.
*   **CPM (Custo por Mil Impressões):** Comum em anúncios de display ou vídeo (Brand Ads, Sponsored Display). Você paga a cada mil vezes que seu anúncio é exibido.
*   **vCPM (Custo por Mil Impressões Visíveis):** Variação do CPM onde você paga apenas quando o anúncio é efetivamente visível na tela do usuário.

### Estratégias de Lances na Amazon Ads (Exemplos):

1.  **Lances Dinâmicos - Apenas Reduzir (Dynamic bids - down only):**
    *   A Amazon reduzirá seus lances em tempo real para leilões onde a probabilidade de conversão é menor. Nunca aumentará o lance.
    *   **Quando usar:** Para proteger o orçamento, garantir que você não pague caro por cliques de baixa qualidade. Mais conservador.
2.  **Lances Dinâmicos - Aumentar e Reduzir (Dynamic bids - up and down):**
    *   A Amazon pode aumentar seus lances (até 100% no topo da busca, até 50% em outros posicionamentos) para leilões com maior probabilidade de conversão, e reduzir para os de menor probabilidade.
    *   **Quando usar:** Para maximizar as conversões, permitindo que a Amazon seja mais agressiva quando identificar boas oportunidades. Requer confiança no algoritmo.
3.  **Lances Fixos (Fixed bids):**
    *   A Amazon usará seu lance exato em todos os leilões, sem ajustes dinâmicos.
    *   **Quando usar:** Para ter controle total sobre o lance máximo, útil para testes ou quando você tem dados muito precisos sobre o lance ideal.

### Ajustes de Lances por Posicionamento (Amazon Ads):

*   Permite aumentar o lance percentualmente para disputar posições específicas:
    *   **Topo da Busca (Primeira Página):** Posições mais valiosas, geralmente com maior CTR e conversão.
    *   **Páginas de Produto:** Para aparecer como alternativa em páginas de concorrentes ou produtos relacionados.
*   **Estratégia:** Aumentar o lance para o Topo da Busca (Ex: +50%) se a análise mostrar que essas posições geram um bom ROAS para você, mesmo com CPC mais alto.

### Estratégias de Lances Baseadas em Metas (Ex: ROAS/ACoS):

*   **Mercado Ads (ROAS Desejado):** Você define uma meta de ROAS e o Mercado Ads ajusta os lances automaticamente para tentar atingi-la.
*   **Shopee Ads (ROAS Desejado):** Similar ao Mercado Ads.
*   **Amazon Ads (Otimização baseada em conversão - requer histórico):** As estratégias dinâmicas já tentam otimizar a conversão, mas não há um "ROAS alvo" direto como nas outras plataformas (ainda).
*   **Cálculo Manual do Lance Ideal (Baseado no ACoS):**
    *   `Lance Máximo CPC = Preço Médio de Venda * Taxa de Conversão Histórica * ACoS Meta`
    *   *Exemplo:* Produto de R$ 100, CVR de 10%, ACoS Meta de 20% -> Lance Máx CPC = 100 * 0.10 * 0.20 = R$ 2,00.
    *   Use como referência para seus lances manuais ou fixos.

*[IMAGEM: Captura de tela das opções de estratégia de lances na Amazon Ads (Down only, Up and Down, Fixed).]*
*[IMAGEM: Captura de tela da configuração de ajuste de lances por posicionamento na Amazon Ads.]*

### Teste e Otimização:

*   Não existe "melhor estratégia de lance" universal. Depende do seu objetivo, margem, produto e concorrência.
*   Teste diferentes estratégias em campanhas separadas (Teste A/B) e compare os resultados (volume de vendas, ACoS/ROAS).
*   Monitore o impacto das mudanças de lance na posição do anúncio, impressões, cliques e, principalmente, na rentabilidade.

---

## Aula 13.4: Análise de Funil e Modelos de Atribuição

Entender como os clientes interagem com seus anúncios ao longo da jornada de compra e como as vendas são atribuídas às campanhas é crucial para otimizações avançadas.

### O Funil de Marketing em Marketplaces (Simplificado):

1.  **Topo do Funil (Awareness/Descoberta):**
    *   **Objetivo:** Tornar o cliente ciente da sua marca ou produto.
    *   **Métricas:** Impressões, Alcance.
    *   **Táticas:** Sponsored Brands, Sponsored Display (segmentação por interesse), Ads de Busca da Loja (Shopee).
2.  **Meio do Funil (Consideração/Interesse):**
    *   **Objetivo:** Fazer o cliente clicar no seu anúncio e considerar seu produto.
    *   **Métricas:** Cliques, CTR, Visitas à página do produto.
    *   **Táticas:** Sponsored Products (termos mais genéricos), Ads de Descoberta (Shopee), anúncios em páginas de categoria.
3.  **Fundo do Funil (Conversão/Compra):**
    *   **Objetivo:** Converter o visitante em comprador.
    *   **Métricas:** Taxa de Conversão (CVR), Vendas, Pedidos, ACoS, ROAS.
    *   **Táticas:** Sponsored Products (termos exatos, marca, ASIN targeting em concorrentes), Remarketing (Sponsored Display).

*[IMAGEM: Diagrama do Funil de Marketing (Topo, Meio, Fundo) com as métricas e táticas de Ads correspondentes em cada etapa.]*

### Modelos de Atribuição:

Atribuição é o processo de creditar uma venda a um ou mais pontos de contato de marketing que influenciaram a decisão de compra. Marketplaces geralmente usam modelos de **último clique**.

*   **Atribuição de Último Clique (Last Click):**
    *   **Como funciona:** 100% do crédito da venda é atribuído ao *último* anúncio clicado pelo cliente antes da compra, dentro de uma janela de tempo definida (Ex: 7, 14 ou 30 dias).
    *   **Plataformas:** É o modelo padrão na maioria das plataformas de Ads de marketplace (Amazon, Mercado Livre, Shopee).
    *   **Prós:** Simples de entender e medir.
    *   **Contras:** Ignora o impacto de outros anúncios (topo/meio do funil) que o cliente pode ter visto ou clicado *antes* do último clique. Pode supervalorizar campanhas de fundo de funil e subvalorizar campanhas de awareness ou consideração.

*   **Outros Modelos (Menos Comuns em Marketplaces):**
    *   **Primeiro Clique:** Credita a venda ao primeiro anúncio clicado.
    *   **Linear:** Distribui o crédito igualmente entre todos os cliques.
    *   **Baseado em Posição:** Dá mais crédito ao primeiro e último clique.
    *   **Decaimento Temporal:** Dá mais crédito aos cliques mais próximos da conversão.

### Implicações da Atribuição de Último Clique:

*   **Análise de Campanhas de Topo/Meio de Funil:** Campanhas de Sponsored Brands ou Sponsored Display podem ter um ROAS/ACoS aparentemente baixo no relatório padrão, pois elas podem não ser o *último* clique, mas ainda assim influenciaram a jornada.
*   **Métricas Assistidas (Quando Disponíveis):** Algumas plataformas (como Amazon Ads, em relatórios mais avançados ou APIs) podem começar a oferecer métricas de conversão assistida, mostrando quais campanhas participaram da jornada, mesmo não sendo o último clique.
*   **Visão Holística:** É importante analisar não apenas o ROAS/ACoS direto (last click), mas também métricas de topo/meio de funil (impressões, cliques, CTR) e o impacto geral nas vendas totais da conta (vendas orgânicas + vendas de Ads) ao avaliar campanhas de awareness ou consideração.

*[IMAGEM: Comparativo visual: Último Clique (100% no último Ad) vs. Linear (25% em cada um dos 4 Ads clicados).]*

### Janela de Atribuição:

*   Período após o clique no anúncio durante o qual uma venda pode ser creditada a esse clique.
*   **Variações:** 7 dias (Sponsored Products Amazon), 14 dias (Sponsored Brands Amazon), 30 dias (Mercado Ads). Verifique a documentação de cada plataforma.
*   **Impacto:** Janelas mais longas podem atribuir mais vendas aos anúncios, mas a influência do clique pode ser menor quanto mais distante da compra.

---

## Aula 13.5: Otimização Avançada de Palavras-Chave e Negativação

Gerenciar palavras-chave de forma eficaz é fundamental para o sucesso das campanhas de busca paga.

### Tipos de Correspondência de Palavras-Chave (Revisão):

*   **Ampla (Broad):** Alcance máximo. Seu anúncio pode aparecer para pesquisas que incluem sinônimos, variações ou termos relacionados (Ex: Palavra "tênis corrida" -> Busca "calçado para correr", "sapato esporte").
*   **Frase (Phrase):** Alcance intermediário. Seu anúncio aparece para pesquisas que incluem a frase exata, com possíveis palavras antes ou depois (Ex: Palavra "tênis corrida azul" -> Busca "comprar tênis corrida azul tamanho 40", "tênis corrida azul feminino").
*   **Exata (Exact):** Alcance restrito. Seu anúncio aparece apenas para pesquisas que correspondem exatamente à palavra-chave ou variações muito próximas (plural, erro de digitação) (Ex: Palavra "tênis corrida azul" -> Busca "tênis corrida azul").

### Estratégia de Mineração de Palavras-Chave (Keyword Harvesting):

1.  **Campanha Automática/Ampla (Descoberta):**
    *   Use campanhas automáticas (Amazon) ou campanhas manuais com palavras-chave de correspondência ampla (outras plataformas) com lances mais baixos.
    *   **Objetivo:** Descobrir quais termos de busca *reais* os clientes estão usando para encontrar seus produtos.
2.  **Análise do Relatório de Termos de Busca:**
    *   Monitore regularmente o relatório que mostra os termos de busca que acionaram seus anúncios.
    *   Identifique termos relevantes que geraram cliques e, idealmente, conversões.
3.  **Migração para Campanhas Manuais (Frase/Exata):**
    *   **Termos com Bom Desempenho:** Adicione os termos relevantes e com bom ROAS/ACoS como palavras-chave de correspondência de frase ou exata em campanhas manuais dedicadas.
    *   **Lances Otimizados:** Defina lances mais competitivos para esses termos comprovados nessas campanhas manuais.
4.  **Negativação na Campanha de Origem:**
    *   **CRUCIAL:** Adicione os termos que você migrou como **palavras-chave negativas** (de correspondência exata ou frase) na campanha automática/ampla de onde eles vieram.
    *   **Objetivo:** Evitar que a campanha de descoberta continue gastando orçamento com termos que já estão sendo gerenciados de forma otimizada nas campanhas manuais.

*[IMAGEM: Fluxograma da Mineração de Palavras-Chave: Automática/Ampla -> Relatório de Termos de Busca -> Identifica Termo Relevante -> Adiciona como Exata/Frase em Campanha Manual -> Negativa o Termo na Campanha Automática/Ampla.]*

### Estratégias Avançadas de Negativação:

Negativar palavras-chave irrelevantes é tão importante quanto encontrar as relevantes, pois evita gastos desnecessários.

*   **Negativação Reativa (Pós-Clique):**
    *   Analise o relatório de termos de busca.
    *   Identifique termos claramente irrelevantes que geraram cliques (Ex: Vende "capinha para celular X", termo de busca foi "celular X usado").
    *   Adicione esses termos como palavras-chave negativas (geralmente de correspondência exata ou frase).
*   **Negativação Proativa (Pré-Clique):**
    *   Pense em termos que *poderiam* acionar seus anúncios, mas são irrelevantes.
    *   **Exemplos:**
        *   Marcas concorrentes (se não for sua estratégia segmentá-las).
        *   Termos relacionados a produtos que você *não* vende (Ex: "grátis", "usado", "aluguel", "conserto").
        *   Variações não relevantes (cores, tamanhos, modelos que você não tem).
    *   Crie listas de palavras-chave negativas e aplique-as às campanhas relevantes (nível de campanha ou grupo de anúncios).
*   **Tipos de Correspondência Negativa:**
    *   **Negativa Exata:** Bloqueia apenas a pesquisa exata.
    *   **Negativa de Frase:** Bloqueia pesquisas que contêm a frase negativa exata.
*   **Negativação Cruzada (Estrutura Tiered):** Como mencionado, negativar palavras exatas nas campanhas amplas/automáticas e amplas nas automáticas.

### Ferramentas de Apoio:

*   **Planejadores de Palavras-Chave:** Ferramentas dos próprios marketplaces (quando disponíveis) ou externas (Google Keyword Planner, Semrush, Ahrefs - adaptando para o contexto) para gerar ideias.
*   **Relatórios de Termos de Busca:** A fonte mais valiosa de dados reais.

---

## Aula 13.6: Análise de Performance e Otimização Contínua

O trabalho de performance marketing nunca termina. A análise constante dos dados e a otimização são a chave para o sucesso a longo prazo.

### Rotinas de Análise e Otimização:

*   **Diária (Rápida):**
    *   Verificar orçamento gasto (evitar estouro).
    *   Checar picos ou quedas anormais de performance.
    *   Pausar rapidamente elementos com gasto excessivo e zero resultado.
*   **Semanal (Detalhada):**
    *   Analisar performance por campanha, grupo de anúncios, palavra-chave, ASIN.
    *   Calcular KPIs (CTR, CVR, ACoS, ROAS).
    *   Analisar relatório de termos de busca (minerar novos termos, negativar irrelevantes).
    *   Ajustar lances com base na performance e metas (aumentar para quem performa bem, diminuir/pausar para quem performa mal).
    *   Verificar posicionamento médio dos anúncios.
*   **Mensal/Quinzenal (Estratégica):**
    *   Revisar a estrutura das campanhas.
    *   Analisar o funil de marketing (performance de campanhas de topo vs. fundo).
    *   Avaliar o impacto dos Ads nas vendas totais (efeito halo).
    *   Testar novas estratégias de lances ou tipos de campanha.
    *   Revisar orçamentos gerais.

### Otimização de Lances (Bid Management):

*   **Baseado em ACoS/ROAS:** Aumentar lances para palavras-chave/segmentações com ROAS acima da meta; diminuir ou pausar para aquelas com ROAS abaixo da meta.
*   **Considerar Volume:** Uma palavra-chave com ROAS excelente mas baixo volume de impressões/cliques pode precisar de um lance maior para ganhar mais visibilidade.
*   **Considerar Taxa de Conversão:** Palavras-chave com alta CVR podem suportar um CPC maior.
*   **Ciclo de Vida do Produto:** Lances mais agressivos para lançamentos; lances focados em rentabilidade para produtos maduros; lances baixos ou pausar para produtos em fim de ciclo.

### Otimização de Criativos e Páginas de Destino:

*   **Anúncios (Criativos):**
    *   Para Sponsored Brands/Display: Testar diferentes imagens, vídeos, títulos e chamadas para ação (CTAs).
    *   Para Sponsored Products: A "criatividade" é o próprio anúncio orgânico. Otimizar título, imagem principal, preço e selos (Prime, Full) impacta diretamente o CTR dos Ads.
*   **Páginas de Destino (Página do Produto):**
    *   A performance dos Ads depende crucialmente da qualidade da página do produto.
    *   Analisar a Taxa de Conversão (CVR) por produto/palavra-chave.
    *   Se o CTR é bom mas a CVR é baixa, o problema provavelmente está na página do produto (preço, fotos, descrição, avaliações, falta de estoque).
    *   Otimize a página do produto antes de aumentar muito o investimento em Ads para ela.

### Testes A/B:

*   Quando a plataforma permitir, realize testes A/B para comparar diferentes:
    *   Estratégias de lances.
    *   Tipos de segmentação.
    *   Criativos (imagens, títulos).
*   **Metodologia:** Mude apenas uma variável por vez, defina um período de teste, use um volume de dados estatisticamente relevante e meça o impacto no KPI desejado (CTR, CVR, ROAS).

*[IMAGEM: Dashboard de análise de performance de Ads, com gráficos de evolução de ROAS, ACoS, Investimento e Vendas.]*

**Mentalidade:** Encare os Ads como um investimento que precisa gerar retorno. Seja metódico, paciente e persistente na análise e otimização.

---

**Próximo Módulo:** Integração ERP Avançada e Automação (Processos automatizados, regras de negócio, relatórios customizados via ERP).
