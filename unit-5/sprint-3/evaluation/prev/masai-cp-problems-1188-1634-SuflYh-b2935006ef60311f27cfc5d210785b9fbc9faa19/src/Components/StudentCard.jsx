import { Link } from "react-router-dom";

export const StudentCard = ({ id, name, batch, score, green_card, student_code, Poster }) => {
  return (
    <div className={"student-card"}>
  
      <div>
        <img width={"100%"} className="student-image" src={Poster} />
        <p className="student-name">{name}</p>
        <p className="student-batch">{batch}</p>

        <h3 className="student-green-card">{green_card}</h3>
        <button className="student-detail">
        <Link to={`/students/${id}`}>View Details</Link>
        </button>
      </div>
      {/* Show student details here with a button to view details */}
    </div>
  );
};
