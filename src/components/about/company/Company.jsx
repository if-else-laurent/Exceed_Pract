import React from 'react';

const Company = (props) => {
  const { company } = props;
  return (
    <div className='company about__inner__item'>
      <h4> Company </h4>
      <div> Company: {(company) ? (company.name) : (null)} </div>
      <div> Catch phrase: {(company) ? (company.catchPhrase) : (null)} </div>
      <div> BS: {(company) ? (company.bs) : (null)} </div>
      {/* <div>Company: {company.name}</div>
      <div>Catch phrase: {company.catchPhrase}</div>
      <div>BS: {company.bs}</div> */}
    </div>
  )
}

export default Company;
