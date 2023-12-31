import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favourites from "./pages/Favourites/Favourites";
import Home from "./pages/Home/Home";
import Countries from "./pages/Countries/Countries";
import Competitions from "./pages/Competitions/Competitions";
import Results from "./pages/Results/Results";
import Stats from "./pages/Stats/Stats";
import Standings from "./pages/Standings/Standings";
import TopScorers from "./pages/TopScorers/TopScorers";
import AllStats from "./pages/AllStats/AllStats";

function App() {
  //   const leagues = [
  //     {
  //       league_name: "Premier League",
  //       name: "England",
  //       league_id: "152",
  //       league_logo:
  //         "https://apiv3.apifootball.com/badges/logo_leagues/152_premier-league.png",
  //       country_logo:
  //         "https://apiv3.apifootball.com/badges/logo_country/44_england.png",
  //     },
  //     {
  //       league_name: "La Liga",
  //       name: "Spain",
  //       league_id: "302",
  //       league_logo:
  //         "https://apiv3.apifootball.com/badges/logo_leagues/302_la-liga.png",
  //       country_logo:
  //         "https://apiv3.apifootball.com/badges/logo_country/6_spain.png",
  //     },
  //     {
  //       league_name: "Serie A",
  //       name: "Italy",
  //       league_id: "207",
  //       league_logo:
  //         "https://apiv3.apifootball.com/badges/logo_leagues/207_serie-a.png",
  //       country_logo:
  //         "https://apiv3.apifootball.com/badges/logo_country/5_italy.png",
  //     },
  //     {
  //       league_name: "Bundesliga",

  //       name: "Germany",
  //       league_id: "171",
  //       league_logo:
  //         "https://apiv3.apifootball.com/badges/logo_leagues/175_bundesliga.png",
  //       country_logo:
  //         "https://apiv3.apifootball.com/badges/logo_country/4_germany.png",
  //     },
  //     {
  //       league_name: "League 1",

  //       name: "France",
  //       league_id: "168",
  //       league_logo:
  //         "https://apiv3.apifootball.com/badges/logo_leagues/168_ligue-1.png",
  //       country_logo:
  //         "https://apiv3.apifootball.com/badges/logo_country/3_france.png",
  //     },
  //     {
  //       league_name: "Chanpions League",
  //       name: "Champions League",
  //       league_id: "3",
  //       league_logo:
  //         "https://apiv3.apifootball.com/badges/logo_leagues/3_uefa_champions_league.png",
  //       country_logo:
  //         "https://logowik.com/content/uploads/images/994_champions_league.jpg",
  //     },
  //   ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topscorers/:id" element={<TopScorers />} />
        <Route path="/matchstats/:id" element={<AllStats />} />
        <Route path="/results/:id" element={<Results />} />
        <Route path="/teams" element={<Favourites />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/competitions/:id" element={<Competitions />} />
        <Route path="/standings/:id" element={<Standings />} />
        <Route path="/stats/:id" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
