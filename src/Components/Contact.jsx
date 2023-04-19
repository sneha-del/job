import React from "react";
import './Contact.css'


const Contact = () => {
  return (
    <>
      <div className="contact3 py-5">
        <div className="box">
          <h1 className="font-weight-bold mt-2 order-0 order-lg-1 text-center">
            Get In Touch With Us!
          </h1>
        </div>
        <div className="row no-gutters">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="card-shadow">
                  <img src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg=" className="con" />
                </div>
              </div>
              <div className="col-lg-4 border border-dark border-1 rounded m-4 p-4">
                <div className="contact-box ">
                  <h3 className="font-weight-light mt-2 order-0 order-lg-1">
                    Feedback
                  </h3>
                  <form className="mt-4 ">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <label htmlFor="" className="contact-label mt-2 py-2">
                            Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <label htmlFor="" className=" contact-label mt-2 py-2">
                            Email
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            placeholder=" Enter Your Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <label htmlFor="" className=" contact-label  mt-2 py-2">
                            Contact No.
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Your Mobile Number "
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <label htmlFor="" className="contact-label mt-2 py-2">
                            Address
                          </label>
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Enter Your Address"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <label htmlFor="" className="contact-label mt-2 py-2">
                            Feedback
                          </label>
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                        >
                          <span> SUBMIT</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
