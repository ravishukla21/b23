import React from "react";

const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  console.log(name.length,"jiop")
  if (name.length===0) {

    return(< div data-testid="no-user-container">
      <h2>no users found</h2>
    </div >)
  }

  return <>


    <table >
      <tr>
        <th>{id}</th>
        <th>{name}</th>
        <th>{gender}</th>
        <th>{role}</th>
        <th>{maritalStatus}</th>
      </tr>
    </table>


  </>;



};
export { UserRow };
