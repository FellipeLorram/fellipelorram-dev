export type Project = {
    slug: string;
    title: string;

    problemStatement?: string;
    solution?: string;
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
    github?: string;
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

        challenges: [
            `One of the primary challenges I encountered was my limited experience with Next.js and Tailwind CSS. However, I embraced this opportunity to learn and familiarize myself with these technologies while building the web application.`,
        ],

        learnings: [
            `I learned how to build a web application with Next.js, Tailwind CSS, and Firebase.`,
        ],

        nextSteps: [
            `I plan to add more features to the web application such as generating reports, managing
            customers, and managing suppliers.`,
        ],

        conclusion: `Throughout this project, I gained valuable expertise in developing web applications using Next.js, Tailwind CSS, and Firebase. This experience enhanced my proficiency in utilizing these technologies effectively to build robust and scalable solutions.`,

        images: ["/images/gireh-manager.png"],
        link: "/projects/gireh-manager",
        github: "",
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

        solution: `To meet the store owner's requirements, I created a web application that enables customers to
        browse the store's products.`,

        technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],

        myRole: `I was the sole developer of this project. I was responsible for the design and development of the
        web application.`,

        challenges: [
            `One of the primary challenges I encountered was my limited experience with Next.js and Tailwind CSS. However, I embraced this opportunity to learn and familiarize myself with these technologies while building the web application.`,
        ],

        learnings: [
            `I learned how to build a web application with Next.js, Tailwind CSS, and Firebase.`,
        ],

        nextSteps: [
            `I plan to add more features to the web application, such as allowing customers to place orders`,
        ],

        conclusion: `Throughout this project, I gained valuable expertise in developing web applications using Next.js, Tailwind CSS, and Firebase. This experience enhanced my proficiency in utilizing these technologies effectively to build robust and scalable solutions.`,

        images: ["/images/gireh-catalog.png"],
        link: "/projects/gireh-catalog",
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
        github: "",
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
        github: "",
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
        github: "",
    },
];
