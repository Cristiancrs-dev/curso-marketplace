# Apostila - Módulo 15: Analytics, Reporting e Planejamento Estratégico

**Nível:** Avançado

**Objetivo:** Capacitar o analista a ir além dos relatórios padrão, utilizando dados de diversas fontes (marketplaces, ERP, Ads) para realizar análises aprofundadas, construir dashboards eficazes, definir metas SMART e desenvolver um planejamento estratégico para o crescimento sustentável da operação em marketplaces.

---

## Aula 15.1: Coleta e Consolidação de Dados Multicanal

Para uma visão completa da performance, é essencial coletar e consolidar dados de todas as fontes relevantes.

### Fontes de Dados Principais:

1.  **Plataformas de Marketplace:**
    *   **Painéis Nativos:** Relatórios de vendas, reputação, tráfego, conversão, posicionamento.
    *   **APIs (se acessíveis):** Permitem extração de dados mais granulares e automatizada.
2.  **Plataformas de Ads:**
    *   **Painéis Nativos (Mercado Ads, Amazon Advertising, etc.):** Relatórios de impressões, cliques, custos, vendas atribuídas, ROAS/ACoS, termos de busca.
    *   **APIs (se acessíveis):** Extração automatizada para análise externa.
3.  **ERP (Bling/Tiny):**
    *   **Banco de Dados Operacional:** Vendas, estoque, custos, clientes, financeiro.
    *   **Relatórios Nativos e Exportações:** Fonte rica de dados operacionais e financeiros.
    *   **APIs:** Extração de dados específicos para consolidação.
4.  **Ferramentas de Análise de Mercado (Externas):**
    *   Nubimetrics, Real Trends, Helium 10, etc.: Dados de concorrência, tendências de mercado, estimativas de vendas (usar com cautela).
5.  **Google Analytics (Para Lojas Próprias ou Tráfego Externo):**
    *   Se você direciona tráfego externo para seus produtos no marketplace (Ex: via redes sociais), o GA pode ajudar a rastrear a origem desse tráfego (configuração complexa com UTMs).

### Desafios da Consolidação:

*   **Formatos Diferentes:** Cada plataforma exporta dados em formatos e com nomenclaturas distintas.
*   **Métricas Inconsistentes:** A mesma métrica (Ex: "Vendas") pode ser calculada de forma diferente em cada plataforma (Bruta vs. Líquida, com ou sem frete).
*   **Atribuição:** Como conciliar as vendas atribuídas pelos Ads com as vendas totais registradas no ERP?
*   **Volume de Dados:** A quantidade de dados pode ser enorme, exigindo ferramentas adequadas para processamento.

### Estratégias de Consolidação:

1.  **Planilhas (Excel/Google Sheets):**
    *   **Método:** Exportar relatórios de cada fonte (CSV/Excel) e importar/copiar para uma planilha central.
    *   **Ferramentas:** Usar Power Query (Excel) ou funções `IMPORTRANGE`, `QUERY` (Google Sheets) para limpar, transformar e combinar os dados.
    *   **Prós:** Acessível, flexível para análises iniciais.
    *   **Contras:** Manual, propenso a erros, difícil de escalar para grandes volumes, atualização demorada.
2.  **Ferramentas de Business Intelligence (BI):**
    *   **Método:** Conectar a ferramenta de BI (Power BI, Looker Studio, Tableau) diretamente às fontes de dados (via APIs, conectores nativos ou bancos de dados intermediários) ou importar arquivos CSV/Excel.
    *   **Processo ETL (Extract, Transform, Load):** As ferramentas de BI possuem recursos para extrair dados de múltiplas fontes, transformá-los (limpar, padronizar, calcular novas métricas) e carregá-los em um modelo de dados unificado.
    *   **Prós:** Automatizável, escalável, visualizações interativas, modelo de dados centralizado.
    *   **Contras:** Curva de aprendizado, pode exigir investimento em ferramentas ou conhecimento técnico para configurar conexões via API.
3.  **Data Warehouse (Solução Mais Avançada):**
    *   **Método:** Criar um banco de dados centralizado (Data Warehouse) para armazenar dados históricos de todas as fontes. Ferramentas de ETL extraem dados das fontes e os carregam no DW. A ferramenta de BI se conecta ao DW.
    *   **Prós:** Solução mais robusta e escalável para grandes volumes e análises complexas, preserva histórico.
    *   **Contras:** Requer investimento significativo em infraestrutura e conhecimento técnico.

*[IMAGEM: Diagrama mostrando as fontes de dados (Marketplaces, Ads, ERP) fluindo para uma ferramenta de BI (via export/import ou API) para criar dashboards unificados.]*

**Recomendação:** Comece com planilhas para entender os dados e as necessidades de análise. Conforme a complexidade aumenta, migre para uma ferramenta de BI (Looker Studio é gratuito e integra bem com Google Sheets).

