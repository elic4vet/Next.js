import React, { useContext } from 'react';
import "../../app/globals.css";
import { cn } from "../../lib/utils";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import { Badge } from '@/components/ui/badge';
import { Heart, Music } from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';


const Index = () => {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center p-8 gap-4 bg-gradient-to-r from-rose-400 to-orange-300 font-sans antialiased">
            <div className="p-2 rounded-xl bg-primary-foreground">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="gap-2">
                            <Heart /> Things I like to do
                        </AccordionTrigger>
                        <AccordionContent className="mb-2">
                            <Badge> Coding </Badge>
                            <Badge> Reading </Badge>
                            <Badge> Learning </Badge>
                            <Badge> Listen to nice Music</Badge>
                            <br />
                            <Badge> Drink coffee</Badge>
                            <Badge> Travel</Badge>
                            <Badge> Play with my Cat </Badge>
                            <Badge> Watch Movies </Badge>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="gap-2">
                            <Music /> My most recent Spotify playlist
                        </AccordionTrigger>
                        <AccordionContent>
                            <iframe
                                className="rounded-lg"
                                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9RwfGbeGQwP?utm_source=generator"
                                width="100%"
                                height="152"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </main>

    );
};

export default Index;
