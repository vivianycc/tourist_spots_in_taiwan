import { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import IconButton from "./IconButton";
import { Search } from "react-feather";
import { getAuthorizationHeader } from "../helper";

function SearchSpot() {
  const [keyword, setKeyword] = useState("公園");
  const [spots, setSpots] = useState([]);
  const API_URL = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$select=ID%2CName%2CPicture&$filter=contains(Name%2C%20'${keyword}')&$top=50&$format=JSON
  `;
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
        <label htmlFor="search">你想要去哪裡？</label>
        <input
          id="search"
          type="search"
          value={keyword}
          placeholder="請輸入關鍵字"
          onChange={(e) => setKeyword(e.target.value)}
        />
        {/* <label htmlFor="city">地點</label>
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
        </select> */}
        <IconButton className="search dark" type="submit">
          <Search />
        </IconButton>
      </form>
      <SearchResults spots={spots} />
    </div>
  );
}

export default SearchSpot;
