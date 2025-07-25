import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function Dashboard() {
    const location = useLocation();
    const {employeeId, firstName, lastName} = location.state || {};
    const [salaries, setSalaries] = useState([]);
    
    useEffect(() => {
        const fetchSalaryData = async () => {
            const url = `http://localhost:8080/api/parul/employee/salaries/${employeeId}`;
            const salaryList = await fetch(url);
            const data = await salaryList.json();
            setSalaries(data);
            console.log(data);
        };

        fetchSalaryData();
        
        // If needed, you can add a cleanup function here
        return () => {
            // cleanup code
        };
    }, [employeeId]); // Added employeeId to dependencies array

    return(
        <div>
            <h2>Welcome to {firstName} {lastName} dashboard with id {employeeId}</h2>
            {
                salaries.length > 0 && (
                    <table className="salary-table">
                        <thead>
                          <tr>
                              <th>Salary Id</th>
                              <th>Salary Amount</th>
                              <th>Salary Date</th>
                          </tr>
                        </thead>
                        <tbody>
                        {salaries.map((sal,index) => (
                            <tr key={index}>
                                <td>{sal.salaryId}</td>
                                <td>{sal.salaryAmount}</td>
                                <td>{sal.salaryDate}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    );
}

export default Dashboard;