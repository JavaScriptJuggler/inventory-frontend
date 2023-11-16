"use client";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const router = useRouter();
  const login = (e) => {
    e.preventDefault();
    fetch(process.env.NEXT_PUBLIC_API_LINK + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(async response => {
        let mainData = await response.json();
        Cookies.set('token', mainData.token, { expires: 10 });
        Cookies.set('user_data', mainData.data, { expires: 10 });
        router.push('/dashboard');
      })
      .catch(error => console.log(error));
  }
  return (
    <div>
      <div className="page page-center">
        <div className="container container-tight py-4">
          <div className="text-center mb-4">
            <a href="." className="navbar-brand navbar-brand-autodark"><img src="./static/logo.svg" height="36" alt="" /></a>
          </div>
          <div className="card card-md">
            <div className="card-body">
              <h2 className="h2 text-center mb-4">Login to your account</h2>
              <form autoComplete="off" noValidate onSubmit={login}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" placeholder="your@email.com" autoComplete="off" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    Password
                    <span className="form-label-description">
                      <a href="./forgot-password.html">I forgot password</a>
                    </span>
                  </label>
                  <div className="input-group input-group-flat">
                    <input type="password" className="form-control" placeholder="Your password" autoComplete="off" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <span className="input-group-text">
                      <a href="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <span className="form-check-label">Remember me on this device</span>
                  </label>
                </div>
                <div className="form-footer">
                  <button type="submit" className="btn btn-primary w-100">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
