import loginUserImage from '../images/userImage.jpg'
import './login-page.css';

const LoginPage = () => { 
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="card mb-3">
                    <div className="row g-0">
                        {/* this is Login Form */}
                        <div className="col-md-6" style={{ position: "relative" }}>
                            <div className="card-body login-box">
                                <h1>Login</h1>
                                <div className="input-group flex-nowrap my-2">
                                    <span className="input-group-text bi bi-envelope" id="addon-wrapping">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />

                                </div>
                                <div className="input-group flex-nowrap my-2">
                                    <span className="input-group-text" id="addon-wrapping">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                                    <span className='show-hide-password'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className='row'>
                                <div className='remember-checkbox col-md-6 col-sm-6'>
                                    <input type='checkbox' id="chkRemember" />
                                    <label for="chkRemember">Remember Me</label>
                                </div>
                                <div className='forget-pass col-md-6 col-sm-6'>
                                    <a href='#' > Forget Password</a>
                                </div>
                                </div>
                                
                                <button type='button' className='btn btn-success btn-lg btn-login'>Login</button>
                                <div className='term-condition'>
                                <input type='checkbox' id="chkTerm" />
                                    <label for="chkTerm">Please accept term & condition</label>
                                </div>
                            </div>
                        </div>
                        {/* this is image section */}
                        <div className="col-md-6">
                            <img src={loginUserImage} className="img-fluid rounded-start" alt="..." />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;