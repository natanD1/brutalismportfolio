import type { Translations } from "../types";

export const TRANSLATIONS: Translations = {
	en: {
		nav: { about: "ABOUT", work: "WORK", stack: "STACK", contact: "CONTACT" },
		hero: {
			name: "NATAN DOURADO.",
			creative: "A (CREATIVE)",
			developer: "DEVELOPER.",
		},
		about: {
			title: "About.exe",
			greeting:
				"Hi! I'm Natan, a developer who believes code is a creative medium.",
			intro_1: "I build things that are not only functional but also",
			intro_2: "fun to use.",
			bio: "I'm passionate about clean UI, brutalist design, and finding weird solutions to hard problems. When I'm not coding, I'm probably listening to obscure vinyl or exploring pixel art.",
		},
		stack: {
			title: "Stack.cfg",
			intro:
				"The technologies and tools I use to build high-performance digital solutions.",
		},
		contact: {
			title: "Contact.sh",
			intro: "Let's build something weird together.",
			success_title: "Got it!",
			success_msg: "Thanks for reaching out. I'll get back to you soon.",
			email_label: "YOUR_EMAIL",
			message_label: "MESSAGE",
			send_btn: "SEND_MESSAGE",
		},
		work: {
			title: "Work.dir",
			scroll_hint: "(Scroll inside to see your Starred Repos)",
			loading: "Connecting to GitHub API...",
			error: "Failed to load repositories.",
			view_btn: "View Project",
		},
		repo: {
			detected: "GITHUB_REPO_DETECTED",
			language: "Language:",
			stars: "Stars:",
			readme: "README.md:",
			link: "GITHUB_LINK_ ->",
			no_readme: "No README found.",
			error_readme: "(Error fetching README)",
		},
	},
	pt: {
		nav: {
			about: "SOBRE",
			work: "PROJETOS",
			stack: "STACK",
			contact: "CONTATO",
		},
		hero: {
			name: "NATAN DOURADO.",
			creative: "UM (CRIATIVO)",
			developer: "DESENVOLVEDOR.",
		},
		about: {
			title: "Sobre.exe",
			greeting:
				"Eu sou o Natan Dourado, um Desenvolvedor Web e UX/UI designer.",
			intro_1:
				"Entusiasta por criar experiências digitais intuitivas, funcionais e",
			intro_2: "esteticamente agradáveis.",
			bio: "Com expertise em React, Typescript e React Native para mobile, além de Tailwind CSS e design systems, desenvolvo aplicações web modernas com foco em performance, acessibilidade e usabilidade, garantindo interfaces fluidas e eficientes. Tenho experiência no ciclo completo de desenvolvimento de produtos digitais, desde pesquisa e wireframing até a criação de designs no Figma, implementação front-end e otimização da experiência do usuário. Acredito que um bom design vai além do visual, sendo orientado por dados, comportamento do usuário e boas práticas de usabilidade. Minha missão é transformar ideias em interfaces fluidas e eficientes, combinando design estratégico com código de alta qualidade.",
		},
		stack: {
			title: "Stack.cfg",
			intro:
				"As tecnologias e ferramentas que utilizo para construir soluções digitais de alta performance.",
		},
		contact: {
			title: "Contato.sh",
			intro: "Vamos criar algo estranho juntos.",
			success_title: "Recebido!",
			success_msg: "Obrigado pelo contato. Retorno em breve.",
			email_label: "SEU_EMAIL",
			message_label: "MENSAGEM",
			send_btn: "ENVIAR_MENSAGEM",
		},
		work: {
			title: "Projetos.dir",
			scroll_hint: "(Role para ver seus Repositórios Favoritos)",
			loading: "Conectando à API do GitHub...",
			error: "Falha ao carregar repositórios.",
			view_btn: "Ver Projeto",
		},
		repo: {
			detected: "REPO_GITHUB_DETECTADO",
			language: "Linguagem:",
			stars: "Estrelas:",
			readme: "LEIA-ME.md:",
			link: "LINK_GITHUB_ ->",
			no_readme: "Nenhum README encontrado.",
			error_readme: "(Erro ao buscar README)",
		},
	},
};
