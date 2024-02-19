"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
  }  




export const Header: React.FC<HeaderProps> = ({
    children,
    className,
  }) => {
    const router = useRouter();
  return (
    <div
    className={twMerge(`
    h-fit 
    bg-gradient-to-b 
    from-emerald-800 
    p-6
    `,
    className
  )}
    
    >
        <div className="
         w-full
         mb-4 flex
         items-center 
         justify-between"
         >
          <div className="
            hidden
            md:flex
            gap-x-2
            items-center"> 


              <div className="flex
               md:hidden
               gap-x-2 
               items-center
               ">
                
               </div>



        </div>


    </div>
  )
}
