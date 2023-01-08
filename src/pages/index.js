import React, { useState } from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";
import "../styles/styles.scss";

const IndexPage = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [isPiVisible, setPiVisible] = useState(false)

  const [isSnakeVisible, setSnakeVisible] = useState(false)

  const showPiHandler = () => {
    setSnakeVisible(() => {
      return false
    });

    setIsLoading(() => {
      return true;
    });

    setPiVisible(() => {
      return true
    });
  }

  const showSnakeHandler = () => {
    setPiVisible(() => {
      return false
    });

    setIsLoading(() => {
      return true;
    });

    setSnakeVisible(() => {
      return true
    });
  }

  const resetLoader = () => {
    setIsLoading(() => {
      return false;
    })
  };

  return (
    <Layout>
      <Seo title="Home" />
      <div className="container-fluid">
        <div className="d-flex justify-content-between mt-5 mx-5">
          <button
            type="button"
            className="btn btn-primary mr-15"
            onClick={showPiHandler}
          >
            Show PI Game
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={showSnakeHandler}
          >
            Show Snake Game
          </button>
        </div>
        <div className="conatiner row mt-5 mx-5">
          {isLoading && <div className="alert alert-success">Game Is Loading........</div>}
          {isPiVisible && (
            <iframe
              title="PI Game"
              src="https://amit-pi-game.netlify.app/"
              onLoad={resetLoader}
              className="conatiner__game"
            ></iframe>
          )}
          {isSnakeVisible && <iframe
            title="Snake Game"
            src="https://amit-snake-game.netlify.app/"
            onLoad={resetLoader}
            className="conatiner__game"
          ></iframe>}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)