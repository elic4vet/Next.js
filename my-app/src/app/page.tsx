import React from 'react';
import Section from '@/components/Sections';
import ItemCard from '@/components/ItemCard'
import { Briefcase, Folder } from 'react-feather';


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mb-5">

      <Section title="About Me" icon={<Briefcase />}>
        <p className="text-center">I am a junior frontend developer with a passion for creating beautiful and functional user interfaces. I have experience in building responsive web applications with HTML, CSS, and JavaScript. I am currently learning React and NextJs to improve my skills and build more complex applications. I am looking for opportunities to work on exciting projects and collaborate with other developers.</p>
      </Section>

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

      <Section title="Education" icon={<Briefcase />} >
        <ItemCard image='./iulogo.jpg' title={"IU - Internationale Hochschule"} description={"B.Sc. Computer Science "} tags={["Computer Science", "Bachelor" ,"Software Engineering"]} href={"/projects/portfolio"} />
        <ItemCard image="./codefirstgirlslogo.png" title={"Introduction to Python & Apps"} description={"Python and app development workshop"} tags={["Python", "App Development" ,"Pandas", "Libraries"]} href={"/projects/portfolio"} />
        <ItemCard image='./freecodecamplogo.png' title={"FreeCodeCamp"} description={"Responsive Web Design Certification"} tags={["HTML", "CSS", "JavaScript", "React", "TypeScript"]} href={"/projects/portfolio"} />
        <ItemCard image="./shecodeslogo.png" title={"SheCodes"} description={"Frontend Development Workshop"} tags={["HTML", "CSS", "JavaScript", "React","Figma"]} href={"/projects/portfolio"} />
        <ItemCard image="./udacitylogo.png" title={"Udacity"} description={'Nanodegree program : AI Product Manager'} tags={["AI", "Product Management", "Machine learning"]} href={"/projects/portfolio"} />
        <ItemCard image="./ekpalogo.jpg" title={"National and Kapodistrian University of Athens"} description={"B.Sc. French Language and Litterature"} tags={["French", "Language", "Litterature", "Bachelor Degree"]} href={"/projects/portfolio"} />
      </Section>

    </main>
  );
}
