import jsSHA from "jssha";
export function getAuthorizationHeader() {
  let AppID = "fbe78613b5394fdda728acaf51ee3d61";
  let AppKey = "r4Q6k0QzxX0rj9r6wb2WsuDSsaQ";

  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;

  return { Authorization: Authorization, "X-Date": GMTString };
}

export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
