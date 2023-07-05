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

export const projects: Project[] = [
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
        The main purpose of this application is to provide a platform for the optics store's customers
        to browse the store's products.`,

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
        The main purpose of this application is to provide a platform for psychologists to manage their
        patients and appointments.`,

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
        The main purpose of this application is to provide a platform for optometrists to manage their
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
