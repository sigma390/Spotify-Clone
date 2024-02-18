
"use client"

import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react'
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { Box } from './Box';

interface Siderbarprops{
    children: React.ReactNode;
}



export const Sidebar:React.FC<Siderbarprops> = ({children}) => {
    const pathname = usePathname();
    const routes = useMemo(()=>[
        {
            icon:HiHome,
            label:'Home',
            active: pathname!== '/search',
            href:'/'
        }
        ,
        {
            icon:BiSearch,
            label:'Search',
            active: pathname!== '/search',
            href:'/search'
        }
    ],[pathname]);
  return (
    <div className="flex h-full">
        <div className="hidden
         md:flex
        flex-col
        gap-y-2
      bg-black
        h-full
        w-[300px] 
        p-2">
            <Box>




            </Box>
        </div>
    </div>

  )
}
