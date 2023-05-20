export default function Login() {

    const onSubmitLogIn = (event) => {

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">

                <h2>Log In</h2>
                <form>
                    <div className="form-control w-full max-w-xs my-4">
                        <label className="label">
                            <span className="label-text">Email : </span>
                        </label>
                        <input type="email" placeholder="user@mail.com" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs my-4">
                        <label className="label">
                            <span className="label-text">Password : </span>
                        </label>
                        <input type="password" placeholder="password . . ." className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    
                    <div className="card-actions justify-end mt-8">
                        <button className="btn btn-primary">Log In</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
}