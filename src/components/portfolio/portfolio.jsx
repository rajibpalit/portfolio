import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data =[{
  id: 1,
  image: IMG1,
  title: 'Bluecarehub',
  github: 'https://github.com',
  demo: 'https://bluecarehub.com'
},
{
  id: 2,
  image: IMG2,
  title: 'Bluecarehub',
  github: 'https://github.com',
  demo: 'https://bluecarehub.com'
},
{
  id: 3,
  image: IMG3,
  title: 'Bluecarehub',
  github: 'https://github.com',
  demo: 'https://bluecarehub.com'
},
{
  id: 4,
  image: IMG4,
  title: 'Bluecarehub',
  github: 'https://github.com',
  demo: 'https://bluecarehub.com'
},
{
  id: 5,
  image: IMG5,
  title: 'Bluecarehub',
  github: 'https://github.com',
  demo: 'https://bluecarehub.com'
},
{
  id: 6,
  image: IMG6,
  title: 'Bluecarehub',
  github: 'https://github.com',
  demo: 'https://bluecarehub.com'
}
]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
            <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>This is a portfolio itemm title</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" rel="noreferrer" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                Dribble
              </a>
            </div>
          </article>
          )})
        }
      </div>
    </section>
  );
};

export default portfolio;
