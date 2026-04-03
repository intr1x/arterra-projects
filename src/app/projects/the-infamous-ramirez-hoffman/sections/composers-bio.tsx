"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeader } from "./overview";

interface ComposerBio {
  name: string;
  title: string;
  text: string;
  text2?: string;
}

const COMPOSERS: ComposerBio[] = [
  {
    name: "Astor Piazzolla",
    title: "Astor Piazzolla (1921-1992)",
    text: "is considered one of the most important tango composers in the world. He revolutionized the form with \u201CTango Nuevo\u201D, which incorporates elements of jazz, classical music and an integral synthesis of the tango\u2019s whole range, from its early foundations to our days. After a long struggle to gain acceptance for his new concept of tango, he was awarded the title \u201CIllustrious Citizen of Buenos Aires\u201D. Piazzolla transformed tango into a refined art form, establishing himself as one of the most influential musicians of the 20th century.",
  },
  {
    name: "Alfred Schnittke",
    title: "Alfred Schnittke (1934-1998)",
    text: "is one of the most mysterious composers of the late 20th century. His works are complex, erudite, and imbued with a deep spirituality. They embrace a wide range of genres, including symphonies, ballets, orchestral, choral and vocal pieces, as well as film and theater scores. In the 70s and 80s, his works were banned in the USSR, but posthumously, he became a symbol of Russian avant-garde music and of freedom of conscience.",
  },
  {
    name: "Johann Paul von Westhoff",
    title: "Johann Paul von Westhoff (1656-1705)",
    text: "was a pivotal figure in late 17th and early 18th century music. He had a strong impact not only on fellow composers, but on future-generation legends J.S. Bach and Georg Telemann. One of the most celebrated violinists of his day, he composed some of the earliest known music for solo violin.",
  },
  {
    name: "Leonid Desyatnikov",
    title: "Leonid Desyatnikov (1955)",
    text: "is one of the most performed contemporary Soviet - Russian composers. Born in Ukraine, Desyatnikov studied at the Leningrad Conservatory where he quickly specialized in composition and instrumentation. His works have been awarded numerous prizes, including the Russian State Prize in 2003.",
    text2: "The style of his music is defined by the composer himself as \u201Can emancipation of consonance, transformation of banality and \u2018minimalism\u2019 with a human face\u201D. He refers to his own work as \u201Ctragically nuanced songs.\u201D",
  },
  {
    name: "Antonio Vivaldi",
    title: "Antonio Vivaldi (1678-1741)",
    text: "- Italian baroque composer and virtuoso violinist - was one of the most renowned figures in European classical music, ranked as one of the greats alongside J.S.Bach and G.Handel. He pioneered many developments in violin technique and orchestration, including shaping the emerging concerto form into a widely accepted form. Today, he is perhaps best known for his magnificent music cycle The Four Seasons.",
  },
  {
    name: "Alberto Iglesias",
    title: "Alberto Iglesias (1955)",
    text: "is best known for his collaboration with Pedro Almadovar, the director for whom he has scored almost all his films. Nominated four times for an Academy Award, he won the European Film Award for Best Composer for Volver at Cannes in 2006.",
    text2: "He went on to work with directors including Steven Soderbergh and Ridley Scott, and scored the directorial debut of actor John Malkovich, The Dancer Upstairs.",
  },
  {
    name: "Sergey Akhunov",
    title: "Sergey Akhunov (1967)",
    text: "composes chamber and symphonic music. Though his music is tonally reminiscent of 19th-century Romantic composers, he is also recognized as a gifted minimalist. He started as an oboe player before moving on to other genres, including electronic music and rock. He has also written a large number of spiritual compositions for choir drawn from liturgical texts.",
  },
  {
    name: "Efim Rosenfeld",
    title: "Efim Rosenfeld (1894\u20141964)",
    text: "was a Soviet composer, pianist, and conductor known for the popular pre-war songs he composed in the tango rhythm, including \u201CWeary Sun\u201D and \u201CMy Happiness\u201D tango, a true symbol of the pre-war years in the Soviet Union, which is used in The Infamous Ramirez Hoffman.",
  },
  {
    name: "Max Richter",
    title: "Max Richter (1966)",
    text: "a musician and composer of German-British origin, is considered one of the main influences for post-minimalist composers and a prominent figure in neoclassical music. Moving through minimalism or experimental electronic music, his controversial style lives at the intersection of his classical background and his life experiences, including electronic, dance, punk, and psychedelic music.",
  },
  {
    name: "Fazil Say",
    title: "Fazil Say (1970)",
    text: "brilliant Turkish pianist and composer, is now considered among the leading musicians of his generation. An established concert pianist, he has played with all the renowned American and European orchestras, performing a multifaceted repertoire, including his own piano compositions, which often reflect the folk melodies and driving rhythms of Turkey.",
  },
  {
    name: "Lera Auerbach",
    title: "Lera Auerbach (1973)",
    text: "is a Soviet-born Austrian-American classical composer, conductor and concert pianist. According to the Washington Post \u201CHer music \u2014 highly dramatic, communicative, and rich with brooding intensity and poetic expression \u2014 speaks in a singular voice that builds on the language of modern composers such as Shostakovich and Alfred Schnittke.\u201D",
  },
  {
    name: "Erik Satie",
    title: "Erik Satie (1866-1925)",
    text: "is a French composer whose spare, unconventional style exerted a major influence on 20th-century music. His work represents the first definite break with 19th-century French Romanticism. Closely allied to the Surrealist movement in art, his music refuses sentimentality or deep significance, disregarding traditional forms and tonal structures and often taking the form of parody.",
  },
  {
    name: "Giovanno Sollima",
    title: "Giovanni Sollima (1962)",
    text: "is an Italian virtuoso cellist and composer. His compositions are wide-ranging, encompassing jazz, rock, ethnic Mediterranean traditions. Though influenced by minimalism, he has gone beyond to an approach often characterized as post-minimalism. He has composed music for films and contemporary ballet with notables such as Peter Greenaway, Robert Wilson, John Turturro and Karole Armitage.",
  },
];

