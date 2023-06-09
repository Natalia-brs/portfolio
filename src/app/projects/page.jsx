'use client';
import React, { useState } from 'react';
import projects, { variables } from '../utils/projects';
import FrontProjects from '../components/FrontProjects';
import * as Styled from '../Styles/ProjectsStyle';

function Page() {
  const [list, setList] = useState(projects);

  const filterProjects = (category) => {
    if (category === 'All') {
      setList(projects);
      return;
    }
    const newList = projects.filter((item) => item.type === category);
    setList(newList);
  };
  return (
    <Styled.div>
      <Styled.BtnDiv>
      {variables.map((item, index) => (
        <Styled.btnProject key={index} onClick={() => filterProjects(item)}>
          {' '}
          {item}{' '}
        </Styled.btnProject>
      ))}
      </Styled.BtnDiv>
      <Styled.CardContainer>
        {list.map((item, index) => (
          <FrontProjects
            key={index}
            projectName={item.name}
            urlDeploy={item.deploy}
            image={item.image}
            type={item.type}
            tech={item.tech}
          />
        ))}
      </Styled.CardContainer>
      </Styled.div>
  );
}

export default Page;
