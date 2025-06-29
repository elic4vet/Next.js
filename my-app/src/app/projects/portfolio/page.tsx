import React from 'react';
import ItemCard from '@/components/ItemCard';
 

export default function PortfolioPage() {
  return (
    <main className="w-full max-w-lg flex flex-col items-center justify-center gap-4 mx-auto mt-4 ">
      <section className="w-full flex flex-col gap-6 p-4 rounded-xl bg-primary-foreground shadow">
        <h1 className="text-3xl font-bold mb-2 text-center">Portfolio Works</h1>
        <p className="text-lg text-center mb-4">This is a collection of my projects.</p>
        <div className="">
          <ItemCard
        image="/next.png"
        title="NextJs Portfolio"
        description="My portfolio with NextJs"
        tags={["Nextjs", "shadcn/ui", "Tailwind", "React"]}
        href="/projects/portfolio"
          />
          <ItemCard
        image="/react.png"
        title="React Portfolio"
        description="My portfolio with React"
        tags={["React", "Tailwind", "React"]}
        href="/projects/portfolio"
          />
          <ItemCard
        image="/vue.png"
        title="Vue App"
        description="An app built with Vue"
        tags={["Vue", "Tailwind", "Vue"]}
        href="/projects/portfolio"
          />
          <ItemCard
        image="/angular.png"
        title="Angular App"
        description="An app built with Angular"
        tags={["Angular", "Tailwind", "Angular"]}
        href="/projects/portfolio"
          />
        </div>
      </section>
    </main>
  );
}