import React from 'react';
import Section from '@/components/Sections';
import ItemCard from '@/components/ItemCard'
import { Folder } from 'react-feather';


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Section title="Projects" icon={<Folder />}>
        <ItemCard image='/next.png' title={"NextJs Portfolio"} description={"My portfolio with NextJs"} tags={["Nextjs","shadcn/ui","Tailwind","React"]} href={"/projects/portfolio"}/>
        <ItemCard image='/react.png' title={"React Portfolio"} description={"My portfolio with React"} tags={["React","Tailwind","React"]} href={"/projects/portfolio"}/>
      </Section>
    </main>
  );
}
