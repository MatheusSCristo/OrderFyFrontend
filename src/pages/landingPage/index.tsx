import {
  ArrowRight,
  BarChart3,
  Check,
  Clock,
  Download,
  Menu,
  Play,
  Rocket,
  Settings,
  ShoppingCart,
  Smartphone,
  Star,
  Users,
} from "lucide-react";

const LandingPage = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" data-theme="kitchenflow">
      {/* Header */}
      <div className="navbar bg-base-100/95 backdrop-blur-sm border-b border-base-300 fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <Menu className="h-6 w-6" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#features">Funcionalidades</a>
              </li>
              <li>
                <a href="#how-it-works">Como Funciona</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-terracota-800 to-terracota-500 bg-clip-text text-transparent">
            PedeFacil
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="#features"
                className="hover:text-terracota-500 hover:bg-transparent hover:scale-[1.05] transition-all duration-500 "
              >
                Funcionalidades
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-terracota-500 hover:bg-transparent hover:scale-[1.05] duration-500 transition-all  "
              >
                Como Funciona
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-terracota-500 hover:bg-transparent hover:scale-[1.05] duration-500 transition-all "
              >
                Preços
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <button className="btn btn-outline btn-sm">Entrar</button>
          <button className="btn bg-terracota-500 text-white btn-sm">
            Teste Grátis
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-screen bg-gradient-to-br from-base-100 to-base-200 pt-16">
        <div className="hero-content max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Organize sua
                <span className="bg-gradient-to-r from-terracota-500 to-terracota-400 bg-clip-text text-transparent block">
                  Cozinha
                </span>
                com Inteligência
              </h1>

              <p className="text-lg md:text-xl text-base-content/70 mb-8 max-w-2xl">
                Gerencie pedidos, organize sua cozinha e otimize operações com
                nossa plataforma completa para restaurantes modernos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="btn bg-terracota-500 text-white btn-lg">
                  Começar Grátis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="btn btn-outline btn-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demonstração
                </button>
              </div>

              <div className="stats stats-vertical sm:stats-horizontal shadow bg-base-100">
                <div className="stat place-items-center">
                  <div className="stat-value text-terracota-500 hover:bg-transparent hover:scale-1.01 duration-300 ease-in-out">
                    500+
                  </div>
                  <div className="stat-desc">Restaurantes</div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-value text-terracota-500 hover:bg-transparent hover:scale-1.01 duration-300 ease-in-out">
                    50k+
                  </div>
                  <div className="stat-desc">Pedidos/Dia</div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-value text-terracota-500 hover:bg-transparent hover:scale-1.01 duration-300 ease-in-out">
                    99%
                  </div>
                  <div className="stat-desc">Uptime</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* <img
                src={heroImage}
                alt="Dashboard do sistema de gestão de cozinha"
                className="w-full h-auto rounded-2xl shadow-2xl"
              /> */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tudo que você precisa para
              <span className="bg-gradient-to-r from-terracota-500 to-terracota-400 bg-clip-text text-transparent">
                {" "}
                organizar sua cozinha
              </span>
            </h2>
            <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
              Ferramentas profissionais para aumentar a eficiência, reduzir
              erros e melhorar a experiência dos seus clientes.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {[
              {
                icon: ShoppingCart,
                title: "Gestão de Pedidos",
                desc: "Centralize todos os pedidos e mesas em uma única interface intuitiva.",
              },
              {
                icon: Clock,
                title: "Tempos de Preparo",
                desc: "Monitore e otimize os tempos de preparo com alertas automáticos e cronômetros inteligentes.",
              },
              {
                icon: Users,
                title: "Organização da Equipe",
                desc: "Distribua tarefas e acompanhe a produtividade da sua equipe de cozinha em tempo real.",
              },
              {
                icon: BarChart3,
                title: "Analytics Avançado",
                desc: "Relatórios detalhados sobre vendas, performance e tendências para decisões estratégicas.",
              },
              {
                icon: Smartphone,
                title: "Mobile First",
                desc: "Interface otimizada para tablets e smartphones, perfeita para o ambiente da cozinha.",
              },
            ].map((feature, LandingPage) => {
              const Icon = feature.icon;
              return (
                <div
                  key={LandingPage}
                  className="card bg-base-200 w-1/4 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="card-body items-center text-center">
                    <div className="w-16 h-16 bg-terracota-300 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white hover:bg-transparent hover:scale-1.01 duration-300 ease-in-out-content" />
                    </div>
                    <h3 className="card-title text-xl">{feature.title}</h3>
                    <p className="text-base-content/70">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div id="how-it-works" className="py-24 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Como Funciona
            </h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Em apenas 3 passos simples, transforme a operação da sua cozinha
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Download,
                number: "01",
                title: "Cadastre seu Restaurante",
                desc: "Configure seu perfil, cardápio e preferências em poucos minutos. Nossa equipe te ajuda na configuração inicial.",
              },
              {
                icon: Settings,
                number: "02",
                title: "Conecte seus Canais",
                desc: "Integre com iFood, Uber Eats, sistema de PDV e outros canais que você já utiliza. Tudo sincronizado automaticamente.",
              },
              {
                icon: Rocket,
                number: "03",
                title: "Comece a Otimizar",
                desc: "Gerencie todos os pedidos em uma tela só. Veja sua cozinha funcionar com máxima eficiência e produtividade.",
              },
            ].map((step, LandingPage) => {
              const Icon = step.icon;
              return (
                <div
                  key={LandingPage}
                  className="card bg-base-100 shadow-xl relative"
                >
                  <div className="badge bg-terracota-500 absolute -top-3 -right-3 w-12 h-12 text-white hover:bg-transparent hover:scale-1.01 duration-300 ease-in-out-content font-bold">
                    {step.number}
                  </div>
                  <div className="card-body items-center text-center">
                    <div className="w-20 h-20 bg-terracota-300 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="h-10 w-10 text-white hover:bg-transparent hover:scale-1.01 duration-300 ease-in-out" />
                    </div>
                    <h3 className="card-title text-xl mb-4">{step.title}</h3>
                    <p className="text-base-content/70">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button className="btn bg-terracota-500 text-white hbtn-lg">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-24 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Planos que se Adaptam ao
              <span className="bg-gradient-to-r from-terracota-500 to-terracota-400 bg-clip-text text-transparent">
                {" "}
                seu Negócio
              </span>
            </h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Escolha o plano ideal para o tamanho e necessidades do seu
              restaurante
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Essencial",
                price: "97",
                period: "/mês",
                desc: "Perfeito para pequenos restaurantes",
                features: [
                  "Até 200 pedidos/mês",
                  "1 tablet/dispositivo",
                  "Relatórios básicos",
                  "Suporte por email",
                  "Integração com 2 apps",
                ],
                buttonText: "Começar Grátis",
                popular: false,
              },
              {
                name: "Profissional",
                price: "197",
                period: "/mês",
                desc: "Ideal para restaurantes em crescimento",
                features: [
                  "Pedidos ilimitados",
                  "Até 5 tablets/dispositivos",
                  "Analytics avançado",
                  "Suporte prioritário",
                  "Integrações ilimitadas",
                  "API personalizada",
                  "Treinamento da equipe",
                ],
                buttonText: "Teste 15 Dias Grátis",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Personalizado",
                period: "",
                desc: "Para redes e grandes operações",
                features: [
                  "Tudo do Profissional",
                  "Dispositivos ilimitados",
                  "Múltiplas localizações",
                  "Gerente de sucesso dedicado",
                  "Customizações avançadas",
                  "SLA garantido",
                  "Onboarding personalizado",
                ],
                buttonText: "Falar com Vendas",
                popular: false,
              },
            ].map((plan, LandingPage) => (
              <div
                key={LandingPage}
                className={`card bg-base-200 shadow-xl hover:scale-110 duration-300 transition-all   ${
                  plan.popular ? "border-2 border-terracota-300 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="badge bg-terracota-500 text-white absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Star className="h-4 w-4 mr-1" />
                    Mais Popular
                  </div>
                )}

                <div className="card-body">
                  <div className="text-center mb-8">
                    <h3 className="card-title text-xl justify-center mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-base-content/70 mb-4">{plan.desc}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">
                        {plan.price === "Personalizado" ? "" : "R$ "}
                        {plan.price}
                      </span>
                      <span className="text-base-content/70 ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureLandingPage) => (
                      <li
                        key={featureLandingPage}
                        className="flex items-center"
                      >
                        <Check className="h-5 w-5 text-terracota-500 hover:bg-transparent hover:scale-1.01 duration-300 ease-in-out mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="card-actions justify-center">
                    <button
                      className={`btn btn-wide ${
                        plan.popular
                          ? "bg-terracota-500 text-white"
                          : "btn-outline"
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-base-content/70">
              Todos os planos incluem 15 dias de teste grátis • Sem compromisso
              • Cancele quando quiser
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
