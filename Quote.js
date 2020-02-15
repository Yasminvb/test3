import React from "react";
import Component from "./QuoteSearcher"

export default class Quote extends Component {
  render(){
 
    const {
      quoteText,
      quoteAuthor,
      likedness,
      handleClick
    } = this.props;

    return (
      <div>
        <p style={{ color: likedness }}>
          {quoteText}
          <br></br>By:
          {quoteAuthor}
        </p>
        <div>
          <button id="like :)" onClick={handleClick}>
            Like :)
          </button>
          <button id="dislike :(" onClick={handleClick}>
            Dislike :(
          </button>
        </div>
      </div>
    );
  }
}



