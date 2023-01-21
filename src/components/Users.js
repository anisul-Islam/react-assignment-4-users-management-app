/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

const Users = (props) => {
  return (
    <section className="users">
      {props.users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </section>
  );
};

Users.propTypes = {
  users: PropTypes.array
};

export default Users;
