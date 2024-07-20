import React from 'react';
import Section from '@/components/Sections';
import ItemCard from '@/components/ItemCard'
import { Folder } from 'react-feather';


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Section title="Projects" icon={<Folder />}>
        <ItemCard image='/next.png' title={"NextJs Portfolio"} description={"My portfolio with NextJs"} tags={["Nextjs", "shadcn/ui", "Tailwind", "React"]} href={"/projects/portfolio"} />
        <ItemCard image='/react.png' title={"React Portfolio"} description={"My portfolio with React"} tags={["React", "Tailwind", "React"]} href={"/projects/portfolio"} />
        <ItemCard image='/Vue.png' title={"Vue App"} description={"An app built with Vue"} tags={["Vue", "Tailwind", "Vue"]} href={"/projects/portfolio"} />
        <ItemCard image='/Angular.png' title={"Angular App"} description={"An app built with Angular"} tags={["Angular", "Tailwind", "Angular"]} href={"/projects/portfolio "} />
      </Section>
      <Section title="Experience" icon={<Folder />} >
        <ItemCard image='./kreativstorm.png' title={"Kreativstorm"} description={"Junior Frontend Developer training internship"} tags={["HTML", "CSS", "JavaScript", "Rensponsive web design"]} href={"/projects/portfolio"} />
        <ItemCard image='./arvato.jpg' title={"Arvato SE"} description={"Costumer service employee"} tags={["CRM", "SAP S/4HANA", "Logistics", "Healthcare"]} href={"/projects/portfolio"} />
      </Section>

    </main>
  );
}
