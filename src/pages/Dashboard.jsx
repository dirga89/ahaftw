import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = `${process.env.REACT_APP_BASE_URL}/user`;

export default function Dashboard() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users: ', error);
            });
    }, []);

    return (
        <div className="card w-96 h-auto min-h-full bg-base-100 shadow-xl p-10">
            <div className="overflow-x-auto">
                <table className="table w-full h-full table-compact table-zebra text-center">
                    <thead>
                    <tr>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}