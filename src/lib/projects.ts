export type Project = {
    slug: string;
    title: string;

    problemStatement?: string;
    solution?: string;
    features?: string[];
    technicalFeatures?: string[];
    technologies?: string[];
    myRole?: string;
    challenges?: string[];
    learnings?: string[];
    nextSteps?: string[];
    conclusion?: string;
    onlineDemo?: string;

    description: string;
    images: string[];
    link: string;
    github: string;
}

export const en: Project[] = [
    {
        slug: "gireh-manager",
        title: "Gireh Manager",
        description: `Gireh Manager is a web application developed using React, Next.js, Tailwind CSS, and Firebase. Its primary objective is to efficiently manage inventory for an optics store, while also providing a user-friendly point-of-sale (POS) system for selling products to customers.`,
        problemStatement: `The current desktop application used by the optics store is inconvenient and limited in accessibility. To address these shortcomings, the store owner sought a web-based solution that allows remote access for inventory management and includes a user-friendly POS system for customer transactions.`,
        solution: `To meet the store owner's requirements, I created a web application that enables seamless inventory management accessible from anywhere. Additionally, I implemented a user-friendly POS system, empowering staff to efficiently sell products to customers.`,
        technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
        myRole: `I was the sole developer of this project. I was responsible for the design and development of the
        web application.`,
        features: [
            "Comprehensive Reports: Empowering the store owner with valuable insights, the web application boasts an array of comprehensive reports. These reports provide crucial data on sales, inventory levels, and customer trends, enabling informed decision-making and strategic planning.",
            "Real-Time Notifications: Enhancing operational efficiency, the system features real-time notifications. Staff members receive timely alerts about stock updates, low inventory levels, or new orders, ensuring prompt action and minimizing potential disruptions.",
            "Streamlined Frame and Lenses Management: Seamlessly managing the optics store's vast inventory, the web application includes intuitive features for organizing and tracking frames and lenses. Staff members can effortlessly update stock availability, add new products, and track detailed information, simplifying inventory management tasks.",
        ],
        technicalFeatures: [
            "Universal Database Hook: To ensure flexibility and compatibility, the web application incorporates a powerful universal database hook. This feature allows seamless integration with various databases, ensuring optimal performance and future scalability.",
            "Progressive Web App (PWA) Capability: Elevating accessibility and user experience, the application harnesses the power of Progressive Web App (PWA) technology. Customers and staff can conveniently access the application on any device, enjoying app-like functionality and offline capabilities.",
            "Catalog System Integration: For a unified and efficient workflow, the web application seamlessly integrates with the store's catalog system. This integration enables automatic synchronization of product details, ensuring accurate and up-to-date information for both inventory management and customer-facing interactions.",
        ],
        challenges: [
            `One of the primary challenges I encountered was my limited experience with Next.js and Tailwind CSS. However, I embraced this opportunity to learn and familiarize myself with these technologies while building the web application.`,
        ],
        learnings: [
            "Next.js Mastery: I deepened my understanding of Next.js, a powerful framework that facilitates efficient server-side rendering and seamless client-side navigation. I became adept at leveraging Next.js to develop performant and scalable web applications.",
            "Styling with Tailwind CSS: I honed my skills in utilizing Tailwind CSS, an innovative utility-first CSS framework. I learned to leverage its comprehensive set of pre-built styles and intuitive classes to rapidly create visually appealing and responsive user interfaces.",
            "Firebase Integration: I acquired expertise in integrating Firebase, a robust and versatile platform, into web applications. This included leveraging Firebase's real-time database, authentication, and hosting capabilities, allowing for seamless data management, secure user authentication, and efficient deployment.",
            "Full-Stack Proficiency: By combining Next.js, Tailwind CSS, and Firebase, I obtained a comprehensive understanding of developing full-stack web applications. This encompassed the frontend development process, backend integration, data management, and deployment, empowering me to deliver end-to-end solutions.",
            "Problem-Solving and Debugging: Throughout the development journey, I encountered and resolved various technical challenges. This experience enhanced my ability to diagnose issues, employ effective debugging strategies, and employ problem-solving skills, ultimately strengthening my overall development proficiency.",
            "Best Practices and Optimization: I familiarized myself with industry best practices and optimization techniques for web application development. This includes code organization, performance optimization, security considerations, and adhering to coding standards, ensuring the delivery of high-quality and efficient solutions.",
        ],

        nextSteps: [
            `I plan to add more features to the web application such as generating reports, managing
            customers, and managing suppliers.`,
        ],

        conclusion: `Throughout this project, I gained valuable expertise in developing web applications using Next.js, Tailwind CSS, and Firebase. This experience enhanced my proficiency in utilizing these technologies effectively to build robust and scalable solutions.`,

        images: ["/images/gireh-manager.png"],
        link: "/projects/gireh-manager",
        github: "https://github.com/FellipeLorram",
    },
    {
        slug: "gireh-catalog",
        title: "Gireh Catalog",
        description: `Gireh Catalog is a web application built with React, Next.js, Tailwind CSS, and Firebase.
        It provides a platform for the optics store's customers
        to browse products.`,

        problemStatement: `The optics store's current website is outdated and lacks the ability to display the store's
        products. To address this issue, the store owner sought a web-based solution that allows
        customers to browse the store's products.
        It is fully integrated with the Gireh Manager web application, which enables the store owner to
        easily manage the products displayed on the website.
        `,

        solution: `Redefining the Optics Store Experience: A Captivating Web Application Empowering Seamless Product Exploration
        In response to the store owner's aspirations, I meticulously crafted a groundbreaking web application that revolutionizes the way customers engage with the optics store's extensive product range. Seamlessly merging captivating design with cutting-edge functionality, the application introduces an array of features designed to delight customers at every click.`,
        features: [
            "Intuitive Cart: Streamlining the shopping experience, customers can effortlessly add desired products to their cart, creating a frictionless path to purchase.",
            "Personalized Favorites Screen: Empowering customers to curate their own personalized wishlist, the favorites screen provides a delightful and convenient way to keep track of coveted items.",
            "Owner's Panel: Providing the store owner with an exclusive insight into the customer journey, the owner's panel grants real-time access to leads, allowing for prompt and informed follow-ups."
        ],
        technicalFeatures: [
            "Infinite Scroll: Enhancing user engagement, the application seamlessly loads additional products as customers explore, ensuring an uninterrupted and immersive browsing experience.",
            "Progressive Web App (PWA): Elevating convenience and accessibility, the application harnesses PWA technology, enabling customers to conveniently access and interact with the web application across various devices without compromising performance.",
            "POS System Integration: Seamlessly integrating with the store's point-of-sale system, the web application harmonizes online and in-store operations, streamlining inventory management and facilitating efficient customer transactions."
        ],

        technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],

        myRole: `I was the sole developer of this project. I was responsible for the design and development of the
        web application.`,

        challenges: [
            `One of the primary challenges I encountered was my limited experience with Next.js and Tailwind CSS. However, I embraced this opportunity to learn and familiarize myself with these technologies while building the web application.`,
        ],

        learnings: [
            "Next.js Mastery: I deepened my understanding of Next.js, a powerful framework that facilitates efficient server-side rendering and seamless client-side navigation. I became adept at leveraging Next.js to develop performant and scalable web applications.",
            "Styling with Tailwind CSS: I honed my skills in utilizing Tailwind CSS, an innovative utility-first CSS framework. I learned to leverage its comprehensive set of pre-built styles and intuitive classes to rapidly create visually appealing and responsive user interfaces.",
            "Firebase Integration: I acquired expertise in integrating Firebase, a robust and versatile platform, into web applications. This included leveraging Firebase's real-time database, authentication, and hosting capabilities, allowing for seamless data management, secure user authentication, and efficient deployment.",
            "Full-Stack Proficiency: By combining Next.js, Tailwind CSS, and Firebase, I obtained a comprehensive understanding of developing full-stack web applications. This encompassed the frontend development process, backend integration, data management, and deployment, empowering me to deliver end-to-end solutions.",
            "Problem-Solving and Debugging: Throughout the development journey, I encountered and resolved various technical challenges. This experience enhanced my ability to diagnose issues, employ effective debugging strategies, and employ problem-solving skills, ultimately strengthening my overall development proficiency.",
            "Best Practices and Optimization: I familiarized myself with industry best practices and optimization techniques for web application development. This includes code organization, performance optimization, security considerations, and adhering to coding standards, ensuring the delivery of high-quality and efficient solutions.",
        ],

        nextSteps: [
            `I plan to add more features to the web application, such as allowing customers to place orders`,
        ],

        conclusion: `Throughout this project, I gained valuable expertise in developing web applications using Next.js, Tailwind CSS, and Firebase. This experience enhanced my proficiency in utilizing these technologies effectively to build robust and scalable solutions.`,

        images: ["/images/gireh-catalog.png"],
        link: "/projects/gireh-catalog",
        onlineDemo: "https://gireh-catalog.vercel.app/",
        github: "Private",
    },
    {
        slug: "mindcare-co",
        title: "MindCare Co.",
        description: `MindCare Co. is a web application built with React, Styled Components, and Node with Express.
        A SASS built for psychologists manage patients and appointments.`,

        problemStatement: `The current desktop application used by the psychology clinic is inconvenient and limited in accessibility. To address these shortcomings, the clinic owner sought a web-based solution that allows remote access for managing patients and appointments.`,

        solution: `To meet the clinic owner's requirements, I created a web application that enables seamless management of patients and appointments accessible from anywhere.`,

        technologies: ["React", "Styled Components", "Node", "Express", "MongoDB"],

        myRole: `I was the sole developer of this project. I was responsible for the design and development of the
        web application.`,

        challenges: [
            `One of the primary challenges I encountered was my limited experience with Node and Express. However, I embraced this opportunity to learn and familiarize myself with these technologies while building the web application.`,
        ],

        learnings: [
            `I learned how to build a web application with Node and Express.`,
        ],

        nextSteps: [
            `I plan to add more features to the web application such as generating reports, managing
            patients, and managing appointments.`,
        ],

        conclusion: `Throughout this project, I gained valuable expertise in developing web applications using Node and Express. This experience enhanced my proficiency in utilizing these technologies effectively to build robust and scalable solutions.`,
        images: ["/images/mindcare-co.png"],
        link: "/projects/mindcare-co",
        github: "https://github.com/FellipeLorram/MindCare",
        onlineDemo: "https://mind-care.vercel.app/"
    },
    {
        slug: "optical-manager",
        title: "Optical Manager",
        description: `Optical Manager is a web application built with React, Styled Components, and Node with Express.
        The main purpose of this application is to manage the optics store's inventory.`,

        problemStatement: `The main idea is to create a sass application that any optics store can use to manage their inventory. The application should be able to manage products, suppliers, and customers. It should also be able to generate reports and manage users.`,

        solution: `To meet the problem statement, I created a web application that enables seamless management of inventory accessible from anywhere.`,

        technologies: ["React", "Styled Components", "Node", "Express", "MongoDB"],

        myRole: `I was the sole developer of this project. I was responsible for the design and development of the
        web application.`,

        challenges: [
            `One of the primary challenges I encountered was my limited experience with Node and Express. However, I embraced this opportunity to learn and familiarize myself with these technologies while building the web application.`,
        ],

        learnings: [
            `I learned how to build a web application with Node and Express.`,
        ],

        nextSteps: [
            `I plan to add more features to the web application such as generating reports, managing
            customers, and managing suppliers.`,
        ],

        conclusion: `Throughout this project, I gained valuable expertise in developing web applications using Node and Express. This experience enhanced my proficiency in utilizing these technologies effectively to build robust and scalable solutions.`,

        images: ["/images/optical-manager.png"],
        link: "/projects/optical-manager",
        github: "https://github.com/FellipeLorram/Optical-manager",
        onlineDemo: "https://optical-manager.vercel.app/"
    },
    {
        slug: "opto-room",
        title: "Opto Room",
        description: `Opto Room is a web application built with React, Styled Components, and Firebase.
        The main idea of this application is to provide a platform for optometrists to manage their
        patients and appointments.`,

        problemStatement: `The main idea is to create a sass application that any optometrist can use to manage their patients and appointments. The application should be able to manage patients, appointments, and prescriptions. It should also be able to generate reports and manage users.`,

        solution: `To meet the problem statement, I created a web application that enables seamless management of patients and appointments accessible from anywhere.`,

        technologies: ["React", "Styled Components", "Firebase"],

        myRole: `I was the sole developer of this project. I was responsible for the design and development of the
        web application.`,

        challenges: [
            `One of the primary challenges I encountered was my limited experience with Firebase. However, I embraced this opportunity to learn and familiarize myself with these technologies while building the web application.`,
        ],

        learnings: [
            `I learned how to build a web application with Firebase.`,
        ],

        nextSteps: [
            `I plan to add more features to the web application such as generating reports, managing
            patients, and managing appointments.`,
        ],

        conclusion: `Throughout this project, I gained valuable expertise in developing web applications using Firebase. This experience enhanced my proficiency in utilizing these technologies effectively to build robust and scalable solutions.`,

        images: ["/images/opto-room.png"],
        link: "/projects/opto-room",
        github: "https://github.com/FellipeLorram/opto-room",
        onlineDemo: "https://opto-room-kd20nwaor-fellipelorram.vercel.app/"
    },
];

