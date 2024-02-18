import React from 'react'

interface Siderbarprops{
    children: React.ReactNode;
}



export const Sidebar:React.FC<Siderbarprops> = ({children}) => {
  return (
    <div>{children}</div>
  )
}