---

## Aula 15.2: Criação de Dashboards e Relatórios Estratégicos

Dashboards eficazes transformam dados brutos em informações visuais e acionáveis para monitorar a performance e apoiar a tomada de decisão.

### Princípios de um Bom Dashboard:

*   **Objetivo Claro:** Qual pergunta o dashboard deve responder? Qual decisão ele deve apoiar?
*   **Público-Alvo:** Para quem é o dashboard (Diretoria, Gerente de E-commerce, Analista de Ads)? Adapte as métricas e a complexidade.
*   **Métricas Relevantes (KPIs):** Foque nos Indicadores Chave de Performance que realmente importam para o objetivo.
*   **Visualização Adequada:** Escolha o tipo de gráfico correto para cada métrica (Linha para tendências, Barra para comparações, Pizza para composição - com moderação, Tabelas para detalhes).
*   **Simplicidade e Clareza:** Evite poluição visual. Use cores de forma consistente. Destaque as informações mais importantes.
*   **Contexto:** Compare os dados com períodos anteriores, metas ou benchmarks.
*   **Acionabilidade:** O dashboard deve permitir identificar rapidamente problemas ou oportunidades e inspirar ações.
*   **Atualização:** Defina a frequência de atualização necessária (diária, semanal, mensal).

### Tipos de Dashboards para Marketplaces:

1.  **Dashboard Geral de Performance:**
    *   **Objetivo:** Visão macro da saúde do negócio em marketplaces.
    *   **KPIs:** Receita Total, Vendas por Canal, Ticket Médio, Nº de Pedidos, Margem Bruta Média, ACoS/ROAS Total, Reputação Geral.
    *   **Visualizações:** Gráficos de linha (evolução da receita), gráficos de barra (comparação entre canais), velocímetros (comparação com metas).
2.  **Dashboard de Vendas e Produtos:**
    *   **Objetivo:** Analisar performance de vendas por produto e categoria.
    *   **KPIs:** Receita por Produto/Categoria, Volume de Vendas por Produto, Margem por Produto, Curva ABC de Produtos, Produtos com Baixo Giro.
    *   **Visualizações:** Tabelas com filtros, gráficos de barra/coluna, gráficos de dispersão (Volume vs. Margem).
3.  **Dashboard de Marketing e Ads:**
    *   **Objetivo:** Monitorar performance das campanhas de publicidade.
    *   **KPIs:** Investimento em Ads (por canal), Receita de Ads, ACoS/ROAS (geral e por campanha/canal), Impressões, Cliques, CTR, CVR, CPC.
    *   **Visualizações:** Gráficos de linha (evolução do ROAS/ACoS), tabelas detalhadas por campanha, funil de conversão.
4.  **Dashboard Operacional e de Logística:**
    *   **Objetivo:** Acompanhar eficiência operacional.
    *   **KPIs:** Tempo de Processamento de Pedidos, Taxa de Envios no Prazo, Custo de Frete Médio, Taxa de Cancelamento, Taxa de Devolução (por motivo).
    *   **Visualizações:** Gráficos de linha (tempo de processamento), tabelas, gráficos de barra (motivos de devolução).
5.  **Dashboard de Atendimento e Reputação:**
    *   **Objetivo:** Monitorar a satisfação do cliente e a reputação.
    *   **KPIs:** Nota de Reputação (por canal), Nº de Reclamações, Tempo de Resposta (perguntas/mensagens), Avaliações Positivas/Negativas.
    *   **Visualizações:** Gráficos de linha (evolução da reputação), tabelas, nuvem de palavras com termos das avaliações.

*[IMAGEM: Exemplo de um Dashboard Geral de Performance criado no Looker Studio ou Power BI, com vários gráficos e KPIs.]*
*[IMAGEM: Exemplo de um Dashboard de Marketing e Ads, focando em ROAS, ACoS e funil.]*

### Ferramentas para Criação de Dashboards:

*   **Planilhas (Excel/Google Sheets):** Gráficos e tabelas dinâmicas. Bom para começar.
*   **Looker Studio (Antigo Google Data Studio):** Gratuito, integra facilmente com Google Sheets, Google Analytics e outras fontes. Ótima opção para PMEs.
*   **Microsoft Power BI:** Versão desktop gratuita com muitas funcionalidades. Versões Pro/Premium pagas para compartilhamento e recursos avançados. Poderoso, curva de aprendizado média.
*   **Tableau:** Ferramenta líder de mercado, muito poderosa e flexível, mas com custo mais elevado.

### Relatórios Estratégicos:

Além dos dashboards de monitoramento, crie relatórios mais aprofundados periodicamente (mensal/trimestral) para analisar tendências, diagnosticar problemas e comunicar resultados à gestão.

