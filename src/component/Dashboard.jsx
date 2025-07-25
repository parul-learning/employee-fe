import {useLocation} from "react-router-dom";

function Dashboard()
{
    const location = useLocation();
    const {employeeId, firstName, lastName} = location.state || {};
    return(
      <div>
          <h2>Welcome to {firstName} {lastName} dashboard with id {employeeId}</h2>
      </div>
    );
}

export default Dashboard;