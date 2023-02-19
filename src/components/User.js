/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

const User = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <article className="user">
      <h3>Id: {id}</h3>
      <h3 className="user__name">Name: {name}</h3>
      <h4 className="username">Username: {username}</h4>
      <h3 className="user__phone">{phone}</h3>
      <a target="_blank" rel="noreferrer" href={"https://www." + website} className="user__website">{website}</a>
      <h3 className="user__email">Email: {email}</h3>
      <address className="address">
        <h3>Address: </h3>
        <span>Street: {address.street}</span>
        <span>Suite: {address.suite}</span>
        <span>City: {address.city}</span>
        <span>Zipcode: {address.zipcode}</span>
      </address>
        <h3>Geo Location: </h3>
        <span>Lattitude: {address.geo.lat}</span>
        <span>Longtitude: {address.geo.lng}</span>
      <div className="user_company">
        <h2>Company: </h2>
        <h3>Name: {company.name}</h3>
        <span>Catch Phrase: {company.catchPhrase}</span>
        <p>BS: {company.bs}</p>
      </div>
    </article>
  );
};

User.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.object,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.object
};

export default User;
