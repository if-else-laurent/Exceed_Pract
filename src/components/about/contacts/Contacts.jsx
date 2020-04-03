import React from 'react';

const Contacts = (props) => {
  const { phone, website } = props;
  return (
    <div className='contacts about__inner__item'>
      <h4 className='contacts'> Contacts </h4>
      <div>Number: {phone}</div>
      <div>Personal page: {website}</div>
    </div>
  )
}

export default Contacts;
