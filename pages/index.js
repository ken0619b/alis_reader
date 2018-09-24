import React from "react";
import axios from "axios";

// css
import "../node_modules/bulma/bulma.sass";

const EyeCatch = props => (

  <div class="columns is-mobile">
    <article class="media column is-half is-offset-one-quarter">
      <figure class="media-left">
        <p class="image is-640x480">
          <a 
           href={`https://alis.to/ALIS/articles/${props.article_id}`}>
            <img src={`${props.url}`} />
          </a>
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{props.title}</strong>
            <br />
            {props.tags.map(tag => (<small>{tag}|</small>))}
            <br />
            {props.overview}...
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
);

const Index = ({ articles }) => (
  
  // card
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
      </div>
    </nav>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hero title</h1>
          <h2 className="subtitle">Hero subtitle</h2>
        </div>
      </div>
    </section>
    {articles.map(a => (
      <EyeCatch 
       url={a.eye_catch_url} 
       key={a.eye_catch_url}
       title={a.title}
       tags={a.tags}
       overview={a.overview}
       article_id={a.article_id}
      />
    ))}

  </div>
);

Index.getInitialProps = async () => {
  const res = await axios.get("https://alis.to/api/articles/popular?limit=10");
  //console.log(res.data.Items)

  let articles = [];

  // items = res.data.Items.map(item => { 
    for(let item of res.data.Items) {
      let article = {
        eye_catch_url: item.eye_catch_url,
        overview: item.overview,
        tags: item.tags,
        title: item.title,
        article_id: item.article_id
      }
      articles.push(article)
    }
  // stories = stories.map(s => s.val())
  // return { stories }
  //let messages = [1,2,3]
  return { articles };
};

export default Index;
