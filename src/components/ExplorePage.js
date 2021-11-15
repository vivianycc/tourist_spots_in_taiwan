import SearchSpot from "./SearchSpot";
import City from "./City";
import IconButton from "./IconButton";
import { Filter } from "react-feather";
function ExplorePage() {
  return (
    <div className="explore-page">
      {/* <IconButton className="filter-button solid">
        <Filter className="search-button dark" />
      </IconButton> */}
      <SearchSpot />
      {/* <div className="cities">
        <City />
        <City />
        <City />
        <City />
        <City />
        <City />
      </div>  */}
    </div>
  );
}

export default ExplorePage;
