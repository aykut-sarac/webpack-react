import React from "react";

export default function Team() {
  return (
    <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Meet The Team</h2>
            <h3 className="section-subheading text-muted">
              “There is a superhero in all of us, we just need the courage to
              put on the cape.” Superman
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="https://avatarfiles.alphacoders.com/121/121602.png"
                alt=""
              />
              <h4>Superman</h4>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="https://avatarfiles.alphacoders.com/103/103636.jpg"
                alt=""
              />
              <h4>Batman</h4>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="https://avatarfiles.alphacoders.com/153/153443.jpg"
                alt=""
              />
              <h4>Spiderman</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
              corporis ea, alias ut unde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
