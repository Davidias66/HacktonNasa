import { useState } from "react";

type IconName = "arrow" | "clock" | "menu" | "shield" | "signal" | "target" | "x";

const PRODUCT_URL = "";

const solutionFeatures = [
  ["01", "Check-in imediato", "Uma avaliação diária em segundos, sem formulários cansativos."],
  ["02", "Corpo interativo", "Uma visão corporal simples para localizar sintomas e alertas."],
  [
    "03",
    "Orientação contextual",
    "Dicas práticas de cuidado de acordo com cada sinal identificado.",
  ],
  ["04", "Operação local", "As funções essenciais continuam ativas sem conexão com a Terra."],
  ["05", "Multiplataforma", "Relógio, celular, tablet e tela da cabine em um só ecossistema."],
  ["06", "Interação multimodal", "Voz, gesto, toque e digitação para qualquer contexto de uso."],
];

const architecture = [
  {
    title: "Núcleo local",
    text: "Armazena dados, analisa tendências e gera alertas dentro da nave. Funciona sempre.",
  },
  {
    title: "Dispositivos",
    text: "Relógio coleta sinais; tablet detalha; telas da cabine mostram o panorama coletivo.",
  },
  {
    title: "Ponte com a Terra",
    text: "Envia resumos e recebe orientações quando houver conexão, sem interromper o cuidado.",
  },
];

