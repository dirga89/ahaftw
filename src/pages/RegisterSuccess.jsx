import { Link } from "react-router-dom";

export default function RegisterSuccess() {
    return (
        
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Successfully registered!</h2>
                <div className="flex items-center align-middle justify-center">
                    <p>Please</p>
                    <div class="">
                        <Link to="/login" className="btn btn-ghost spin-on-hover p-1 mt-1 underline">Login</Link>
                    </div>
                    <p>to continue</p>
                </div>
            </div>
        </div>

    )
}