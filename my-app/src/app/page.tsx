import React from 'react';
import Section from '@/components/Sections';
import ItemCard from '@/components/ItemCard';
import { Briefcase, Folder, Star } from 'react-feather';
import AboutMe from '@/components/headers/AboutMe';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Sparkle } from 'lucide-react';


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-8 gap-4">
      <div className="p-2 rounded-xl bg-primary-foreground">
        <AboutMe
          name={'Elisabeth Erkekoglou'}
          role={'Junior Frontend Developer'}
          availability={'open'}
          location={'Germany'}
          email={'elisabeth.erkekoglou@gmail.com'}
          image={'/me.png'}
          currentCompany={{
            name: 'Arvato SE',
            role: 'Costumer Service Employee',
            duration: 'Since October 2016'
          }}
          resume={'https://docs.google.com/document/d/19mXeur9GGbbMddEzv2haSGYLkGMKSfH9/edit?usp=sharing&ouid=115227731188943947624&rtpof=true&sd=true'}
        />

        <div id="projects">
                <Section title="Projects" icon={<Folder />}>
                  <ItemCard image='/next.png' title={"NextJs Portfolio"} description={"My portfolio with NextJs"} tags={["Nextjs", "shadcn/ui", "Tailwind", "React"]} href={"/projects/portfolio"} />
                  <ItemCard image='/react.png' title={"React Portfolio"} description={"My portfolio with React"} tags={["React", "Tailwind", "React"]} href={"/projects/portfolio"} />
                  <ItemCard image='/Vue.png' title={"Vue App"} description={"An app built with Vue"} tags={["Vue", "Tailwind", "Vue"]} href={"/projects/portfolio"} />
                  <ItemCard image='/Angular.png' title={"Angular App"} description={"An app built with Angular"} tags={["Angular", "Tailwind", "Angular"]} href={"/projects/portfolio "} />
                </Section>
        </div>


        <div id="experience">
                <Section title="Experience" icon={<Briefcase />}>
                  <ItemCard image='./kreativstorm.png' title={"Kreativstorm"} description={"Junior Frontend Developer training internship"} tags={["HTML", "CSS", "JavaScript", "Rensponsive web design"]} href={"/projects/portfolio"} />
                  <ItemCard image='./arvato.jpg' title={"Arvato SE"} description={"Costumer service employee"} tags={["CRM", "SAP S/4HANA", "Logistics", "Healthcare"]} href={"/projects/portfolio"} />
                </Section>
        </div>


        <div id="education ">
                <Section title="Education" icon={<Briefcase />}>
                  <ItemCard image='./iulogo.jpg' title={"IU - Internationale Hochschule"} description={"B.Sc. Computer Science "} tags={["Computer Science", "Bachelor", "Software Engineering"]} href={"/projects/portfolio"} />
                  <ItemCard image="./codefirstgirlslogo.png" title={"Introduction to Python & Apps"} description={"Python and app development workshop"} tags={["Python", "App Development", "Pandas", "Libraries"]} href={"/projects/portfolio"} />
                  <ItemCard image='./freecodecamplogo.png' title={"FreeCodeCamp"} description={"Responsive Web Design Certification"} tags={["HTML", "CSS", "JavaScript", "React", "TypeScript"]} href={"/projects/portfolio"} />
                  <ItemCard image="./shecodeslogo.png" title={"SheCodes"} description={"Frontend Development Workshop"} tags={["HTML", "CSS", "JavaScript", "React", "Figma"]} href={"/projects/portfolio"} />
                  <ItemCard image="./udacitylogo.png" title={"Udacity"} description={'Nanodegree program : AI Product Manager'} tags={["AI", "Product Management", "Machine learning"]} href={"/projects/portfolio"} />
                  <ItemCard image="./ekpalogo.jpg" title={"National and Kapodistrian University of Athens"} description={"B.Sc. French Language and Litterature"} tags={["French", "Language", "Litterature", "Bachelor Degree"]} href={"/projects/portfolio"} />
                </Section>
        </div>

        <div id="contact">

        </div>
      </div>
    </main>
  );
}
