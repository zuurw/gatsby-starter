import React from "react"
import { Link } from "gatsby"

class FourOhFour extends React.Component {
  render() {
    return (
      <div>
        <h1>Page not found</h1>
        <p>
          You might find what you're looking for at <Link to="/">the index page</Link>.
        </p>
      </div>
    );
  }
}

export default FourOhFour;
