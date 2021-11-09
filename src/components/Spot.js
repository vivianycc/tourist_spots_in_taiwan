function Spot(props) {
  const { name, description } = props;
  return (
    <div className="spot">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
export default Spot;
