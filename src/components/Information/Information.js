import React from "react";
import vaibhaviImg from "./lakshman1-img.jpeg";
import "./Information.css";
import Github from "./github-logo.png";
import Linkdin from "./linkdin-logo.png";
import Twitter from "./twitter-logo.png";
import Instagram from "./instagram-logo.png";

function Information() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                "https://img.freepik.com/premium-photo/memoji-handsome-indian-guy-man-white-background-emoji-cartoon-character_826801-7991.jpg?w=2000"
              }
              className="header-img mt-3 mx-auto d-block "
            />
            <h4 className="text-center mt-3">Lakshman Kolpe</h4>
            <h5 className="text-center mt-1">Software Developer💻</h5>

            <div className="container mt-4">
              <div className=" social-midea-icon-container">
                <a
                  href="https://github.com/lakshmankolpe"
                  class="ico-social-container"
                  target="blank"
                >
                  <img src={Github} alt="github" class="ico-social" />
                </a>

                <a
                  href="https://www.linkedin.com/in/lakshman-kolpe/"
                  class="ico-social-container"
                  target="blank"
                >
                  <img src={Linkdin} alt="linkedin" class="ico-social" />
                </a>

                <a
                  href="https://peerlist.io/lakshmanklpe"
                  class="ico-social-container peerlist  "
                  target="blank"
                >
                  <img
                    src={Twitter}
                    alt="linkedin"
                    class="ico-social "
                    className="peerlist-icon"
                  />
                </a>

                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  class="ico-social-container"
                  target="blank"
                >
                  <img src={Instagram} alt="linkedin" class="ico-social" />
                </a>
              </div>
            </div>

            <div className="text-center mt-4">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1kI3AjgcpyPzH4bZisk6xoB8rCZkLx7Om/view?usp=drivesdk "
              >
                <button type="button" class="btn-resume btn-sm m-2">
                  <b>
                    <i class="far fa-file-alt"></i> Show Resume
                  </b>
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6  d-flex align-items-center ">
            <p className="self-information">
              Hi! I'm <b>Lakshman Kolpe</b> I'm a Full Stack Developer and I am
              passionate about coding. I have experience in various programming
              languages ​​and have worked on web development projects using
              HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Node.js, React.js
              and MongoDB. I love creating efficient and easy-to-use
              applications for users. I love learning new things and
              continuously improving as a great developer.
            </p>

           
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
