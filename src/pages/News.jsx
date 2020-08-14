import React from "react";
import FeaturedNews from "../components/FeaturedNews";
export default function News() {
  const featuredNews = [
    {
      title: "World",
      subtitle: "Breaking News",
    },
    {
      title: "Technology",
      subtitle: "Last Advances",
    },
    {
      title: "Finance",
      subtitle: "Forex Market",
    },
    {
      title: "World",
      subtitle: "Breaking News",
    },
    {
      title: "Technology",
      subtitle: "Last Advances",
    },
    {
      title: "Finance",
      subtitle: "Forex Market",
    },
  ];
  return (
    <section className="bg-dark page-section" id="news">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Featured News</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </div>
        <FeaturedNews featuredNews={featuredNews} />
      </div>
    </section>
  );
}
