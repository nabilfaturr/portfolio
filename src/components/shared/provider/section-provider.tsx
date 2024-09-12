import { cn } from '@/lib/utils'
import React from 'react'

type SectionProviderProps = {
    className?: string
    children: React.ReactNode
}

const SectionProvider: React.FC<SectionProviderProps> = ({ children, className }) => {
  return (
    <section className={cn(`min-h-screen space-y-8 mt-header`, className)} >
      {children}
    </section>
  )
}

export default SectionProvider