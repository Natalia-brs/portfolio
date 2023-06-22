'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import projects from '../../data/projects';
import NotFound from '../../components/NotFound';
import * as Style from '../../Styles/DetailsStyle';


function Page() {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const lastPart = parts.pop();
  const project = projects.find((item) => item.id === lastPart);
  if (!project) {
    return <NotFound />;
  }
  const { name, details, github, deploy } = project;

  return (
    <Style.SectionDetails>
      <Style.DetailsDiv>
      <Style.h1Text> { name }</Style.h1Text>
        <Style.pDetails> { details } </Style.pDetails>
        <Style.DetailLink  href={{ pathname: github }} target='_blank' > Repositório no Github </Style.DetailLink>
        <Style.DetailLink href={{ pathname: deploy }}  target='_blank'> Deploy </Style.DetailLink>
      </Style.DetailsDiv>
    </Style.SectionDetails>
  );
}

export default Page;
