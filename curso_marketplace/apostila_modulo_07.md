# Apostila - Módulo 7: Gestão de Preços e Estoque

**Nível:** Intermediário

**Objetivo:** Ensinar estratégias e ferramentas para definir preços competitivos, gerenciar o estoque de forma eficiente em múltiplos canais e utilizar o ERP (Bling/Tiny) para automatizar a sincronização de preços e estoque com os marketplaces.

---

## Aula 7.1: Estratégias de Precificação para Marketplaces

A definição do preço de venda (precificação) é uma das decisões mais críticas para o sucesso em marketplaces. Um preço muito alto pode afastar clientes, enquanto um preço muito baixo pode comprometer a lucratividade. É preciso encontrar um equilíbrio considerando custos, concorrência, valor percebido e objetivos de negócio.

### Fatores a Considerar na Precificação:

1.  **Custos:**
    *   **Custo do Produto (CMV - Custo da Mercadoria Vendida):** Quanto você pagou ao fornecedor pelo produto.
    *   **Impostos:** ICMS, PIS, COFINS, IPI (dependendo do regime tributário e do produto).
    *   **Comissões do Marketplace:** Percentual cobrado sobre cada venda (varia por plataforma e categoria).
    *   **Custos de Frete:** Custos de envio (mesmo que ofereça frete grátis, alguém paga por ele - geralmente você) ou taxas de fulfillment (FBA, etc.).
    *   **Custos de Embalagem:** Caixas, fitas, plástico bolha, etc.
    *   **Custos Operacionais:** Proporção dos custos fixos da sua operação (aluguel, salários, internet, ERP, etc.) alocada por produto.
    *   **Custos de Marketing:** Investimento em Ads (se aplicável).
    *   **Custos Financeiros:** Taxas de antecipação de recebíveis, juros.
2.  **Concorrência:**
    *   **Preços dos Concorrentes Diretos:** Monitore os preços dos mesmos produtos vendidos por outros sellers nos mesmos marketplaces.
    *   **Produtos Substitutos:** Considere os preços de produtos similares que atendem à mesma necessidade.
3.  **Valor Percebido:**
    *   **Marca:** Produtos de marcas mais conhecidas podem suportar preços mais altos.
    *   **Qualidade:** Produtos de maior qualidade percebida podem justificar um preço premium.
    *   **Exclusividade:** Produtos exclusivos ou difíceis de encontrar.
    *   **Serviço Agregado:** Atendimento diferenciado, garantia estendida, brindes.
    *   **Reputação do Vendedor:** Vendedores com excelente reputação podem, às vezes, cobrar um pouco mais.
4.  **Objetivos de Negócio:**
    *   **Maximizar Lucro:** Foco em margens mais altas.
    *   **Ganhar Market Share:** Preços mais agressivos para conquistar volume.
    *   **Liquidar Estoque:** Preços baixos para vender rapidamente produtos parados.
    *   **Posicionamento de Marca:** Preços alinhados à imagem que você quer construir (premium, custo-benefício).

*[IMAGEM: Infográfico mostrando os componentes do preço de venda: Custo + Impostos + Comissão + Frete + Despesas Operacionais + Lucro.]*

### Principais Estratégias de Precificação:

1.  **Precificação Baseada em Custos (Markup):**
    *   **Como funciona:** Calcula todos os custos e adiciona uma margem de lucro desejada (markup).
    *   **Prós:** Simples de calcular, garante a cobertura dos custos e uma margem mínima.
    *   **Contras:** Ignora a concorrência e o valor percebido; pode resultar em preços não competitivos.
2.  **Precificação Baseada na Concorrência:**
    *   **Como funciona:** Define o preço com base nos preços praticados pelos concorrentes (igual, um pouco abaixo ou um pouco acima).
    *   **Prós:** Mantém a competitividade no mercado.
    *   **Contras:** Pode levar a guerras de preço que corroem a margem; ignora seus próprios custos e diferenciais.
3.  **Precificação Baseada em Valor:**
    *   **Como funciona:** Define o preço com base no valor percebido pelo cliente (benefícios, qualidade, marca, exclusividade).
    *   **Prós:** Permite margens mais altas se o valor percebido for alto.
    *   **Contras:** Mais subjetivo e difícil de determinar; requer forte comunicação dos diferenciais.
