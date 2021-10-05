import React from "react";
import Image from "./Image";

class UserProfile extends React.Component {
  render() {
    const { name, email, avatar } = this.props.user;

    return (
      <div>
        <h3>{name}</h3>
        <p>email: {email}</p>
        <Image source={avatar} />
      </div>
    )
  }
}

export default UserProfile;