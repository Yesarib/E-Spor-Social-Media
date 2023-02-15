import { Typography, useTheme } from "@mui/material";
import WidgetWrapper from "../../WidgetWrapper/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper style={{marginTop:'20px'}}>
        <Typography color={dark} variant="h5" fontWeight="500">
          Looking For Player
        </Typography>
        <Typography style={{marginTop:'15px'}} color={main}>
            {/* <img src="assets/heart.png" alt="" /> */}
            Pulse
            <Typography color={medium}>Apex Legends</Typography>
        </Typography>
        <Typography style={{marginTop:'15px'}} color={main}>Project
            <Typography color={medium}>PUBG:Battlegrounds</Typography>
            <Typography color={medium}>Apex Legends</Typography>
        </Typography>
        <Typography style={{marginTop:'15px'}} color={main}>Team Effect
            <Typography color={medium}>Valorant</Typography>
        </Typography>
      <Typography color={medium} m="0.5rem 0">
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
