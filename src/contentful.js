import { createClient } from "contentful";

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  //   space: "7hlyzobe0clw",
  // accessToken: "0MB40y1_mlaxT38_Nt-0ctZzgmO4jf-05II18lf7mCY",
});