function Dot() {
  return (
    <span style={{ fontSize: "0.5em", verticalAlign: "middle", position: "relative", top: "-2px" }}>
      ●
    </span>
  );
}

export function ComposersBioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = COMPOSERS[activeIndex];

  return (
    <section className="bg-white px-6 md:px-10 lg:px-12 2xl:px-20 py-12 lg:py-14 2xl:py-20">
      <div className="lg:mb-[90px] 2xl:mb-[130px]">
        <SectionHeader title="Composers" />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 2xl:gap-20 lg:pl-[100px] 2xl:pl-[140px]">
        <ScrollReveal variant="fade-right" duration={900} className="flex-1 max-w-[540px]">
          <p className="text-2xl lg:text-[30px] 2xl:text-[38px] font-light leading-[1.6]">
            {COMPOSERS.map((c, i) => {
              const isActive = i === activeIndex;
              const isFirst = i === 0;
              const nameSpan = (
                <span
                  key={c.name}
                  className={`whitespace-nowrap cursor-pointer transition-colors duration-300 ${
                    isActive ? "text-[#3E3E3E]" : "text-[#b8b8b8]"
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  {!isFirst && <><Dot />&nbsp;</>}
                  {c.name.split(" ").map((word, wi, arr) => (
                    <span key={wi}>
                      {word}
                      {wi < arr.length - 1 ? "\u00A0" : ""}
                    </span>
                  ))}
                </span>
              );

              const needsBreak = [1, 2, 3, 4, 5, 6].includes(i);

              return (
                <span key={c.name}>
                  {needsBreak && <br />}
                  {!isFirst && !needsBreak && " "}
                  {isFirst && " "}
                  {nameSpan}
                </span>
              );
            })}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200} duration={900} className="flex-1 max-w-[506px]">
          <p className="font-bold text-[#3E3E3E] text-base lg:text-base 2xl:text-lg tracking-[0.01em] leading-[1.4] mb-4">
            Biography
          </p>
          <div className="text-[#3E3E3E] text-base lg:text-base 2xl:text-lg font-medium leading-[1.4] text-justify space-y-4">
            <p>
              <strong>{active.title}</strong>{" "}
              <span className="text-[#b2b2b2]">{active.text}</span>
            </p>
            {active.text2 && (
              <p className="text-[#b2b2b2]">{active.text2}</p>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
