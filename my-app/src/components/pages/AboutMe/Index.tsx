import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from'../../ui/badge'
import { Heart, Music } from 'lucide-react'

const index = () => {
  return (
    <div className='w-full max-w-lg flex flex-col justify-center items-start gap-4' id='#about-me-content'>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='gap-2'><Heart /> Things i like to do </AccordionTrigger>
                <AccordionContent className='mb-2'>
                    <Badge> Coding </Badge>
                    <Badge> Reading </Badge>
                    <Badge> Learning </Badge>
                    <Badge> Listen to nice Music </Badge>
                    <br />
                    <Badge> Drink coffee </Badge>
                    <Badge> Travel </Badge>
                    <Badge> Play with my Cat </Badge>
                    <Badge> Watch Movies </Badge>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='gap-2'> <Music /> My most recent Spotify playlist</AccordionTrigger>
                <AccordionContent>
                    <iframe className="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9RwfGbeGQwP?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    </div>
)
}

export default index