4.  **Precificação Dinâmica:**
    *   **Como funciona:** Ajusta os preços automaticamente com base em fatores como demanda, estoque, preços da concorrência, horário, etc. Geralmente requer ferramentas de automação (repricing).
    *   **Prós:** Maximiza as vendas e/ou a lucratividade em tempo real; essencial para ganhar a Buy Box na Amazon.
    *   **Contras:** Complexo de implementar; requer ferramentas específicas; pode gerar flutuações que confundem o cliente se não for bem gerenciado.
5.  **Precificação Psicológica:**
    *   **Como funciona:** Usa preços terminados em 9, 99 ou 7 (Ex: R$ 19,99 em vez de R$ 20,00) para criar a percepção de um preço menor.
    *   **Prós:** Pode aumentar a percepção de "bom negócio".
    *   **Contras:** Efeito limitado; pode parecer "barato demais" para produtos premium.

**Recomendação:** Use uma **abordagem combinada**. Comece com a precificação baseada em custos para garantir a lucratividade mínima, ajuste com base na concorrência para ser competitivo e considere o valor percebido para otimizar a margem. Para operações mais avançadas, explore a precificação dinâmica.

---

## Aula 7.2: Ferramentas de Monitoramento de Preços

Para aplicar estratégias baseadas na concorrência ou precificação dinâmica, é essencial monitorar os preços dos seus concorrentes.

### Monitoramento Manual:

*   **Como funciona:** Visitar periodicamente os anúncios dos seus principais concorrentes nos marketplaces e anotar os preços.
*   **Prós:** Gratuito; simples para poucos produtos e concorrentes.
*   **Contras:** Demorado e inviável para catálogos maiores; sujeito a erros; não captura flutuações rápidas de preço.

### Monitoramento via Planilhas com Extensões/Scraping (Avançado/Cuidado):

*   **Como funciona:** Usar extensões de navegador ou scripts (web scraping) para extrair preços de páginas de marketplaces e organizá-los em planilhas.
*   **Prós:** Mais rápido que o manual.
*   **Contras:** Requer conhecimento técnico; pode violar os termos de uso dos marketplaces; sujeito a falhas quando os sites mudam.

### Ferramentas de Monitoramento e Repricing (Automatizado):

*   **Como funciona:** Softwares especializados que rastreiam automaticamente os preços dos concorrentes (e outros fatores, como reputação, frete) e, opcionalmente, ajustam seus preços com base em regras pré-definidas (repricing).
*   **Prós:**
    *   **Automação:** Economiza tempo e esforço.
    *   **Velocidade:** Captura flutuações de preço em tempo real.
    *   **Inteligência:** Permite criar regras complexas (Ex: "Ficar R$ 0,10 abaixo do concorrente X, desde que minha margem mínima seja Y%").
    *   **Competitividade:** Ajuda a manter preços competitivos e a ganhar a Buy Box.
*   **Contras:**
    *   **Custo:** Geralmente são ferramentas pagas (mensalidade).
    *   **Configuração:** Requer configuração cuidadosa das regras para evitar preços errados ou prejuízo.
    *   **Dependência:** Cria dependência da ferramenta.

**Exemplos de Ferramentas (Verificar disponibilidade e foco no Brasil):**

*   **Foco Mercado Livre:** Nubimetrics (monitoramento e análise), Real Trends (monitoramento e análise), Aleph CRM (inclui repricing).
*   **Foco Amazon:** Helium 10, Jungle Scout, SellerApp, Feedvisor, BQool (muitas com foco internacional, mas podem ter funcionalidades no Brasil).
*   **Multicanal/ERPs:** Alguns ERPs ou Hubs de Integração oferecem módulos básicos de monitoramento ou repricing.

*[IMAGEM: Captura de tela do dashboard de uma ferramenta de monitoramento/repricing, mostrando preços de concorrentes e regras de ajuste.]*

**Ao escolher uma ferramenta:**

*   Verifique a compatibilidade com os marketplaces onde você atua.
*   Analise a frequência de atualização dos dados.
*   Entenda a flexibilidade das regras de repricing.
*   Considere o custo-benefício para sua operação.

---

## Aula 7.3: Gestão de Estoque Eficiente

Gerenciar o estoque corretamente é vital para evitar vendas sem produto (que geram cancelamentos e prejudicam a reputação) e para não deixar dinheiro parado em produtos que não vendem.

### Conceitos Chave de Gestão de Estoque:

