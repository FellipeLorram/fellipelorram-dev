"use client";

import { useAtom } from "jotai";
import React from "react" 
import { AnimateWrapper } from "@/components/animateWrapper"
import { LanguageAtom } from "@/context/global";

export default function Page() {
    const [language] = useAtom(LanguageAtom);

    return (
        <div
            className="flex flex-1 justify-center items-center text-slate-100 flex-col gap-5 mt-10"
        >
            <AnimateWrapper
                className="w-full max-w-[800px]"
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 50
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.2,
                            duration: 0.5
                        }
                    }
                }}
            >

                <h1 className="font-medium text-xl text-center md:text-2xl">About</h1>
                <br />
                <p
                    className="text-left"
                >
                    {language === 'pt' ? 'Olá! Meu nome é Fellipe Lorram, sou desenvolvedor web e moro na linda cidade do Rio de Janeiro, Brasil. Sou apaixonado por tudo que envolve ciência da computação, desde os aspectos técnicos até as discussões filosóficas que surgem a partir dela.' : 'Hey there! I\'m Fellipe Lorram, a web developer based in the beautiful city of Rio de Janeiro, Brazil. I\'m truly passionate about all things computer science, from the nitty-gritty technical aspects to the thought-provoking philosophical discussions that arise from it.'}
                </p>
                <br />
                <p
                    className="text-left"
                >
                    {language === 'pt' ? 'Quando se trata de construir aplicações web incríveis, eu tenho você coberto. Eu trabalho com um monte de ferramentas legais como Typescript, HTML, CSS, Python, Node.js e React.js. Com essas ferramentas em meu cinto, estou pronto para enfrentar qualquer desafio que surgir.' : 'When it comes to building awesome web applications, I\'ve got you covered. I work with a bunch of cool tools like Typescript, HTML, CSS, Python, Node.js, and React.js. With these under my belt, I\'m ready to tackle any challenge that comes my way.'}
                </p>
                <br />
                <p

                    className="text-left"
                >
                    {language === 'pt' ? 'Você geralmente me encontrará mergulhando fundo em problemas, alimentado por trabalho duro e foco intenso. Acredito que a chave para encontrar as melhores soluções está em me dedicar de corpo e alma à tarefa em questão. Nenhum atalho aqui!' : 'You\'ll often find me diving deep into problems, fueled by hard work and intense focus. I believe that the key to finding the best solutions lies in dedicating myself wholeheartedly to the task at hand. No shortcuts here!'}
                </p>
                <br />
                <p
                    className="text-left"
                >
                    {language === 'pt' ? 'Ao longo dos anos, adquiri sólida experiência em uma variedade de tecnologias. Estou bem versado em JavaScript Vanilla, Node.js, React.js, Typescript, Single Page Applications, Python, Git, MongoDB e várias bibliotecas React como Redux, Router, Framer-Motion, Styled Components e Next.js. Essas ferramentas se tornaram parte da minha rotina, permitindo-me dar vida às ideias com confiança.' : 'Over the years, I\'ve gained solid experience in a range of technologies. I\'m well-versed in Vanilla JavaScript, Node.js, React.js, Typescript, Single Page Applications, Python, Git, MongoDB, and various React libraries like Redux, Router, Framer-Motion, Styled Components, and Next.js. These tools have become second nature to me, allowing me to bring ideas to life with confidence.'}
                </p>
                <br />
                <p
                    className="text-left"
                >
                    {language === 'pt' ? 'Passei três anos incríveis construindo aplicações autônomas, onde tive a liberdade de liberar minha criatividade e criar soluções de forma independente. Mas isso não é tudo! Também tive a oportunidade de trabalhar com uma empresa de CRM por mais de um ano. Durante esse tempo, liderei uma equipe fantástica focada em integrações de plataforma, desenvolvimento Salesforce e magia de front-end. Tem sido uma jornada emocionante e aprendi muito ao longo do caminho.' : 'I\'ve spent three awesome years building autonomous applications, where I\'ve had the freedom to unleash my creativity and craft solutions independently. But that\'s not all! I\'ve also had the opportunity to work with a CRM company for over a year. During that time, I led a fantastic team focused on platform integrations, Salesforce development, and front-end wizardry. It\'s been an exciting journey, and I\'ve learned a ton along the way.'}
                </p>
                <br />
                <p
                    className="text-left"
                >
                    {language === 'pt' ? 'Quando não estou imerso no mundo da codificação, você provavelmente me encontrará explorando as maravilhas da natureza, me entregando aos meus hobbies ou interagindo com outros entusiastas de tecnologia em meetups e conferências. A colaboração e o compartilhamento de conhecimento são incrivelmente importantes para mim, pois acredito firmemente que juntos podemos alcançar coisas incríveis.' : 'When I\'m not immersed in the world of coding, you\'ll likely find me exploring the breathtaking wonders of nature, indulging in my hobbies, or engaging with fellow tech enthusiasts at meetups and conferences. Collaboration and knowledge-sharing are incredibly important to me, as I firmly believe that together, we can achieve incredible things.'}
                </p>
                <br />
                <p
                    className="text-left"
                >
                    {language === 'pt' ? 'Embora eu esteja orgulhoso do meu diploma técnico em ciência da computação, estou sempre à procura de oportunidades para aprender e crescer. É por isso que estou constantemente buscando cursos online e me mantendo atualizado com as últimas tendências e inovações no mundo da tecnologia.' : 'While I\'m proud of my technical degree in computer science, I\'m always on the lookout for opportunities to learn and grow. That\'s why I\'m constantly seeking out online courses and staying up-to-date with the latest trends and innovations in the tech realm.'}
                </p>
                <br />
                <p
                    className="text-left"
                >
                    {language === 'pt' ? 'Então, se você está pronto para embarcar em uma emocionante jornada de construção de experiências digitais notáveis, estou aqui para ajudá-lo. Confira meus projetos para ter uma ideia do que tenho feito e vamos nos conectar para discutir como podemos fazer suas ideias brilharem. Juntos, criaremos algo extraordinário!' : "So, if you're ready to embark on an exciting journey of building remarkable digital experiences, I'm here for you. Check out my projects to get a taste of what I've been up to, and let's connect to discuss how we can make your ideas shine. Together, we'll create something extraordinary!"}
                </p>
            </AnimateWrapper>
        </div>
    )
}
