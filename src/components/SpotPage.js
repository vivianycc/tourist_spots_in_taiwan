import { useState, useEffect } from "react";
import IconButton from "./IconButton";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuthorizationHeader } from "../helper";
import DefaultImgs from "../assets";
import {
  ChevronLeft,
  Clock,
  MapPin,
  Map,
  Phone,
  ExternalLink,
  Edit2,
  Check,
  X,
} from "react-feather";

function SpotPage(props) {
  const defaultData = {};
  // {
  //   name: "景點名稱",
  //   desc: "景點敘述",
  //   picture: {},
  //   class1: "",
  //   openTime: "open time",
  //   parking: {},
  //   updateTime: {},
  //   website: "website url",
  //   address: "address",
  //   phone: "phone number",
  //   position: {},
  // };
  const [spotInfo, setSpotInfo] = useState(defaultData);
  const { id } = useParams();
  let navigate = useNavigate();
  const API_URL = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=ID%20eq%20'${id}'&$top=3&$format=JSON`;

  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    const { data } = await axios.get(API_URL, {
      headers: getAuthorizationHeader(),
    });

    setSpotInfo(data[0]);
  }

  const {
    Name: name = "景點名稱",
    DescriptionDetail: desc = "description",
    Picture: picture = {},
    Class1: class1 = "",
    OpenTime: openTime = "open time",
    ParkingPosition: parking = {},
    UpdateTime: updateTime = "update time",
    WebsiteUrl: website = "",
    Address: address = "address",
    Phone: phone = "phone num",
    Position: position = {},
  } = spotInfo;
  const { PictureUrl1: picUrl, PictureDescription1: picDesc } = picture;

  return (
    <div className="spot-page">
      <header>
        <IconButton
          className="white back-button"
          clickHandler={() => navigate(-1)}
        >
          <ChevronLeft />
        </IconButton>
        <div className="title-content">
          <h1>{name}</h1>
          {class1 ? <div className="label">{class1}</div> : null}
        </div>
        <div className="spot-header-img">
          <img src={picUrl ? picUrl : DefaultImgs.spot} alt={picDesc} />
        </div>
      </header>
      <div className="spot-content">
        <div className="spot-info">
          <div className="open-time">
            <Clock />
            <span>{openTime ? openTime : "沒有資料"}</span>
          </div>
          {website ? (
            <div className="website">
              <ExternalLink />
              <Link to={website}>{website}</Link>
            </div>
          ) : null}
          {address ? (
            <address className="address">
              <MapPin />
              <span>臺北市</span>
            </address>
          ) : null}
          <div className="parking">
            {parking === {} ? (
              <span>
                <Check />
                有停車位
              </span>
            ) : (
              <span>
                <X />
                沒有停車位
              </span>
            )}
          </div>
        </div>
        <div className="spot-desc">
          <h2>景點介紹</h2>
          <p>{desc}</p>
        </div>
        <div className="spot-update-time">
          <Edit2 />
          <span>{updateTime}</span>
        </div>
      </div>
      <div className="spot-contact">
        {phone ? (
          <a href={`tel:${phone}`} className="text-button call">
            <Phone />
            打電話
          </a>
        ) : null}
        <a
          href={`http://maps.google.com/maps?z=12&t=m&q=loc:${position.PositionLat}+${position.PositionLon}
`}
          className="text-button map"
        >
          <Map />
          看地圖
        </a>
      </div>
    </div>
  );
}

export default SpotPage;