*   **Estoque Físico:** Quantidade real de produtos no seu depósito.
*   **Estoque Virtual (Disponível para Venda):** Quantidade que você informa aos marketplaces. Pode ser igual ao físico ou menor (estoque de segurança).
*   **Estoque de Segurança:** Uma quantidade mínima mantida para cobrir imprevistos (atrasos de fornecedores, picos de demanda).
*   **Giro de Estoque:** Indicador que mede quantas vezes o estoque foi renovado em um período. Um giro alto geralmente indica boa performance de vendas.
*   **Curva ABC:** Método de classificação de produtos com base na sua importância (A: poucos itens, alto valor/giro; B: intermediários; C: muitos itens, baixo valor/giro). Ajuda a priorizar a gestão.
*   **SKU (Stock Keeping Unit):** Código único que identifica cada item e suas variações no seu controle de estoque.

### Desafios da Gestão de Estoque em Marketplaces:

*   **Múltiplos Canais:** Vender o mesmo produto em vários marketplaces e, talvez, em uma loja virtual própria.
*   **Sincronização:** Garantir que a venda em um canal atualize o estoque disponível nos outros quase em tempo real.
*   **Previsão de Demanda:** Estimar quanto comprar de cada produto para atender à demanda futura sem excessos.
*   **Variações:** Controlar o estoque de cada variação (cor, tamanho) individualmente.
*   **Logística Reversa:** Gerenciar o retorno de produtos devolvidos ao estoque.

### Estratégias e Boas Práticas:

1.  **Centralização no ERP:** O ERP deve ser a fonte única da verdade para o seu estoque. Todas as entradas (compras) e saídas (vendas, perdas) devem ser registradas nele.
2.  **Sincronização em Tempo Real (ou Quase):** Configure a integração ERP-Marketplace para atualizar o estoque o mais rápido possível após uma venda em qualquer canal.
3.  **Estoque de Segurança:** Defina um estoque de segurança no ERP. O estoque enviado aos marketplaces será o [Estoque Físico - Estoque de Segurança]. Isso cria uma margem para evitar vendas sem estoque.
4.  **Inventários Periódicos:** Realize contagens físicas regulares do seu estoque (inventário) para verificar se os números do sistema batem com a realidade e corrigir discrepâncias.
5.  **Análise da Curva ABC:** Foque seus esforços de gestão (previsão, negociação com fornecedor) nos produtos da Curva A.
6.  **Previsão de Demanda:** Analise o histórico de vendas (por produto, por canal, por período) para prever a demanda futura e otimizar as compras.
7.  **Gestão de Lotes e Validade (se aplicável):** Para produtos perecíveis ou com validade, controle os lotes para garantir a venda dos mais antigos primeiro (FIFO - First In, First Out).

*[IMAGEM: Fluxograma mostrando o fluxo de estoque: Compra -> Entrada no ERP -> Sincronização com Marketplaces -> Venda -> Baixa no ERP -> Sincronização com Marketplaces.]*

---

## Aula 7.4: Sincronização de Preços e Estoque via ERP (Bling)

Utilizar o Bling para sincronizar preços e estoque com os marketplaces automatiza tarefas cruciais.

### Configurando a Sincronização no Bling:

1.  **Acesse a Configuração da Integração:** Vá em Preferências > Integrações > Configurações de Integração com Lojas Virtuais e Marketplaces > Selecione a integração desejada (Ex: Mercado Livre).
2.  **Sincronização de Preços:**
    *   **Habilitar:** Marque a opção para sincronizar preços.
    *   **Origem do Preço:** Escolha qual campo do cadastro do produto no Bling será usado como preço para aquele marketplace (Ex: Preço, Preço Promocional, ou um campo de preço específico para o canal).
    *   **Regras de Preço (Opcional):** O Bling permite criar regras para adicionar um percentual ou valor fixo ao preço base antes de enviar para o marketplace (útil para embutir comissões ou diferenciar preços por canal).
3.  **Sincronização de Estoque:**
    *   **Habilitar:** Marque a opção para sincronizar estoque.
    *   **Origem do Estoque:** Selecione o depósito do Bling que será considerado para essa integração.
    *   **Estoque de Segurança:** Defina uma quantidade a ser subtraída do saldo físico antes de enviar ao marketplace.
    *   **Considerar Reservas:** Defina se o estoque reservado por pedidos ainda não faturados deve ser descontado do saldo enviado.
4.  **Salvar as Configurações.**

*[IMAGEM: Captura de tela da configuração de sincronização de preço no Bling, mostrando as opções de origem e regras.]*
*[IMAGEM: Captura de tela da configuração de sincronização de estoque no Bling, mostrando as opções de depósito, estoque de segurança e reservas.]*

