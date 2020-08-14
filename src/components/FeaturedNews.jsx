import React from "react";

export default function FeaturedNews({ featuredNews }) {
  return (
    <div className="row">
      {featuredNews &&
        featuredNews.map(({ title, subtitle }) => (
          <div className="col-md-4 col-sm-4 news-card">
            <div className="news-card-single">
              <h4>{title}</h4>
              <p>{subtitle}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