*   **Estrutura:** Resumo Executivo -> Análise Detalhada por Área (Vendas, Marketing, Operações) -> Diagnóstico (Pontos Fortes, Pontos Fracos, Oportunidades, Ameaças - SWOT) -> Recomendações e Próximos Passos.
*   **Foco:** Insights e recomendações, não apenas dados.

---

## Aula 15.3: Análise Preditiva e Prescritiva (Conceitos)

Enquanto a análise descritiva (o que aconteceu?) e diagnóstica (por que aconteceu?) são essenciais, a análise preditiva e prescritiva buscam olhar para o futuro.

*   **Análise Preditiva:**
    *   **O que é:** Usa dados históricos e algoritmos estatísticos/machine learning para prever resultados futuros.
    *   **Exemplos em Marketplaces:**
        *   **Previsão de Demanda:** Estimar vendas futuras de um produto para otimizar estoque.
        *   **Previsão de Churn (Cancelamento):** Identificar clientes com maior probabilidade de parar de comprar (mais aplicável a modelos de assinatura ou recorrência).
        *   **Previsão de ROAS:** Estimar o retorno futuro de campanhas de Ads com base em variáveis.
    *   **Complexidade:** Requer conhecimento de estatística, machine learning e ferramentas específicas (Python com bibliotecas como Pandas, Scikit-learn; R; plataformas de ML).
*   **Análise Prescritiva:**
    *   **O que é:** Vai além da previsão, recomendando ações específicas para otimizar um resultado futuro.
    *   **Exemplos em Marketplaces:**
        *   **Otimização de Preço:** Recomendar o preço ideal para maximizar lucro ou volume, considerando previsões de demanda e elasticidade.
        *   **Otimização de Estoque:** Recomendar a quantidade exata a ser comprada de cada produto, considerando previsão de demanda, lead time e custos.
        *   **Otimização de Lances de Ads:** Recomendar o lance ideal para cada palavra-chave/segmentação para atingir uma meta de ROAS.
    *   **Complexidade:** Ainda mais complexa que a preditiva, envolvendo algoritmos de otimização.

**Realidade Atual:** Para a maioria dos analistas de marketplace, o foco principal ainda está na análise descritiva e diagnóstica. Análises preditivas e prescritivas robustas geralmente exigem cientistas de dados ou ferramentas muito avançadas. No entanto, entender os conceitos é importante para o futuro.

*[IMAGEM: Escada da Análise de Dados: Descritiva (O que aconteceu?) -> Diagnóstica (Por que aconteceu?) -> Preditiva (O que vai acontecer?) -> Prescritiva (O que devemos fazer?).]*

---

## Aula 15.4: Definição de Metas SMART e KPIs Estratégicos

Metas claras e mensuráveis são essenciais para direcionar os esforços e avaliar o sucesso.

### Metas SMART:

Um framework para definir metas eficazes:

*   **S (Specific - Específica):** O que exatamente você quer alcançar? (Ex: Aumentar a receita do Marketplace X).
*   **M (Measurable - Mensurável):** Como você vai medir o progresso e o sucesso? Qual KPI será usado? (Ex: Aumentar a receita em 20%).
*   **A (Achievable - Atingível):** A meta é realista com os recursos e o tempo disponíveis? (Ex: É possível aumentar 20% com base no histórico e nas ações planejadas?).
*   **R (Relevant - Relevante):** A meta é importante para os objetivos gerais do negócio? (Ex: Aumentar a receita contribui para o lucro da empresa?).
*   **T (Time-bound - Temporal):** Qual o prazo para alcançar a meta? (Ex: Aumentar a receita em 20% no próximo trimestre).

**Exemplo de Meta SMART:** "Aumentar a receita de vendas no Mercado Livre em 15% (KPI: Receita Bruta) até o final do Q3 de 2025, através da otimização de campanhas de Ads e lançamento de 10 novos produtos." 

### Definindo KPIs Estratégicos:

KPIs (Key Performance Indicators) são as métricas mais importantes para acompanhar o progresso em direção às metas.

*   **Menos é Mais:** Foque em poucos KPIs vitais, em vez de acompanhar dezenas de métricas.
*   **Alinhamento com Metas:** Cada meta SMART deve ter um ou mais KPIs associados.
*   **Níveis de KPIs:**
    *   **Estratégicos (Alto Nível):** Receita Total, Lucratividade, Market Share, Satisfação do Cliente (NPS - se medido).
    *   **Táticos (Departamentais):** ROAS/ACoS (Marketing), Taxa de Envios no Prazo (Operações), Giro de Estoque (Compras), Taxa de Conversão (E-commerce).
    *   **Operacionais (Dia a Dia):** Cliques, CTR, CPC (Ads), Tempo de Resposta (Atendimento), Pedidos Processados por Hora (Logística).
