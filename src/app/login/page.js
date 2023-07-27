"use client";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

const page = () => {
  const { data: session } = useSession({
    // required: true,
    // onUnauthenticated() {
    //   redirect: "/login";
    // },
  });
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <button
                onClick={() => signIn()}
                class="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  class="w-6 h-6 inline-block mr-2"
                >
                  <path
                    fill="#FFC107"
                    d="M40 20H24v8h8.1C31 31.4 27.3 34 24 34c-4.4 0-8-3.6-8-8s3.6-8 8-8c1.9 0 3.5.7 4.8 1.9L34 12.6C31.8 10.4 28.8 9 24 9 16.3 9 10 15.3 10 23s6.3 14 14 14c9 0 13.5-6.9 13.5-13 0-1.1-.1-2.1-.3-3z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M24 38c5 0 9.6-1.7 13.3-4.6l-6.4-4.8C28.5 29.4 26.3 30 24 30c-3.2 0-6.2-1.7-8-4.4l-6.1 4.9C14.4 36.3 19 38 24 38z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M5.8 28.7l6.1 4.9C17.8 36.3 20.9 38 24 38c4.7 0 8.9-2.6 11.1-6.6l-6.1-4.9C30 33.1 27.2 34.8 24 34.8c-2.3 0-4.4-1.3-5.6-3.3z"
                  />
                  <path
                    fill="#1976D2"
                    d="M34.8 15.6c-.1-.4-.1-.8-.1-1.2s0-.8.1-1.2V9.2H36c1.2 2.5 1.9 5.2 1.9 8s-.7 5.5-1.9 8h-1.3v-3.2z"
                  />
                  <path
                    fill="#2196F3"
                    d="M24 10v4h5.2c-.3 1.4-1 2.6-1.9 3.6l3.1 2.4c1.8-2.7 2.9-6.1 2.9-9.6s-1.1-6.9-2.9-9.6l-3.1 2.4C28.2 7.4 28.9 8.6 29.2 10H24z"
                  />
                  <path
                    fill="#F44336"
                    d="M10.4 16.4l3.1 2.4c1.1-1.2 2.4-2.2 3.9-2.9V12h-5.2c-1.7 1.5-2.9 3.5-3.8 5.8z"
                  />
                </svg>
                Sign in with Google
              </button>
              <button class="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  class="w-6 h-6 inline-block mr-2"
                >
                  <path
                    fill="#1976D2"
                    d="M42 24c0-11.05-8.95-20-20-20S2 12.95 2 24s8.95 20 20 20 20-8.95 20-20z"
                  />
                  <path
                    fill="#FFF"
                    d="M32.47 14.28h-3.1c-1.12 0-1.33.53-1.33 1.31v3.42h4.76l-.55 4.86h-4.22v12.39h-5.32V24.87H17V20.02h4.88v-3.58c0-4.8 2.93-7.43 7.22-7.43 1.32 0 2.62.1 3.1.14v4.7z"
                  />
                </svg>
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
