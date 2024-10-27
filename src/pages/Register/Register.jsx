import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Register = () => {
  const handleRegister = event => {
    event.preventDefault();

  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-3xl font-bold text-center">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <input className='btn btn-primary' type="submit" value="Register" />
            </div>
            <p className='my-4 text-center'>Already have an account? Please <Link to={'/login'} className='link'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;