export const pt: Project[] = [
    {
        slug: "gireh-manager",
        title: "Gireh Manager",
        description: `Gireh Manager é uma aplicação web desenvolvida usando React, Next.js, Tailwind CSS e Firebase. Seu objetivo principal é gerenciar de forma eficiente o estoque de uma loja de óptica, além de oferecer um sistema de ponto de venda (POS) amigável ao usuário para vender produtos aos clientes.`,
        problemStatement: `A aplicação desktop atualmente utilizada pela ótica é inconveniente e possui limitações de acessibilidade. Para solucionar essas deficiências, o proprietário da loja buscou uma solução baseada na web que permitisse acesso remoto para o gerenciamento de estoque e incluísse um sistema de ponto de venda (POS) amigável ao usuário para as transações com os clientes.`,
        solution: `Para atender aos requisitos do proprietário da loja, criei uma aplicação web que possibilita um gerenciamento de estoque contínuo, acessível de qualquer lugar. Além disso, implementei um sistema de ponto de venda (POS) amigável ao usuário, capacitando a equipe a vender produtos de forma eficiente para os clientes.`,
        technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
        myRole: `Fui o único desenvolvedor desse projeto. Fui responsável pelo design e desenvolvimento da aplicação web.`,
        features: [
            "Relatórios Abrangentes: Capacitando o proprietário da loja com insights valiosos, a aplicação web conta com uma variedade de relatórios abrangentes. Esses relatórios fornecem dados cruciais sobre vendas, níveis de estoque e tendências dos clientes, possibilitando tomadas de decisão informadas e planejamento estratégico.",
            "Notificações em Tempo Real: Aumentando a eficiência operacional, o sistema possui recursos de notificações em tempo real. Os membros da equipe recebem alertas imediatos sobre atualizações de estoque, níveis baixos de inventário ou novos pedidos, garantindo ação rápida e minimizando possíveis interrupções.",
            "Gerenciamento Simplificado de Armações e Lentes: Gerenciando com facilidade o vasto inventário da loja de óptica, a aplicação web inclui recursos intuitivos para organizar e rastrear armações e lentes. Os membros da equipe podem atualizar facilmente a disponibilidade do estoque, adicionar novos produtos e acompanhar informações detalhadas, simplificando as tarefas de gerenciamento de estoque.",
        ],
        technicalFeatures: [
            "Universal Database Hook: Para garantir flexibilidade e compatibilidade, a aplicação web incorpora um poderoso universal database hook. Essa funcionalidade permite integração perfeita com vários bancos de dados, garantindo desempenho otimizado e escalabilidade futura.",
            "Capacidade de Progressive Web App (PWA): Elevando a acessibilidade e a experiência do usuário, a aplicação utiliza a tecnologia Progressive Web App (PWA). Clientes e equipe podem acessar convenientemente a aplicação em qualquer dispositivo, desfrutando de funcionalidades semelhantes a um aplicativo e capacidades offline.",
            "Integração com Sistema de Catálogo: Para um fluxo de trabalho unificado e eficiente, a aplicação web integra-se perfeitamente com o sistema de catálogo da loja. Essa integração permite a sincronização automática dos detalhes dos produtos, garantindo informações precisas e atualizadas tanto para o gerenciamento de estoque quanto para as interações com os clientes.",
        ],
        challenges: [
            "Um dos principais desafios que encontrei foi minha experiência limitada com Next.js e Tailwind CSS. No entanto, abracei essa oportunidade para aprender e me familiarizar com essas tecnologias enquanto desenvolvia a aplicação web.",
        ],

        learnings: [
            "Domínio do Next.js: Aprofundei meu entendimento do Next.js, um framework poderoso que facilita a renderização eficiente no lado do servidor e a navegação do lado do cliente. Tornei-me habilidoso em aproveitar o Next.js para desenvolver aplicações web performáticas e escaláveis.",
            "Estilização com o Tailwind CSS: Aperfeiçoei minhas habilidades em utilizar o Tailwind CSS, um inovador framework de CSS orientado a utilidades. Aprendi a aproveitar seu amplo conjunto de estilos pré-criados e classes intuitivas para criar interfaces de usuário visualmente atraentes e responsivas de forma rápida.",
            "Integração com o Firebase: Adquiri expertise em integrar o Firebase, uma plataforma robusta e versátil, em aplicações web. Isso incluiu aproveitar o banco de dados em tempo real, autenticação e recursos de hospedagem do Firebase, permitindo o gerenciamento contínuo de dados, autenticação segura de usuários e implantação eficiente.",
            "Proficiência Full-Stack: Ao combinar Next.js, Tailwind CSS e Firebase, obtive um entendimento abrangente do desenvolvimento de aplicações web full-stack. Isso englobou o processo de desenvolvimento frontend, integração com o backend, gerenciamento de dados e implantação, capacitando-me a fornecer soluções completas.",
            "Resolução de Problemas e Depuração: Ao longo da jornada de desenvolvimento, encontrei e resolvi diversos desafios técnicos. Essa experiência aprimorou minha capacidade de diagnosticar problemas, empregar estratégias eficazes de depuração e utilizar habilidades de resolução de problemas, fortalecendo minha proficiência geral em desenvolvimento.",
            "Melhores Práticas e Otimização: Familiarizei-me com as melhores práticas da indústria e técnicas de otimização para o desenvolvimento de aplicações web. Isso inclui organização de código, otimização de desempenho, considerações de segurança e aderência a padrões de codificação, garantindo a entrega de soluções de alta qualidade e eficiência.",
        ],

        nextSteps: [
            "Planejo adicionar mais recursos à aplicação web.",
        ],
        conclusion: `Ao longo deste projeto, adquiri expertise valiosa no desenvolvimento de aplicações web utilizando Next.js, Tailwind CSS e Firebase. Essa experiência aprimorou minha proficiência em utilizar essas tecnologias de forma eficaz para construir soluções robustas e escaláveis.`,

        images: ["/images/gireh-manager.png"],
        link: "/projects/gireh-manager",
        github: "https://github.com/FellipeLorram",
    },
    {
        slug: "gireh-catalog",
        title: "Gireh Catalog",

        description: `Gireh Catalog é uma aplicação web construída com React, Next.js, Tailwind CSS e Firebase. Ele fornece uma plataforma para os clientes da Ótica navegarem pelos produtos.`,
        problemStatement: `O website atual da loja de óptica está desatualizado e não possui a capacidade de exibir os produtos da loja. Para solucionar esse problema, o proprietário da loja buscou uma solução baseada na web que permitisse aos clientes navegar pelos produtos da loja. Está totalmente integrado com a aplicação web Gireh Manager, o que permite ao proprietário da loja gerenciar facilmente os produtos exibidos no site.
        `,

        solution: `Redefinindo a Experiência da Loja de Óptica: Uma Aplicação Web Cativante que Capacita a Exploração Perfeita dos Produtos
        Em resposta às aspirações do proprietário da loja, criei cuidadosamente uma aplicação web inovadora que revoluciona a forma como os clientes interagem com a extensa variedade de produtos da loja de óptica. Fundindo de forma harmoniosa um design cativante com funcionalidades de ponta, a aplicação apresenta uma série de recursos projetados para encantar os clientes a cada clique.`,

        features: [
            "Carrinho Intuitivo: Simplificando a experiência de compra, os clientes podem adicionar produtos desejados ao carrinho de forma fácil e intuitiva, criando um caminho livre de obstáculos para a compra.",
            "Tela de Favoritos Personalizada: Capacitando os clientes a criar sua própria lista de desejos personalizada, a tela de favoritos oferece uma forma encantadora e conveniente de acompanhar os itens desejados.",
            "Painel do Proprietário: Fornecendo ao proprietário da loja uma visão exclusiva da jornada do cliente, o painel do proprietário oferece acesso em tempo real aos leads, permitindo um acompanhamento ágil e informado."
        ],
        technicalFeatures: [
            "Rolagem Infinita: Aumentando o engajamento do usuário, a aplicação carrega automaticamente produtos adicionais à medida que os clientes exploram, garantindo uma experiência de navegação contínua e imersiva.",
            "Progressive Web App (PWA): Elevando a conveniência e acessibilidade, a aplicação utiliza a tecnologia PWA, permitindo que os clientes acessem e interajam com a aplicação web de forma conveniente em vários dispositivos, sem comprometer o desempenho.",
            "Integração com Sistema de Ponto de Venda (POS): Integrando-se perfeitamente ao sistema de ponto de venda da loja, a aplicação web harmoniza as operações online e na loja física, simplificando o gerenciamento de estoque e facilitando as transações eficientes com os clientes."
        ],

        technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],

        challenges: [
            "Um dos principais desafios que encontrei foi minha experiência limitada com Next.js e Tailwind CSS. No entanto, abracei essa oportunidade para aprender e me familiarizar com essas tecnologias enquanto desenvolvia a aplicação web.",
        ],

        learnings: [
            "Domínio do Next.js: Aprofundei meu entendimento do Next.js, um framework poderoso que facilita a renderização eficiente no lado do servidor e a navegação do lado do cliente. Tornei-me habilidoso em aproveitar o Next.js para desenvolver aplicações web performáticas e escaláveis.",
            "Estilização com o Tailwind CSS: Aperfeiçoei minhas habilidades em utilizar o Tailwind CSS, um inovador framework de CSS orientado a utilidades. Aprendi a aproveitar seu amplo conjunto de estilos pré-criados e classes intuitivas para criar interfaces de usuário visualmente atraentes e responsivas de forma rápida.",
            "Integração com o Firebase: Adquiri expertise em integrar o Firebase, uma plataforma robusta e versátil, em aplicações web. Isso incluiu aproveitar o banco de dados em tempo real, autenticação e recursos de hospedagem do Firebase, permitindo o gerenciamento contínuo de dados, autenticação segura de usuários e implantação eficiente.",
            "Proficiência Full-Stack: Ao combinar Next.js, Tailwind CSS e Firebase, obtive um entendimento abrangente do desenvolvimento de aplicações web full-stack. Isso englobou o processo de desenvolvimento frontend, integração com o backend, gerenciamento de dados e implantação, capacitando-me a fornecer soluções completas.",
            "Resolução de Problemas e Depuração: Ao longo da jornada de desenvolvimento, encontrei e resolvi diversos desafios técnicos. Essa experiência aprimorou minha capacidade de diagnosticar problemas, empregar estratégias eficazes de depuração e utilizar habilidades de resolução de problemas, fortalecendo minha proficiência geral em desenvolvimento.",
            "Melhores Práticas e Otimização: Familiarizei-me com as melhores práticas da indústria e técnicas de otimização para o desenvolvimento de aplicações web. Isso inclui organização de código, otimização de desempenho, considerações de segurança e aderência a padrões de codificação, garantindo a entrega de soluções de alta qualidade e eficiência.",
        ],

        nextSteps: [
            "Planejo adicionar mais recursos à aplicação web.",
        ],
        conclusion: `Ao longo deste projeto, adquiri expertise valiosa no desenvolvimento de aplicações web utilizando Next.js, Tailwind CSS e Firebase. Essa experiência aprimorou minha proficiência em utilizar essas tecnologias de forma eficaz para construir soluções robustas e escaláveis.`,

        images: ["/images/gireh-catalog.png"],
        link: "/projects/gireh-catalog",
        onlineDemo: "https://gireh-catalog.vercel.app/",
        github: "Private",
    },
    {
        slug: "mindcare-co",
        title: "MindCare Co.",

        description: "MindCare Co. é uma aplicação web construída com React, Styled Components e Node com Express. Uma SASS desenvolvida para psicólogos gerenciarem pacientes e agendamentos.",
        problemStatement: "A aplicação desktop atualmente utilizada pela clínica de psicologia é inconveniente e possui limitações de acessibilidade. Para solucionar essas deficiências, o proprietário da clínica buscou uma solução baseada na web que permitisse o acesso remoto para gerenciar pacientes e agendamentos.",

        solution: "Para atender aos requisitos do proprietário da clínica, criei uma aplicação web que possibilita um gerenciamento perfeito de pacientes e agendamentos acessível de qualquer lugar.",

        technologies: ["React", "Styled Components", "Node", "Express", "MongoDB"],

        challenges: [
            "Um dos principais desafios que encontrei foi minha experiência limitada com Node e Express. No entanto, abracei essa oportunidade para aprender e me familiarizar com essas tecnologias enquanto desenvolvia a aplicação web.",
        ],

        learnings: [
            `Aprendi como construir uma aplicação web com Node e Express.`,
        ],

        nextSteps: [
            `Meus próximos passos incluem adicionar mais recursos à aplicação web, como a geração de relatórios, o gerenciamento de pacientes e o gerenciamento de agendamentos.`,
        ],

        conclusion: `Ao longo deste projeto, adquiri conhecimentos valiosos no desenvolvimento de aplicações web utilizando Node e Express. Essa experiência aprimorou minha proficiência em utilizar essas tecnologias de forma eficaz para construir soluções robustas e escaláveis.`,
        images: ["/images/mindcare-co.png"],
        link: "/projects/mindcare-co",
        github: "https://github.com/FellipeLorram/MindCare",
        onlineDemo: "https://mind-care.vercel.app/"
    },
    {
        slug: "optical-manager",
        title: "Optical Manager",

        description: "Optical Manager é uma aplicação web construída com React, Styled Components e Node com Express. O principal objetivo desta aplicação é gerenciar o estoque da loja de óptica.",
        problemStatement: `A ideia principal é criar uma aplicação SASS que qualquer loja de óptica possa usar para gerenciar seu estoque. A aplicação deve ser capaz de gerenciar produtos, fornecedores e clientes. Também deve ser capaz de gerar relatórios e gerenciar usuários.`,

        solution: `Para atender à declaração do problema, criei uma aplicação web que possibilita um gerenciamento perfeito do estoque acessível de qualquer lugar.`,

        technologies: ["React", "Styled Components", "Node", "Express", "MongoDB"],

        challenges: [
            "Um dos principais desafios que encontrei foi minha experiência limitada com Node e Express. No entanto, abracei essa oportunidade para aprender e me familiarizar com essas tecnologias enquanto desenvolvia a aplicação web.",
        ],

        learnings: [
            `Aprendi como construir uma aplicação web com Node e Express.`,
        ],

        nextSteps: [
            `Meus próximos passos incluem adicionar mais recursos à aplicação web, como a geração de relatórios, o gerenciamento de pacientes e o gerenciamento de agendamentos.`,
        ],


        conclusion: `Ao longo deste projeto, adquiri conhecimentos valiosos no desenvolvimento de aplicações web utilizando Node e Express. Essa experiência aprimorou minha proficiência em utilizar essas tecnologias de forma eficaz para construir soluções robustas e escaláveis.`,

        images: ["/images/optical-manager.png"],
        link: "/projects/optical-manager",
        github: "https://github.com/FellipeLorram/Optical-manager",
        onlineDemo: "https://optical-manager.vercel.app/"
    },
    {
        slug: "opto-room",
        title: "Opto Room",

        description: "Opto Room é uma aplicação web construída com React, Styled Components e Firebase. A ideia principal desta aplicação é fornecer uma plataforma para optometristas gerenciarem seus pacientes e agendamentos.",

        problemStatement: `A ideia principal é criar uma aplicação SASS que qualquer optometrista possa usar para gerenciar seus pacientes e agendamentos. A aplicação deve ser capaz de gerenciar pacientes, agendamentos e prescrições. Também deve ser capaz de gerar relatórios e gerenciar usuários.`,

        solution: `Para atender à declaração do problema, criei uma aplicação web que possibilita um gerenciamento perfeito de pacientes e agendamentos acessível de qualquer lugar.`,

        technologies: ["React", "Styled Components", "Firebase"],

        challenges: [
            "Um dos principais desafios que encontrei foi minha experiência limitada com Firebase. No entanto, aproveitei essa oportunidade para aprender e me familiarizar com essas tecnologias enquanto construía a aplicação web.",
        ],
        learnings: [
            `Aprendi como construir uma aplicação web com Firebase.`,
        ],

        nextSteps: [
            `Meus próximos passos incluem adicionar mais recursos à aplicação web, como a geração de relatórios, o gerenciamento de pacientes e o gerenciamento de agendamentos.`,
        ],


        conclusion: `Ao longo deste projeto, adquiri conhecimentos valiosos no desenvolvimento de aplicações web utilizando o Firebase. Essa experiência aprimorou minha proficiência em utilizar essas tecnologias de forma eficaz para construir soluções robustas e escaláveis.`,

        images: ["/images/opto-room.png"],
        link: "/projects/opto-room",
        github: "https://github.com/FellipeLorram/opto-room",
        onlineDemo: "https://opto-room-kd20nwaor-fellipelorram.vercel.app/"
    },
];

export const projects = {
    en,
    pt,
}
