import React, { Component } from "react";

class Fetchapi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const posts = await res.json();
    this.setState({ posts });
    console.log(posts);
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.length > 0 && (
          <div className="abc">
            {posts.map((item) => (
              <div className="container" key={item.id}>
                <h4>{item.title}</h4> <br />
                <img src={item.image} /> <br />
                <h5> Price : ₹{item.price}</h5>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Fetchapi;
