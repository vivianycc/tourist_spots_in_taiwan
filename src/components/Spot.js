import { Link } from "react-router-dom";
import { Star } from "react-feather";
import DefaultImgs from "../assets";
function Spot(props) {
  const { id, name, picture } = props;
  const { PictureUrl1: picUrl, PictureDescription1: picDesc } = picture;
  console.log(picUrl);
  const linkObj = {
    pathname: `/spot/${id}`,
    state: {
      id: id,
    },
  };
  return (
    <Link to={linkObj} id={id}>
      <div className="spot">
        <div className="spot-img">
          <img src={picUrl ? picUrl : DefaultImgs.spot} alt={picDesc} />
        </div>
        <div className="spot-brief">
          <div className="spot-rating">
            <Star />
            <span>5.0</span>
          </div>
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  );
}
export default Spot;
