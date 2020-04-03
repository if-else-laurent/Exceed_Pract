import React from 'react';

const Company = (props) => {
  const { company } = props;
  return (
    <div className='company about__inner__item'>
      <h4> Company </h4>
      <div>Company: {company.name}</div>
      <div>Catch phrase: {company.catchPhrase}</div>
      <div>BS: {company.bs}</div>
    </div>
  )
}

export default Company;
