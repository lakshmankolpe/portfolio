import React from "react";
import "./Project.css";
import bookImg from "./expense.png";
import chalkTalk from "./chalk-talk.png";

function Project() {
  return (
    <>
      <div className="project-heading-card">
        <h3 className="text-center">
          <i class="fa-sharp fa-solid fa-computer"></i> Projects
        </h3>
      </div>

      <div className="container mt-2 mb-3">
        <div className="project-card">
          <div className="row">
            <div className="col-md-4">
              <img
                src={bookImg}
                className="mx-auto d-block expence-icon"
                alt="test"
              />
            </div>
            <div className="col-md-8">
              <h3 className="text-center">Expense Tracker 📖</h3>
              <span class="badge badge-pill bg-s-color m-2 p-2">
                <b>
                  <i class="fa-solid fa-code"></i> HTML
                </b>
              </span>
              <span class="badge badge-pill bg-f-color m-2 p-2">
                <b>
                  <i class="fa-brands fa-css3-alt"></i> CSS
                </b>
              </span>
              <span class="badge badge-pill bg-s-color m-2 p-2">
                <b>
                  <i class="fa-brands fa-square-js"></i> Javascript
                </b>
              </span>
              <span class="badge badge-pill bg-f-color m-2 p-2">
                <b>
                  <i class="fa-brands fa-bootstrap"></i> Bootstrap
                </b>
              </span>
              <span class="badge badge-pill bg-s-color m-2 p-2">
                <b>
                  <i class="fa-brands fa-react"></i> React JS
                </b>
              </span>
              <span class="badge badge-pill bg-f-color m-2 p-2">
                <b>
                  <i class="fa-brands fa-node-js"></i> Node JS
                </b>
              </span>
              <span class="badge badge-pill bg-s-color m-2 p-2">
                <b>
                  <i class="fa-solid fa-database"></i> Mongo DB
                </b>
              </span>

              <h4 className="mt-2 text-center">
                {" "}
                📝 Track, manage, and control your expenses effortlessly !
              </h4>
              <h6 className="text-center">Get used by anytime, anywhere.</h6>

              <div className="text-center">
                <a href="https://expenes-stracker.vercel.app/" target="blank">
                  <button className="btn-demo m-3 p-2">
                    <b>
                      <i class="fas fa-laptop-code"></i> Live Demo
                    </b>
                  </button>
                </a>

                <a
                  href="https://github.com/lakshmankolpe/expenes_stracker"
                  target="blank"
                >
                  <button className="btn-code m-3 p-2">
                    <b>
                      <i class="fab fa-github-square"></i> Source Code
                    </b>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-2 mb-5">
        <div className="project-card">
          <div className="row">
            <div className="col-md-4">
              <img
                src={chalkTalk}
                className="mx-auto d-block short-link-icon"
                alt="test"
              />
            </div>
            <div className="col-md-8 ">
              <h3 className="text-center">Shortify 🔗</h3>
              <span class="badge badge-pill bg-s-color m-2 p-2">
                <b>
                  <i class="fa-solid fa-code"></i> HTML
                </b>
              </span>
              <span class="badge badge-pill bg-f-color m-2 p-2">
                <b>
                  <i class="fa-brands fa-css3-alt"></i> CSS
                </b>
              </span>
              <span class="badge badge-pill bg-s-color m-2 p-2">
                <b>
                  <i class="fa-brands fa-square-js"></i> Javascript
                </b>
              </span>
              <span class="badge badge-pill bg-f-color m-2 p-2">
                <b>
                  <i class="fa-brands fa-bootstrap"></i> Bootstrap
                </b>
              </span>
              <span class="badge badge-pill bg-s-color m-2 p-2">
                <b>
                  <i class="fa-brands fa-react"></i> React JS
                </b>
              </span>
              <span class="badge badge-pill bg-f-color m-2 p-2">
                <b>
                  <i class="fa-brands fa-node-js"></i> Node JS
                </b>
              </span>
              <span class="badge badge-pill bg-s-color m-2 p-2">
                <b>
                  <i class="fa-solid fa-database"></i> Mongo DB
                </b>
              </span>

              <h4 className="mt-2 text-center">
                Save time and simplify sharing by converting long URLs into
                short, easy-to-share links effortlessly.
              </h4>

              <div className="text-center ">
                <a href="https://shortify-murex.vercel.app/" target="blank">
                  <button className="btn-demo m-3 p-2">
                    <b>
                      <i class="fas fa-laptop-code"></i> Live Demo
                    </b>
                  </button>
                </a>

                <a
                  href="https://github.com/lakshmankolpe/Shortify"
                  target="blank"
                >
                  <button className="btn-code m-3 p-2">
                    <b>
                      <i class="fab fa-github-square"></i> Source Code
                    </b>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-more-heading-card">
          <span className="project-more-text  btn-primary text-center mt-3">
            <i class="fa-solid fa-forward"></i> <b>More Projects</b>{" "}
          </span>
        </div>
      </div>
    </>
  );
}

export default Project;