### Vinculando Produtos/Anúncios:

Para que a sincronização funcione, o Bling precisa saber qual produto no ERP corresponde a qual anúncio no marketplace.

*   **Vínculo Automático (SKU):** Se o SKU do produto no Bling for idêntico ao SKU/ID do anúncio no marketplace, o Bling pode tentar vincular automaticamente.
*   **Vínculo Manual:** Na seção de "Vínculo de Produtos Multiloja" (dentro das configurações da integração ou em Cadastros > Produtos), você pode associar manualmente cada produto do Bling ao seu anúncio correspondente no marketplace.
*   **Vínculo de Variações:** É crucial mapear corretamente as variações do produto no Bling com as variações do anúncio no marketplace.

*[IMAGEM: Captura de tela da interface de vínculo de produtos multiloja no Bling.]*

### Executando a Sincronização:

*   **Automática:** O Bling geralmente sincroniza estoque e preço em intervalos regulares (verificar documentação para os tempos exatos).
*   **Manual:** Você pode forçar uma sincronização manual de preço ou estoque para produtos específicos ou para toda a integração a partir das configurações da integração ou do cadastro do produto.

**Boas Práticas no Bling:**

*   Mantenha os SKUs consistentes entre o Bling e os marketplaces.
*   Faça o vínculo de todos os produtos antes de habilitar a sincronização automática.
*   Monitore os logs de sincronização para identificar erros.
*   Use o estoque de segurança para evitar rupturas.

---

## Aula 7.5: Sincronização de Preços e Estoque via ERP (Tiny)

O processo no Tiny (Olist Tiny) é conceitualmente similar, com interfaces e nomenclaturas próprias.

### Configurando a Sincronização no Tiny:

1.  **Acesse a Configuração da Extensão:** Vá em Início > Extensões do Tiny > Marketplaces > Selecione o marketplace > Configurar.
2.  **Sincronização de Preços:**
    *   **Habilitar:** Procure pela opção de enviar preços para o marketplace.
    *   **Lista de Preços:** Selecione qual lista de preços do Tiny será usada para essa integração.
    *   **Regras de Preço (Markup/Markdown):** O Tiny também permite aplicar regras de acréscimo ou decréscimo sobre a lista de preços base antes de enviar.
3.  **Sincronização de Estoque:**
    *   **Habilitar:** Procure pela opção de enviar saldo de estoque.
    *   **Depósito:** Selecione o depósito de estoque do Tiny a ser considerado.
    *   **Reservar Estoque:** Configure se o estoque de pedidos em aberto deve ser reservado.
    *   **Estoque de Segurança:** Defina uma quantidade a ser desconsiderada.
4.  **Salvar as Configurações.**

*[IMAGEM: Captura de tela da configuração de sincronização de preço no Tiny, mostrando a seleção da lista de preços e regras.]*
*[IMAGEM: Captura de tela da configuração de sincronização de estoque no Tiny, mostrando a seleção do depósito e estoque de segurança.]*

### Vinculando Produtos/Anúncios:

O Tiny também requer que os produtos do ERP estejam vinculados aos anúncios dos marketplaces.

*   **Vínculo via SKU:** O Tiny utiliza fortemente o SKU para fazer a associação.
*   **Mapeamento de Anúncios:** Na seção de configuração da integração ou no cadastro do produto, existe a funcionalidade de "Mapear anúncios" onde você associa o produto do Tiny ao ID do anúncio no marketplace.
*   **Vínculo de Variações:** O mapeamento de variações também é essencial e deve ser feito cuidadosamente.

*[IMAGEM: Captura de tela da interface de mapeamento de anúncios no Tiny.]*

### Executando a Sincronização:

*   **Automática:** O Tiny realiza sincronizações periódicas (verificar documentação).
*   **Manual:** É possível disparar sincronizações manuais de preço e estoque a partir da configuração da integração ou do cadastro do produto.

**Boas Práticas no Tiny:**

*   Garanta que os SKUs estejam corretos e consistentes.
*   Realize o mapeamento completo dos anúncios antes de ativar a sincronização.
*   Verifique os logs e relatórios de sincronização.
*   Utilize as funcionalidades de reserva e estoque de segurança.

---

**Próximo Módulo:** Gestão de Pedidos e Logística (Do recebimento do pedido à entrega ao cliente).

