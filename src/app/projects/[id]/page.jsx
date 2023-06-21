'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import projects from '../../data/projects';
import NotFound from '../../components/NotFound'
import Link from 'next/link';


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
     const { name, details, tech, github, deploy } = project

  return (
   <div style={style} > 
     <h1> { name } </h1>
     <p> { details } </p>
     <ul>
        { tech.map((item, index) => <li key={ index } > { item } </li>) }
     </ul>
     <Link href={{ pathname: github }} > Github </Link>
     <Link href={{ pathname: deploy }} > Deploy </Link>
   </div>
  )
}

export default Page;


     