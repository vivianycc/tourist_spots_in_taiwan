import Spot from "./Spot";

function SearchResults({ spots }) {
  return (
    <div className="search-results">
      {!spots.length ? (
        <h2>No spots Found</h2>
      ) : (
        spots.map((spot) => (
          <Spot
            id={spot.ID}
            key={spot.ID}
            name={spot.Name}
            description={spot.DescriptionDetail}
            picture={spot.Picture}
          />
        ))
      )}
    </div>
  );
}
export default SearchResults;
