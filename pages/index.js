import React from "react";
import axios from "axios";

// css
import '../node_modules/bulma/bulma.sass';

const EyeCatch = props => (
// <img src={`${props.url}`} />
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={`${props.url}`} alt="Placeholder image" />
    </figure>
  </div>
</div>
)

const Index = ({ eyecatches }) => (
  // <Layout>
  //   <h1>Hacker News - Latest</h1>
  //   <ul>
  //     {stories.map(story => (
  //       <PostLink
  //         key={story.id}
  //         id={story.id}
  //         title={story.title}
  //       />
  //     ))}
  //   </ul>
  // </Layout>
  <div>
    <section className="hero">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        Hero title
      </h1>
      <h2 className="subtitle">
        Hero subtitle
      </h2>
    </div>
  </div>
</section>
    {eyecatches.map(e => (
      <EyeCatch url={e} key={e} />
    ))}
  </div>
);

Index.getInitialProps = async () => {
  const res = await axios.get("https://alis.to/api/articles/popular?limit=10");
  //console.log(res.data.Items)

  let eyecatches = [];

  eyecatches = res.data.Items.map(item => item.eye_catch_url);

  console.log(eyecatches);
  // const db = await loadDB()

  // const ids = await db.child('topstories').once('value')
  // let stories = await Promise.all(
  //   ids.val().slice(0, 10).map(id => db
  //     .child('item')
  //     .child(id)
  //     .once('value')
  //   )
  // )

  // stories = stories.map(s => s.val())

  // return { stories }
  //let messages = [1,2,3]
  return { eyecatches };
};

export default Index;
