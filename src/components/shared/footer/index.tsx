import { navLinks, social_links } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='max-w-screen-lg py-20 mx-auto border rounded-t-lg border-black/10 dark:border-white/10 backdrop-blur-sm flex flex-row justify-evenly'>
        <Navigation />
        <Socials />
      </div>
    </footer>
  )
}

const Navigation = () => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <h2 className='text-lg font-medium'>Navigation</h2>
      <div className='flex flex-col gap-6'>
        {
          navLinks.map((link) => (
            <NavigationItem key={link.label} label={link.label} href={link.href} />
          ))
        }
      </div>
    </div>
  )
}

const NavigationItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link href={href} className='pr-2'>
      {label}
    </Link>
  )
}

const Socials = () => {
  return (
    <div className='flex flex-col items-start gap-6'>
      <h2 className='text-lg font-medium'>Socials</h2>
      <ul className='flex flex-col gap-3 items-start'>
        {
          social_links.map((link) => (
            <SocialItem key={link.label} label={link.label} href={link.href} icon={link.icon} />
          ))
        }
      </ul>
    </div>
  )
}

const SocialItem = ({ label, href, icon }: { label: string; href: string; icon: React.ElementType} ) => {
  const Icon = icon;

  const color = label === 'GitHub' ? 'bg-black text-white hover:bg-black/90' : label === 'Twitter' ? 'bg-blue-500 text-white hover:bg-blue-500/90' : 'bg-blue-600  text-white hover:bg-blue-600/90';

  return (
    <li className={cn('rounded-lg hover:scale-105  transition-all duration-300 w-32', color)}>
      <Link href={href} className='flex items-center justify-center gap-2 font-medium px-4 py-4'
        target='_blank'
        rel='noopener noreferrer'
      >
        {label} <Icon className='w-4 h-4'/>
      </Link>
    </li>
  )
}

export default Footer