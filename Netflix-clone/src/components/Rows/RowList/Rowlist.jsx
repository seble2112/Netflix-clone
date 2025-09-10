import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/Requests";

const Rowlist = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />
    </>
  );
};

export default Rowlist;
