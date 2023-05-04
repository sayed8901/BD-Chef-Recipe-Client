/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";

const Contact = () => {
  const [chefInfo, setChefInfo] = useState([]);
  useEffect(() => {
    fetch(`https://chefs-recipe-server-sayed8901.vercel.app/info`)
      .then((res) => res.json())
      .then((data) => setChefInfo(data))
      .catch((error) => console.log(error));
  }, []);
  //   console.log(chefInfo);

  const contact = chefInfo.contact;
  const phone = contact?.phone;
  const email = contact?.email;
  const address = contact?.address;

  return (
    <LazyLoad>
      <div className="hero my-24 flex flex-col mb-28">
        <div className="text-center mb-2">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="py-6">
            <br />
            You can contact with us anytime without any hesitation.
            <br />
            You are always welcome in advance.
          </p>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="rounded-xl mx-4"
              src="https://images.unsplash.com/photo-1571805529673-0f56b922b359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <div className="text-2xl font-semibold flex flex-col mb-4 content-start">
              <span>{address?.street},</span>
              <span>
                {address?.city}, {address?.state}-{address?.zip},{" "}
                {address?.country},
              </span>
            </div>
            <p>
              Phone number: <b>{phone}</b>
            </p>
            <p>
              Email Address: <b>{email}</b>
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Drop a mail</button>
            </div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Contact;
