import React, { useState } from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";
import "../styles/styles.scss";

const IndexPage = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [isHangmanVisible, setHangmanVisible] = useState(false)

  const [isTicTacToeVisible, setTicTacToeVisible] = useState(false)

  const showHangManHandler = () => {
    setTicTacToeVisible(() => {
      return false
    });

    setIsLoading(() => {
      return true;
    });

    setHangmanVisible(() => {
      return true
    });
  }

  const showTicTacToeHandler = () => {
    setHangmanVisible(() => {
      return false
    });

    setIsLoading(() => {
      return true;
    });

    setTicTacToeVisible(() => {
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
            onClick={showHangManHandler}
          >
            Show PI Game
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={showTicTacToeHandler}
          >
            Show Snake Game
          </button>
        </div>
        <div className="conatiner row mt-5 mx-5">
          {isLoading && <div className="alert alert-success">Game Is Loading........</div>}
          {isHangmanVisible && (
            <iframe
              title="Hangman Game"
              src="https://amit-hangman-game.netlify.app/"
              onLoad={resetLoader}
              className="conatiner__game"
            ></iframe>
          )}
          {isTicTacToeVisible && <iframe
            title="TicTacToe Game"
            src="https://amit-tictactoe-game.netlify.app/"
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