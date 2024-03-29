import React, { useState } from "react";
import "./homePage.css";
import axios from "axios";

let api = "https://blink.up.railway.app/url/shorten";
const HomePage = () => {
  const [longUrl, setLongUrl] = useState("");
  const [result, setResult] = useState("");

  const postData = (e) => {
    // e.preventDefault();
    axios
      .post(api, {
        longUrl,
      })
      .then((res) => {
        // console.log(res);
        setResult(res.data.data);
        console.log(res.data.data);
      });
  };
  // console.log(result);
  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <div className="form">
            <div className="div">
              <div>
                <h1>Enter a long url</h1>
                <span>to make it short</span>
                <input
                  id="input"
                  type="text"
                  name="longUrl"
                  value={longUrl}
                  placeholder="Shorten your url"
                  onChange={(e) => setLongUrl(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="button"
                onClick={() => postData()}
              >
                Make It Short
              </button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div id="result">
              <a href={result.shortUrl}>{result.shortUrl}</a>
            </div>
          </div>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>
                Created a Url shortening service like Bitly and tinyurl for easy
                sharing of long urls, also implemented caching to deliver quick
                responses.
              </p>
              <a href="https://github.com/sunandasharma61/Project-url-Shortner.git" className="github">
                github
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>
          Created By - <i className="fa fa-heart"></i>
          <a href="https://www.linkedin.com/in/sunanda-sharma-36a0a724b/">
            Sunanda Sharma
          </a>{" "}
          - Read how I created this and you can see backend repository -
          <a href="https://github.com/sunandasharma61/Project-url-Shortner.git">
            {" "}
            HERE{" "}
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default HomePage;