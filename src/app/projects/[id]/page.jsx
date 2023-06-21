'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import projects from '../../data/projects';
import NotFound from '../../components/NotFound'


const style = {
    fontSize: '50px',
    color: 'white',
}

function Page() {
    const pathname = usePathname()
    const parts = pathname.split('/');
    const lastPart = parts.pop();
    const project = projects.find((item) => item.id === lastPart)
    if(!project) {
        return <NotFound />
    }
     const { name, details, tech } = project

  return (
   <div style={style} > 
     <h1> { name } </h1>
     <p> { details } </p>
     <ul>
        { tech.map((item, index) => <li key={ index } > { item } </li>) }
     </ul>
   </div>
  )
}

export default Page;


     