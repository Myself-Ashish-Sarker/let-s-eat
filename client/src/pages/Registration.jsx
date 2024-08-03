import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useContext, useEffect } from "react";

const Registration = () => {

    const { user, createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate])

    const axiosPublic = useAxiosPublic();

    const handleReg = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const logObj = { name, email, password };
        console.log(logObj);

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const user = { name, email, password, status: "user" };

                axiosPublic.post("/users", user)
                    .then(res => {
                        console.log(res.data);

                        // store JWT token
                        localStorage.setItem('token', res.data.token);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
    }

    return (
        <div className="flex justify-center mt-24">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleReg} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" className="input input-bordered" name="name" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                    </div>
                    <div>
                        <h1>Already have an account? <Link to="/login">Login</Link></h1>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration