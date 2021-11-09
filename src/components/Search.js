import { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import { CITIES } from "../constants";
import { getAuthorizationHeader } from "../helper";

function Search() {
  const [keyword, setKeyword] = useState("宜蘭");
  const [city, setCity] = useState("Taipei");
  const [spots, setSpots] = useState([]);
  const API_URL = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=30&$format=JSON`;
  useEffect(() => {
    requestSpots();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestSpots() {
    const { data } = await axios.get(API_URL, {
      headers: getAuthorizationHeader(),
    });

    setSpots(data);
  }
  return (
    <div className="search-area">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestSpots();
        }}
      >
        <label htmlFor="search">搜尋</label>
        <input
          id="search"
          type="search"
          value={keyword}
          placeholder="請輸入關鍵字"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <label htmlFor="city">地點</label>
        <select
          name="cities"
          id="city"
          onChange={(e) => setCity(e.target.value)}
          onBlur={(e) => setCity(e.target.value)}
        >
          <option />
          {Object.keys(CITIES).map((city) => (
            <option key={city} value={city}>
              {CITIES[city]}
            </option>
          ))}
        </select>

        <button type="submit">查詢</button>
      </form>
      <SearchResults spots={spots} />
      {console.log(spots)}
    </div>
  );
}

export default Search;
