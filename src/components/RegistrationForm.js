import React from 'react'

function RegistrationForm(props) {
    const [state, setState] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email Address</label>
                    <input type="email" className="form-control" id="email" 
                    aria-describedby="emailHelp"
                     placeholder="Enter email"
                      value={state.email}
                      onChange={handleChange}/>
                    <small id="emailHelp" className="form-text text-muted"> we ll never share your email with anyone else</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                {/* <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                    />
                </div> */}
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>

        </div>
    )
}

export default RegistrationForm
