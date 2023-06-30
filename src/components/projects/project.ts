export type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
    github?: string;
}

export const projects: Project[] = [
    {
        title: "Gireh Manager",
        description: `Gireh Manager is a web application built with React, Next.js, Tailwind CSS, and Firebase.
        The main purpose of this application is to manage the optics store&apos;s inventory. It also
        has a built-in POS system that can be used to sell products to customers.`,
        image: "/images/gireh-manager.png",
        link: "/projects/gireh-manager",
        github: "",
    },
    {
        title: "Gireh Catalog",
        description: `Gireh Catalog is a web application built with React, Next.js, Tailwind CSS, and Firebase.
        The main purpose of this application is to provide a platform for the optics store&apos;s customers
        to browse the store&apos;s products.`,
        image: "/images/gireh-catalog.png",
        link: "/projects/gireh-catalog",
    },
    {
        title: "MindCare Co.",
        description: `MindCare Co. is a web application built with React, Styled Components, and Node with Express.
        The main purpose of this application is to provide a platform for psychologists to manage their
        patients and appointments.`,
        image: "/images/mindcare-co.png",
        link: "/projects/mindcare-co",
        github: "",
    },
    {
        title: "Optical Manager",
        description: `Optical Manager is a web application built with React, Styled Components, and Node with Express.
        The main purpose of this application is to manage the optics store&apos;s inventory.`,
        image: "/images/optical-manager.png",
        link: "/projects/optical-manager",
        github: "",
    },
    {
        title: "Opto Room",
        description: `Opto Room is a web application built with React, Styled Components, and Firebase.
        The main purpose of this application is to provide a platform for optometrists to manage their
        patients and appointments.`,
        image: "/images/opto-room.png",
        link: "/projects/opto-room",
        github: "",
    },
];
