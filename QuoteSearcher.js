import React, { Component } from "react";
import Quote from "./Quote"



export default class QuoteSearcher extends Component {
  state = {
    quotes: [
      {
        _id: "5d91b45d9980192a317c8acc",
        quoteText:
          "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
        quoteAuthor: "Bruce Lee"
      },
      {
        _id: "5d91b45d9980192a317c8abe",
        quoteText:
          "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
        quoteAuthor: "Abraham Lincoln"
      },
      {
        _id: "5d91b45d9980192a317c8955",
        quoteText:
          "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
        quoteAuthor: "J. Willard Marriott"
      }
    ]
  };
}

// deleted async before componentDidMount because is giving me errors which I don't understand

componentdDidMount();{
  const response = fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
  const parsedData = response.json();
  const quoteData = parsedData.results;
  console.log(parsedData);
  console.log(quoteData);
}

