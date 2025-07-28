import React, { useEffect, useState } from 'react'
import './MainHome.css'
import Row from '../../../components/Row/Row'
import { getPageData } from "../../../API/Movies";
import HeroBanner from '../../../components/Herobanner/HeroBanner';
import MainNavBar from '../../../components/MainNavbar/MainNavBar';



const MainHome = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPageData().then((request) => setData(request));
  }, []);
  return (
    <main>
      <HeroBanner/>
      {data && (
        <div>
          <Row
            title="NETFLIX ORIGINALS"
            data={data.netflixOriginals?.results}
          />
          <Row title="TRENDING NOW" data={data.trendingNow?.results} />
          <Row title="TOP RATED" data={data.topRated?.results} />
          <Row title="ACTION MOVIES" data={data.actionMovies?.results} />
          <Row title="HORROR MOVIES" data={data.horrorMovies?.results} />
          <Row title="ROMANCE MOVIES" data={data.romanceMovies?.results} />
          <Row title="WAR MOVIES" data={data.warMovies?.results} />
          <Row
            title="SCIENCE FICTION MOVIE"
            data={data.scienceFictionMovies?.results}
          />
          <Row title="DOCUMENTARIES" data={data.documentaries?.results} />
        </div>
      )}
       <div>
          <MainNavBar/>
          </div>
    </main>
  )
}

export default MainHome





