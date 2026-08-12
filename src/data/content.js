// Todo o texto do site fica aqui. Edite este arquivo pra atualizar o conteúdo
// sem precisar tocar nos componentes.

export const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#ferramentas", label: "Ferramentas" },
  { href: "#contato", label: "Contato" },
];

export const hero = {
  eyebrow: "Fortaleza · CE — tráfego, automação e IA",
  title: "Uma pessoa cuidando de todo o fluxo de crescimento da sua empresa.",
  subtitle:
    "Tráfego pago, automações com IA, chatbot de atendimento e o site por trás de tudo — eu monto e conecto cada peça, pra você não precisar contratar uma agência inteira.",
  ctaPrimary: "Falar comigo",
  ctaSecondary: "Ver serviços",
  badge: "disponível pra novos projetos",
  photo: "img/perfil2.jpeg",
};

// Ícones vêm de lucide-react. Troque o campo "icon" por outro nome de
// https://lucide.dev/icons se quiser mudar.
export const services = [
  {
    n: "01",
    title: "Atrair",
    label: "Tráfego pago",
    icon: "Target",
    desc: "Campanhas no Meta Ads e Google Ads focadas em uma métrica só: custo por resultado real, não curtida.",
  },
  {
    n: "02",
    title: "Automatizar",
    label: "Automação e IA",
    icon: "Workflow",
    desc: "Fluxos que conectam suas ferramentas e tiram tarefa repetitiva da sua rotina, usando IA onde faz diferença de verdade.",
  },
  {
    n: "03",
    title: "Responder",
    label: "Chatbots de atendimento",
    icon: "MessageCircle",
    desc: "Atendimento automático que qualifica lead e responde rápido, 24 horas, sem perder o tom da sua marca.",
  },
  {
    n: "04",
    title: "Sustentar",
    label: "Sites e sistemas",
    icon: "Code2",
    desc: "O site, o sistema ou o painel que fica rodando por trás de tudo isso, sem depender de mil ferramentas soltas.",
  },
];

// Ferramentas mostradas na faixa animada. "file" é o caminho da imagem
// dentro de /public — reaproveite os arquivos do repositório antigo.
export const tools = [
  { name: "Meta Ads", file: "img/meta.png" },
  { name: "Google Ads", file: "img/adwords.png" },
  { name: "WhatsApp", file: "img/whatsapp.png" },
  { name: "WordPress", file: "img/wordpress.png" },
  { name: "TikTok", file: "img/tiktok.png" },
  { name: "Instagram", file: "img/instagram.png" },
  { name: "Facebook", file: "img/facebook.png" },
  { name: "GitHub", file: "img/github.png" },
  { name: "JavaScript", file: "img/js.png" },
  { name: "HTML5", file: "img/html5.png" },
  { name: "CSS3", file: "img/css3.png" },
];

export const about = {
  eyebrow: "Quem monta o pipeline",
  name: "Wendel Davy Viana",
  p1: "Analista de Planejamento e formado em Análise e Desenvolvimento de Sistemas, com mais de 3 anos de experiência em tecnologia, desenvolvimento de software e gestão de tráfego pago. Atualmente, foco em automação, Inteligência Artificial e soluções digitais.",
  p2: "Essa mistura — dados, tecnologia e automação — é o que uso todos os dias, e é a mesma coisa que aplico pra ajudar empresas a vender mais sem precisar contratar um time inteiro pra isso.",
};

export const contact = {
  eyebrow: "Vamos conversar",
  title: "Economize seu tempo. Entre em contato.",
  subtitle:
    "Deixe seu e-mail que eu retorno com um diagnóstico gratuito sobre onde a automação ou o tráfego pago pode destravar seus resultados.",
  formAction: "https://api.sheetmonkey.io/form/gqPtdWoiBJ4ZmcpNrZvYQT",
};

export const footer = {
  github: "https://github.com/wdavyviana",
  instagram: "",
};
