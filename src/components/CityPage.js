import Spot from "./Spot";
function CityPage() {
  return (
    <div className="city-page">
      <header>
        <h1>台北市</h1>
      </header>
      <section className="tourist-spot-list">
        <h2>景點</h2>
        <Spot className="tourist-spot-item" />
        <Spot className="tourist-spot-item" />
        <Spot className="tourist-spot-item" />
      </section>
      <section className="tourist-activity-list">
        <Spot className="tourist-activity-item" />
      </section>
    </div>
  );
}

export default CityPage;
