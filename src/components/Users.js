import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

const Users = (props) => {
  console.log(props.users);
  return (
    <section className="users">
      {props.users &&
        props.users.map((user) => <User key={user.id} {...user} />)}
    </section>
  );
};

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
