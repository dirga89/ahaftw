import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div class="flex flex-col w-72">
            <Link to={'/login'} className="btn btn-outline btn-secondary btn-lg my-4 hover:scale-125 transition duration-700 ease-in-out">Log In</Link>
            <div class="divider">OR</div>
            <Link to={'/register'} className="btn btn-outline btn-secondary btn-lg my-4 hover:scale-125 transition duration-700 ease-in-out">Register</Link>
        </div>
    )
}