import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

const Users = (props) => {
  return (
    <section className="users">
      {props.usersData.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </section>
  );
};

Users.propTypes = {
  usersData: PropTypes.array
};

export default Users;
