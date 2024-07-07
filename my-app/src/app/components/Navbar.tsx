import React from 'react'
import { Home, Folder, Briefcase, GitHub, Mail, Coffee } from 'react-feather'
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <div className='w-full h-full flex justify-center items-center bg-zinc-800'>
            {/* Home */}
            <Button variant="ghost" aria-label="Home"> 
            <Home className="text-primary-foreground" />
            </Button>

            {/*Projects*/}
            <Button variant="ghost" aria-label="Projects">
            <Folder className="text-primary-foreground" />
            </Button>

            {/* Experience */}
            <Button variant="ghost" aria-label="Experience">
            <Briefcase className="text-primary-foreground" />
            </Button>

            {/* Education */}
            <Button variant="ghost" aria-label="Education">
            <GitHub className="text-primary-foreground" />
            </Button>

            {/* Contact */}
            <Button variant="ghost" aria-label="Contact">
            <Mail className="text-primary-foreground" />
            </Button>

            {/* Hire me */}
            <Button variant="ghost" aria-label="Hire me">
            <Coffee className="text-primary-foreground" />
            </Button>
        </div>
    )
}

export default Navbar
