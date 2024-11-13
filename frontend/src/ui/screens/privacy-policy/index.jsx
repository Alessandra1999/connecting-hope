export function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-primary-light-250 to-primary-light-400 text-primary-light-750">
      <div className="max-w-[80%] mx-auto py-8 h-full flex flex-col items-center justify-center gap-4 md:max-w-screen-sm xl:max-w-screen-lg">
        <div className="text-center text-sm font-bold lg:text-3xl">
          <h1>Política de Privacidade - Connecting Hope</h1>
          <h2>Última Atualização: 13/11/24</h2>
        </div>

        <div className="text-xs flex flex-col gap-4 md:text-base lg:text-xl">
          <p className="text-justify">
            A sua privacidade é muito importante para nós. Esta Política de
            Privacidade descreve como coletamos, utilizamos, armazenamos e
            protegemos suas informações pessoais quando você utiliza a
            plataforma Connecting Hope, que facilita doações para campanhas de
            ONGs. Ao utilizar nossos serviços, você concorda com as práticas
            descritas nesta política.
          </p>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold">1. Informações Coletadas</h3>
            <p className="text-justify">
              Coletamos informações que você nos fornece diretamente e dados que
              são coletados automaticamente quando você utiliza a plataforma.
            </p>

            <h3 className="font-bold">
              1.1 Informações Fornecidas Diretamentes
            </h3>
            <p className="text-justify">
              Ao criar uma conta, fazer uma doação ou interagir com a
              plataforma, podemos solicitar as seguintes informações:
              <br /> Dados Pessoais: Nome completo, endereço de e-mail, CPF,
              endereço físico. Informações de Pagamento: Dados necessários para
              processar doações, como número de cartão de crédito ou conta
              bancária. Essas informações são tratadas diretamente pelo
              processador de pagamentos Stripe e não são armazenadas por nós.
              Outros Dados: Informações que você escolhe fornecer
              voluntariamente, como feedbacks ou perguntas.
            </p>

            <h3 className="font-bold">
              1.2 Informações Coletadas Automaticamente
            </h3>
            <p className="text-justify">
              Coletamos automaticamente certas informações quando você usa a
              nossa plataforma, incluindo:
              <br />
              Dados de Navegação: Endereço IP, tipo de navegador, páginas
              visitadas, tempo gasto no site.
            </p>

            <h3 className="font-bold">2. Uso das Informações</h3>
            <p className="text-justify">
              Utilizamos as informações coletadas para diversos fins, incluindo:
              <br />
              Fornecimento de Serviços: Facilitar o uso da plataforma, processar
              doações, gerenciar contas de usuários e oferecer suporte ao
              cliente. Comunicação: Enviar e-mails de confirmação de doações,
              atualizações sobre campanhas e outras comunicações relacionadas
              aos nossos serviços, não incluindo e-mails de marketing. Melhoria
              dos Serviços: Analisar padrões de uso e feedbacks para melhorar o
              funcionamento da plataforma. Cumprimento Legal: Manter a
              conformidade com as leis aplicáveis e proteger nossos direitos.
            </p>

            <h3 className="font-bold">3. Compartilhamento de Informações</h3>
            <p className="text-justify">
              Não vendemos, alugamos ou trocamos suas informações pessoais com
              terceiros para fins de marketing. No entanto, podemos compartilhar
              informações com:
              <br />
              ONGs: As ONGs responsáveis pelas campanhas que você apoia terão
              acesso a informações limitadas sobre as suas doações (como nome e
              valor da doação). Provedores de Serviços: Compartilhamos
              informações com terceiros que prestam serviços em nosso nome, como
              processadores de pagamento, provedores de hospedagem e empresas de
              análise. Autoridades Legais: Podemos divulgar suas informações
              quando exigido por lei ou para proteger os direitos, propriedade
              ou segurança da Connecting Hope, de nossos usuários ou do público.
            </p>

            <h3 className="font-bold">4. Segurança das Informações</h3>
            <p className="text-justify">
              Tomamos medidas razoáveis para proteger suas informações pessoais
              contra perda, roubo, uso indevido e acesso não autorizado. Essas
              medidas incluem:
              <br />
              Criptografia: Dados sensíveis, como informações de pagamento, são
              criptografados durante a transmissão. Acesso Restrito: Apenas
              funcionários e parceiros que necessitam das informações para
              executar suas funções têm acesso a dados pessoais. No entanto,
              nenhum método de transmissão ou armazenamento eletrônico é
              completamente seguro, e não podemos garantir segurança absoluta.
            </p>

            <h3 className="font-bold">5. Seus Direitos</h3>
            <p className="text-justify">
              Você tem o direito de:
              <br />
              Acessar e Atualizar Seus Dados: Você pode revisar e atualizar suas
              informações pessoais a qualquer momento acessando sua conta.
              Solicitar a Exclusão de Dados: Você pode solicitar que excluamos
              suas informações pessoais, exceto quando for necessário mantê-las
              para cumprir obrigações legais. Optar por Não Receber
              Comunicações: Você pode optar por não receber comunicações
              promocionais seguindo as instruções de cancelamento incluídas nos
              e-mails ou entrando em contato conosco diretamente.
            </p>

            <h3 className="font-bold">6. Retenção de Dados</h3>
            <p className="text-justify">
              Mantemos suas informações pessoais pelo tempo necessário para
              cumprir os propósitos para os quais foram coletadas, incluindo
              para atender a requisitos legais, contábeis ou de relatórios.
            </p>

            <h3 className="font-bold">
              7. Alterações a Esta Política de Privacidade
            </h3>
            <p className="text-justify">
              Reservamo-nos o direito de modificar esta Política de Privacidade
              a qualquer momento. Qualquer alteração será publicada nesta página
              e, se as mudanças forem substanciais, notificaremos os usuários
              por e-mail ou por meio de um aviso em destaque na plataforma.
            </p>

            <h3 className="font-bold">8. Contato</h3>
            <p className="text-justify">
              Se você tiver dúvidas ou preocupações sobre esta Política de
              Privacidade ou sobre como tratamos suas informações pessoais,
              entre em contato conosco pelo e-mail:
              contato.connectinghope@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
