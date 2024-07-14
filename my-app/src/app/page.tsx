import React from 'react';
import Section from '@/components/Sections';
import ItemCard from '@/components/ItemCard'
import { Folder } from 'react-feather';


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Section title="Projects" icon={<Folder />}>
        <ItemCard image='/next.jpeg' title={"NextJs Portfolio"} description={"Portfolio"} tags={["Nextjs", "shadcn/ui" ,"Tailwind" , "React"]} href={"/projects/portfolio"}/> 
      </Section>
    </main>
  );
}
