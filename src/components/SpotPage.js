import IconButton from "./IconButton";
import {
  ChevronLeft,
  Clock,
  MapPin,
  Map,
  Phone,
  Link,
  Edit2,
  Check,
  X,
} from "react-feather";
function SpotPage() {
  return (
    <div className="spot-page">
      <header>
        <IconButton>
          <ChevronLeft />
        </IconButton>
        <div className="title-content">
          <h1>Name of the Spot</h1>
          <div className="label">小標籤</div>
        </div>
      </header>
      <div className="spot-content">
        <div className="spot-info">
          <div className="open-time">
            <Clock />
            <span>
              全年除春祭（3月29日）、秋祭（9月3日）祭典前一日及當日中午前暫停開放外，均免費對外開放，每日參觀時間自上午0900時至下午1700時",
            </span>
          </div>
          <div className="website">
            <Link />
            <span>https://afrc.mnd.gov.tw/faith_martyr/index.aspx</span>
          </div>
          <address className="address">
            <MapPin />
            <span>臺北市</span>
          </address>
          <div className="parking">
            <Check />
            <span>有停車位</span>
          </div>
        </div>
        <div className="spot-desc">
          <h2>景點介紹</h2>
          1966年林先生返臺定居，這座洋房由他親自設計，結合中國四合院與西方美學建築，藍瓦白牆，拱門迴廊，融合現代感觀及古典之美。地點則是選擇在貌似福建故鄉山景的陽明山，在此，可以聽到親切的閩南話，讓他備感欣慰。他曾經形容這座宅院「宅中有園，園中有屋，屋中有院，院中有樹，樹上有天，天上有月，不亦快哉」，陽台是林先生生前常來的地方；吃完晚飯，林先生最喜歡坐在桌旁的藤椅上，口含煙斗，欣賞夕照沉沒於觀音山際，你也可以來此體驗這樣的閑情。
          觀看更多名人故居故事\t王大閎建國南路自宅\t錢穆故居\t孫運璿重慶南路寓所\t草山行館\t原臺灣軍司令官官邸(孫立人將軍官邸)\t摩耶精舍（張大千園邸）",
        </div>
        <div className="spot-update-time">上次更新：12/12/12</div>
      </div>
      <div className="spot-contact">
        <button className="text-button call">
          <Phone />
          打電話
        </button>
        <button className="text-button map">
          <Map />
          看地圖
        </button>
      </div>
    </div>
  );
}

export default SpotPage;
