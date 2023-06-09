'use client'
import React, { useState } from 'react'
import projects, { variables } from '../utils/projects'
import FrontProjects from '../components/FrontProjects';

 
 function Page() {
  const [list, setList] = useState(projects);

  const filterProjects = (category) => {
   if(category === 'All') {
    setList(projects);
    return
   }
   const newList = projects.filter((item) => item.type === category)
   setList(newList);
  }
   return (
     <div>
      <div>
        { variables.map((item, index) => (
          <button key={index} onClick={() => filterProjects(item)} > { item }  </button>
        )) }
      </div>
      <div> 
      { list.map(( item, index )=> (
        <FrontProjects 
        key={ index } 
        projectName={item.name}
        urlDeploy={item.deploy}
        image={item.image}
         type={item.type}
         tech={item.tech}
        />
      )) }
       </div>
     </div>
   )
 }
 
 export default Page;

  
