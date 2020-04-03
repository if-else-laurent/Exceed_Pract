import React from 'react';
import Contacts from './contacts/Contacts';
import Company from './company/Company';
import Address from './address/Address';
import Geo from './Geo/Geo';

const About = (props) => {
  const {
    phone,
    website,
    company,
    address,
  } = props;
  return (
    <div className='about'>
      <h3 className="about__header orange">Information </h3>
      <div className='about__inner'>
        <Contacts phone={phone} website={website} />
        <Company company={company} />
        <Address address={address} />
        <Geo address={address} />
      </div>
    </div>
  )
}

export default About;