*   **Cascateamento:** Os KPIs operacionais devem influenciar os táticos, que por sua vez impactam os estratégicos.

*[IMAGEM: Pirâmide de KPIs: Base (Operacionais), Meio (Táticos), Topo (Estratégicos).]*

### Exemplos de KPIs por Área:

*   **Vendas:** Receita, Ticket Médio, Volume de Pedidos, Taxa de Conversão.
*   **Marketing (Ads):** ROAS (Return on Ad Spend), ACoS (Advertising Cost of Sales), CPA (Custo por Aquisição), CTR (Click-Through Rate).
*   **Operações/Logística:** OTD (On-Time Delivery), Tempo de Ciclo do Pedido, Custo de Frete por Pedido.
*   **Estoque:** Giro de Estoque, Cobertura de Estoque, Ruptura (Out-of-Stock Rate).
*   **Atendimento/Reputação:** Nível de Reputação, Tempo Médio de Resposta, Taxa de Reclamações.
*   **Financeiro:** Margem Bruta, Margem de Contribuição, Lucro Líquido, Ponto de Equilíbrio.

**Importante:** Defina claramente como cada KPI é calculado e qual a fonte de dados.

---

## Aula 15.5: Planejamento Estratégico para Marketplaces

O planejamento estratégico define a direção de longo prazo e as principais iniciativas para alcançar os objetivos de negócio nos marketplaces.

### Componentes do Planejamento Estratégico:

1.  **Análise de Cenário (SWOT):**
    *   **Forças (Strengths):** Vantagens internas (Marca forte, produto exclusivo, boa reputação, operação eficiente).
    *   **Fraquezas (Weaknesses):** Desvantagens internas (Margem apertada, dependência de poucos produtos, falta de automação, equipe pequena).
    *   **Oportunidades (Opportunities):** Fatores externos favoráveis (Crescimento do marketplace, novas categorias em alta, saída de um concorrente, novas ferramentas da plataforma).
    *   **Ameaças (Threats):** Fatores externos desfavoráveis (Novos concorrentes agressivos, aumento de comissões, mudanças nas políticas da plataforma, crise econômica).
2.  **Definição de Objetivos de Longo Prazo:** Onde você quer que sua operação em marketplaces esteja em 1, 3 ou 5 anos? (Ex: Ser líder na categoria X, expandir para novos marketplaces, atingir X% de lucratividade).
3.  **Definição de Metas de Curto/Médio Prazo (SMART):** Metas anuais ou trimestrais que contribuem para os objetivos de longo prazo.
4.  **Desenvolvimento de Iniciativas Estratégicas:** Quais são os grandes projetos ou ações que serão implementados para alcançar as metas? (Ex: Implementar ferramenta de repricing, otimizar estrutura de Ads, desenvolver linha de produtos premium, melhorar processo de embalagem, expandir para Amazon).
5.  **Alocação de Recursos:** Definir orçamento, equipe e tempo necessários para cada iniciativa.
6.  **Plano de Ação:** Detalhar as tarefas específicas, responsáveis e prazos para cada iniciativa.
7.  **Monitoramento e Revisão:** Acompanhar o progresso das iniciativas e o atingimento das metas (usando KPIs e dashboards) e revisar/ajustar o plano periodicamente (trimestral/anual).

*[IMAGEM: Quadro SWOT preenchido com exemplos para um vendedor de marketplace.]*
*[IMAGEM: Fluxograma do processo de planejamento estratégico: Análise SWOT -> Objetivos Longo Prazo -> Metas SMART -> Iniciativas -> Recursos -> Plano de Ação -> Monitoramento.]*

### Foco no Crescimento Sustentável:

*   **Rentabilidade:** O crescimento da receita deve vir acompanhado da manutenção ou aumento da lucratividade. Monitore a margem de contribuição.
*   **Diversificação:**
    *   **De Canais:** Não dependa exclusivamente de um único marketplace.
    *   **De Produtos:** Tenha um mix de produtos equilibrado (Curva ABC).
    *   **De Fornecedores:** Evite dependência excessiva de um único fornecedor.
*   **Escalabilidade:** Seus processos e sistemas (ERP, logística) estão preparados para suportar um volume maior de vendas?
*   **Marca:** Invista na construção da sua marca, mesmo dentro dos marketplaces (qualidade do produto, atendimento, embalagem).
*   **Inovação:** Esteja atento a novas tendências, ferramentas e estratégias no ecossistema de marketplaces.

**O Papel do Analista:** O analista de marketplaces desempenha um papel crucial no planejamento estratégico, fornecendo dados, análises e insights para embasar as decisões e monitorar a execução do plano.

---

**Fim do Nível Avançado.**

**Próxima Etapa:** Criação de Material Complementar (Checklists, Exercícios, Ferramentas).
