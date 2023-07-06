"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { About } from "@/components/home/about";
import { Projects } from "@/components/home/projects";
import { useSearchParams } from "next/navigation";
import { LanguageAtom } from "@/context/global";

export default function Page() {
  const params = useSearchParams();
  const language = params.get("language");
  const [, setLang] = useAtom(LanguageAtom);

  useEffect(() => {
    if (language == "pt" || language == "en") {
      setLang(language);
    }
  }, [language]);

  return (
    <>
      <About />
      <Projects />
    </>
  )
}
