import React from 'react';
import Section from '@/components/sections';
import { Folder } from 'react-feather';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Section title="Projects" icon={<Folder />}>
        <div className='w-full h-full m-2 max-w-lg text-center flex-col justify-center items-center gap-2'> Hi</div>
      </Section>
    </main>
  );
}
