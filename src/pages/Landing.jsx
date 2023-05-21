import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="flex flex-col align-middle items-stretch justify-between">
            <Link to={'/login'} className="btn btn-outline btn-secondary btn-lg my-4 hover:scale-125 transition duration-700 ease-in-out">Log In</Link>
            <Link to={'/register'} className="btn btn-outline btn-secondary btn-lg my-4 hover:scale-125 transition duration-700 ease-in-out">Register</Link>
        </div>
    )
}