import React from "react";
import { ProjectRow } from "./ProjectRow";


export const ProjectList = (props) => {

  // <th>S.no</th>
  {/* <th>Name</th>
<th>Tech Stack</th>
<th>Assigned To</th>
<th>Current Status</th>
<th>Toggle</th> */}

  const { name, tech_stack, assigned_to, currentstatus, id } = props;
  console.log(name)
  return (
    <div className="project-list-wrapper">
      <table data-testid="project-container">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Tech Stack</th>
            <th>Assigned To</th>
            <th>Current Status</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          <ProjectRow name={name} tech_stack={tech_stack} assigned_to={assigned_to} currentstatus={currentstatus}/>
          {/* <tr>
            <td>{id}</td>

            <td>{name}</td>
            <td>{tech_stack}</td>
            <td>{assigned_to}</td>
            <td>{currentstatus}</td>
          </tr> */}
        </tbody>
        {/* Add table head  */}
        {/* Map through the list and use `ProjectRow` Component  */}

      </table>
    </div>
  );
};