const risks = [
  ["Consistência de dados", "Núcleo central com sincronização entre dispositivos."],
  ["Autorrelato subjetivo", "Combinação do check-in com sensores e tendências."],
  ["Falsos alarmes", "Limites personalizados e alertas graduais."],
  ["Privacidade a bordo", "Perfis privados e telas coletivas com dados agregados."],
  ["Segurança clínica", "O sistema orienta; casos críticos são escalados a especialistas."],
];

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    menu: <path d="M4 8h16M4 16h16" />,
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.4 2.8 8.1 7 10 4.2-1.9 7-5.6 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    signal: (
      <>
        <path d="M5 16.5a10 10 0 0 1 14 0M8.5 13a5 5 0 0 1 7 0" />
        <circle cx="12" cy="18" r=".8" fill="currentColor" stroke="none" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M21 12h-2M12 21v-2M3 12h2" />
      </>
    ),
    x: <path d="M6 6l12 12M18 6 6 18" />,
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {paths[name]}
    </svg>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className="flex items-center" href="#inicio" aria-label="ISIS — início">
      <img
        src="/isis-logo.png"
        alt="ISIS"
        className={compact ? "h-10 w-28 object-contain" : "h-14 w-40 object-contain"}
      />
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleProductAccess = () => {
    if (PRODUCT_URL) {
      window.open(PRODUCT_URL, "_blank", "noopener,noreferrer");
      return;
    }
    setShowNotice(true);
  };

  const navItems = [
    ["O desafio", "#desafio"],
    ["A solução", "#solucao"],
    ["Avaliação da ideia", "#avaliacao"],
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-white text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-black/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 md:px-10">
          <div onClick={closeMenu}>
            <Brand compact />
          </div>

          <nav
            className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.12em] md:flex"
            aria-label="Navegação principal"
          >
            {navItems.map(([label, href]) => (
              <a className="nav-link" href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>

          <button className="button-primary hidden md:flex" onClick={handleProductAccess}>
            Acessar sistema <Icon name="arrow" size={18} />
          </button>

          <button
            className="grid size-11 place-items-center md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <Icon name={menuOpen ? "x" : "menu"} size={23} />
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-white/15 bg-black px-5 py-4 md:hidden"
            aria-label="Navegação móvel"
          >
            {navItems.map(([label, href]) => (
              <a
                className="flex items-center justify-between border-b border-white/15 py-4 text-sm"
                href={href}
                onClick={closeMenu}
                key={href}
              >
                {label}
                <Icon name="arrow" size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section
          id="inicio"
          className="space-field relative flex min-h-screen items-center overflow-hidden bg-black pt-28 text-white"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="relative mx-auto grid w-full max-w-[1320px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="eyebrow flex items-center gap-3 text-white/50">
                <span className="h-px w-9 bg-white/50" /> Saúde autônoma em missões de longa duração
              </p>
              <h1 className="mt-8 max-w-3xl text-[clamp(3.8rem,8.5vw,8rem)] font-semibold leading-[0.87] tracking-[-0.075em]">
                Saúde em órbita.
                <span className="mt-2 block font-light text-white/45">Autonomia a bordo.</span>
              </h1>
              <p className="mt-9 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                ISIS integra sinais, contexto e orientação para que astronautas cuidem da própria
                saúde, mesmo longe da Terra.
              </p>
            </div>

            <div className="relative flex min-h-[320px] items-center justify-center border border-white/15 bg-black lg:min-h-[510px]">
              <span className="absolute right-5 top-5 size-2 rounded-full bg-white" />
              <img
                src="/isis-logo.png"
                alt="Logomarca ISIS com astronauta e pulso cardíaco"
                className="relative z-10 w-[92%] object-contain"
              />
              <p className="absolute bottom-5 left-5 right-5 border-t border-white/15 pt-4 text-[10px] uppercase tracking-[0.16em] text-white/40">
                Integração de Softwares de Indicadores da Saúde
              </p>
            </div>
          </div>
        </section>

        <section id="desafio" className="scroll-mt-20 bg-white py-24 md:py-32">
          <div className="mx-auto max-w-[1320px] px-5 md:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <div>
                <h2 className="max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                  O risco cresce em silêncio.
                </h2>
                <p className="mt-7 max-w-lg text-base leading-relaxed text-black/60">
                  Radiação, isolamento e baixa gravidade afetam a saúde física e mental. Processos
                  burocráticos fazem com que sinais de dor, estresse e exaustão sejam ignorados até
                  ameaçarem a missão.
                </p>
              </div>

              <div>
                <div className="grid border border-black md:grid-cols-[0.7fr_1.3fr]">
                  <div className="flex min-h-56 flex-col justify-between bg-black p-7 text-white">
                    <Icon name="signal" size={30} />
                    <div>
                      <span className="block text-7xl font-semibold tracking-[-0.07em]">20</span>
                      <span className="eyebrow text-white/50">minutos por sentido</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-9">
                    <p className="eyebrow text-black/40">O agravante: Marte</p>
                    <p className="mt-4 text-2xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">
                      A Terra não pode ser o cérebro do cuidado. Apenas um apoio.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-black/55">
                      Com atraso de comunicação, a tripulação precisa avaliar sinais e agir
                      localmente sem esperar uma resposta.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 border-x border-t border-black md:grid-cols-4">
                  {["Radiação", "Isolamento", "Baixa gravidade", "Ambiente hostil"].map(
                    (item, index) => (
                      <div
                        className="border-b border-black px-3 py-5 odd:border-r md:border-r md:px-4 last:md:border-r-0"
                        key={item}
                      >
                        <span className="font-mono text-[10px] text-black/35">0{index + 1}</span>
                        <p className="mt-3 text-sm font-semibold">{item}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solucao" className="scroll-mt-16 bg-black py-24 text-white md:py-32">
          <div className="mx-auto max-w-[1320px] px-5 md:px-10">
            <div className="grid gap-10 border-b border-white/20 pb-14 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                  Um ecossistema de saúde. Sempre presente, nunca invasivo.
                </h2>
              </div>
              <p className="max-w-lg text-base leading-relaxed text-white/55 lg:justify-self-end">
                O ISIS monitora a saúde no dia a dia com o mínimo de esforço e orienta o astronauta
                a cuidar do próprio bem-estar com autonomia.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {solutionFeatures.map(([number, title, text]) => (
                <article
                  className="min-h-64 border-b border-white/20 py-8 sm:px-7 sm:even:border-l lg:border-l lg:px-8 lg:first:border-l-0 lg:[&:nth-child(4)]:border-l-0"
                  key={number}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-white/30">{number}</span>
                    <span className="size-1.5 rounded-full bg-white" />
                  </div>
                  <h3 className="mt-16 text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-16 flex flex-col justify-between gap-8 border border-white p-7 md:flex-row md:items-center md:p-10">
              <div className="flex items-center gap-5">
                <span className="grid size-12 shrink-0 place-items-center border border-white">
                  <Icon name="target" size={23} />
                </span>
                <p className="max-w-2xl text-xl font-medium leading-snug tracking-[-0.02em] md:text-2xl">
                  O astronauta nunca fica esperando a Terra para cuidar de si.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="avaliacao" className="scroll-mt-16 bg-white py-24 md:py-32">
          <div className="mx-auto max-w-[1320px] px-5 md:px-10">
            <div className="border-b border-black pb-14">
              <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                Projetado para funcionar onde a conexão termina.
              </h2>
            </div>

            <div className="grid gap-12 border-b border-black py-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="eyebrow text-black/45">Pontos fortes</p>
                <p className="mt-5 max-w-sm text-lg leading-relaxed text-black/60">
                  Menos fricção para criar uma rotina de cuidado consistente, privada e
                  independente.
                </p>
              </div>
              <div className="grid border border-black sm:grid-cols-2">
                {[
                  ["Autonomia local", "Continua útil mesmo sem qualquer resposta da Terra."],
                  ["Uso em qualquer tela", "Acompanha o astronauta em toda a rotina."],
                  ["Interação flexível", "Voz, gesto, toque e visual cobrem diferentes situações."],
                  [
                    "Check-in em segundos",
                    "Quanto mais simples o registro, maior a adesão diária.",
                  ],
                ].map(([title, text]) => (
                  <div
                    className="border-b border-black p-6 last:border-b-0 sm:border-b-0 sm:odd:border-r sm:[&:nth-child(-n+2)]:border-b"
                    key={title}
                  >
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-black/55">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-16">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                    Três camadas. Uma experiência contínua.
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-black/50">
                  Os dispositivos conversam com o núcleo local; a Terra recebe somente o que
                  importa, quando for possível.
                </p>
              </div>
              <div className="mt-10 grid border border-black lg:grid-cols-3">
                {architecture.map((item, index) => (
                  <article
                    className="flex min-h-56 flex-col justify-between border-b border-black p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                    key={item.title}
                  >
                    <div className="flex justify-end">
                      {index === 0 ? (
                        <Icon name="shield" />
                      ) : index === 1 ? (
                        <Icon name="target" />
                      ) : (
                        <Icon name="signal" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold tracking-[-0.03em]">{item.title}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-black/55">{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-10 bg-black p-7 text-white md:p-10 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <h3 className="max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em]">
                  Segurança pela prevenção, não pela reação.
                </h3>
              </div>
              <div className="border-t border-white/25">
                {risks.map(([risk, mitigation]) => (
                  <div
                    className="grid gap-2 border-b border-white/25 py-4 sm:grid-cols-[0.65fr_1.35fr] sm:gap-6"
                    key={risk}
                  >
                    <span className="text-sm font-semibold">{risk}</span>
                    <span className="text-sm leading-relaxed text-white/50">{mitigation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="acesso"
          className="border-y border-black bg-white px-5 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-[1320px]">
            <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
              <h2 className="max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                O cuidado começa a bordo.
              </h2>
              <button
                className="group flex min-h-16 w-full items-center justify-between bg-black px-6 text-left text-sm font-semibold text-white transition-transform hover:-translate-y-1 lg:w-72"
                onClick={handleProductAccess}
              >
                Acessar a ISIS
                <span className="transition-transform group-hover:translate-x-1">
                  <Icon name="arrow" size={21} />
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 px-5 py-10 md:flex-row md:items-end md:px-10">
          <div>
            <Brand />
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/40">
              Integração de Softwares de Indicadores da Saúde.
            </p>
          </div>
          <div className="flex gap-8 text-xs text-white/45">
            <a className="hover:text-white" href="#inicio">
              Voltar ao topo
            </a>
            <span>© 2025 ISIS</span>
          </div>
        </div>
      </footer>

      {showNotice && (
        <div
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto flex max-w-md items-center gap-4 border border-white bg-black p-4 text-white shadow-2xl"
          role="status"
        >
          <span className="grid size-10 shrink-0 place-items-center border border-white/30">
            <Icon name="clock" size={20} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">ISIS em desenvolvimento</p>
            <p className="mt-0.5 text-xs leading-relaxed text-white/50">
              O acesso será conectado assim que a próxima etapa estiver pronta.
            </p>
          </div>
          <button
            className="grid size-8 shrink-0 place-items-center text-white/45 hover:text-white"
            onClick={() => setShowNotice(false)}
            aria-label="Fechar aviso"
          >
            <Icon name="x" size={17} />
          </button>
        </div>
      )}
    </div>
  );
}
