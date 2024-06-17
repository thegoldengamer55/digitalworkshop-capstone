import React, { useEffect, useState } from "react";
import "./albums.css";
import { images } from "../../constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Lofi from "../../assets/lofi.wav";

const Albums = () => {
  const [number, setNumber] = useState(1);
  const [albumNumber, setAlbumNumber] = useState(0);
  const [showAlbum, setShowAlbum] = useState(false);

  function PaginationIncrease() {
    if (number == 1) {
      setNumber(number + 1);
      return number;
    } else {
      return;
    }
  }

  function PaginationDecrease() {
    if (number == 2) {
      setNumber(number - 1);
      return number;
    } else {
      return;
    }
  }

  function PaginationNumber(clickedNumber) {
    setNumber(clickedNumber);
    return number;
  }

  function ValidateAlbum(albumOrder) {
    setAlbumNumber(albumOrder);
    setShowAlbum(true);
  }

  function CloseAlbum() {
    setShowAlbum(false);
  }

  return (
    <div>
      <div className="music" id="albums">
        <div
          className={`${
            showAlbum === true
              ? "album-view-background"
              : "hide-album-view-background"
          }`}
        >
          <div className="album-view">
            <FaX className="close-album" onClick={() => CloseAlbum()} />

            {images.map((item) => (
              <img
                src={item.url}
                alt="Album Image"
                className={`${
                  albumNumber === item.position
                    ? "album-view-image"
                    : "hide-image"
                }`}
                id={item.order}
              />
            ))}
            <div className="album-view-container">
              <div className="album-view-text">
                <h2>ALBUM NAME</h2>
                <h3>by: Artist</h3>
                {/* <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis exercitationem officiis doloremque.
                </p> */}
                <audio src={Lofi} controls preload="none" className="media" />
                {/* Implement buy feature */}
                {/* <div className="btns">
                  <button></button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <h1>ALBUMS</h1>
        <div className="underline" />
        <div className={`${number === 1 ? "albums-2" : "albums-2 page-2"}`}>
          <div className="albums-2-section">
            {images.map((item) => (
              <>
                <div
                  className="album"
                  id="album-id"
                  onClick={() => ValidateAlbum(item.position)}
                >
                  <img src={item.url} alt="Album Image" />
                  <div className="album-content">
                    <h2>View</h2>
                  </div>
                </div>
              </>
            ))}
            {images.map((item) => (
              <div
                className="album"
                onClick={() => ValidateAlbum(item.position)}
              >
                <img src={item.url} alt="Album Image" />
                <div className="album-content">
                  <h2>View</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="albums-2-section sec-2">
            {images.map((item) => (
              <div
                className="album"
                onClick={() => ValidateAlbum(item.position)}
              >
                <img src={item.url} alt="Album Image" />
                <div className="album-content">
                  <h2>View</h2>
                </div>
              </div>
            ))}
            {images.map((item) => (
              <div
                className="album"
                onClick={() => ValidateAlbum(item.position)}
              >
                <img src={item.url} alt="Album Image" />
                <div className="album-content">
                  <h2>View</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="album-pagination">
          <button className="arrow" onClick={PaginationDecrease}>
            <FaArrowLeft /> Prev
          </button>
          <div className="numbers">
            <button
              className={`${number === 1 ? "number-active" : "number"}`}
              onClick={() => {
                PaginationNumber(1);
              }}
            >
              1
            </button>
            <button
              className={`${number === 2 ? "number-active" : "number"}`}
              onClick={() => {
                PaginationNumber(2);
              }}
            >
              2
            </button>
          </div>
          <button className={`arrow`} onClick={PaginationIncrease}>
            Next
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Albums;
