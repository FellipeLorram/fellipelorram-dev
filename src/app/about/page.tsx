import { AnimateWrapper } from "@/components/animateWrapper"
import React from "react"

export default function Page() {
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
                    Hey there! I&apos;m Fellipe Lorram, a web developer based in the beautiful city of Rio de Janeiro, Brazil. I&apos;m truly passionate about all things computer science, from the nitty-gritty technical aspects to the thought-provoking philosophical discussions that arise from it.
                </p>
                <br />
                <p
                    className="text-left"
                >
                    When it comes to building awesome web applications, I&apos;ve got you covered. I work with a bunch of cool tools like Typescript, HTML, CSS, Python, Node.js, and React.js. With these under my belt, I&apos;m ready to tackle any challenge that comes my way.
                </p>
                <br />
                <p

                    className="text-left"
                >
                    You&apos;ll often find me diving deep into problems, fueled by hard work and intense focus. I believe that the key to finding the best solutions lies in dedicating myself wholeheartedly to the task at hand. No shortcuts here!
                </p>
                <br />
                <p
                    className="text-left"
                >
                    Over the years, I&apos;ve gained solid experience in a range of technologies. I&apos;m well-versed in Vanilla JavaScript, Node.js, React.js, Typescript, Single Page Applications, Python, Git, MongoDB, and various React libraries like Redux, Router, Framer-Motion, Styled Components, and Next.js. These tools have become second nature to me, allowing me to bring ideas to life with confidence.
                </p>
                <br />
                <p
                    className="text-left"
                >
                    I&apos;ve spent three awesome years building autonomous applications, where I&apos;ve had the freedom to unleash my creativity and craft solutions independently. But that&apos;s not all! I&apos;ve also had the opportunity to work with a CRM company for over a year. During that time, I led a fantastic team focused on platform integrations, Salesforce development, and front-end wizardry. It&apos;s been an exciting journey, and I&apos;ve learned a ton along the way.
                </p>
                <br />
                <p
                    className="text-left"
                >
                    When I&apos;m not immersed in the world of coding, you&apos;ll likely find me exploring the breathtaking wonders of nature, indulging in my hobbies, or engaging with fellow tech enthusiasts at meetups and conferences. Collaboration and knowledge-sharing are incredibly important to me, as I firmly believe that together, we can achieve incredible things.
                </p>
                <br />
                <p

                    className="text-left"
                >
                    While I&apos;m proud of my technical degree in computer science, I&apos;m always on the lookout for opportunities to learn and grow. That&apos;s why I&apos;m constantly seeking out online courses and staying up-to-date with the latest trends and innovations in the tech realm.
                </p>
                <br />
                <p
                    className="text-left"
                >
                    So, if you&apos;re ready to embark on an exciting journey of building remarkable digital experiences, I&apos;m here for you. Check out my projects to get a taste of what I&apos;ve been up to, and let&apos;s connect to discuss how we can make your ideas shine. Together, we&apos;ll create something extraordinary!
                </p>
            </AnimateWrapper>
        </div>
    )
}
