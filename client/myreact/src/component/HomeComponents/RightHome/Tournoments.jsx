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
          Tournements
        </Typography>
        <Typography style={{marginTop:'15px'}} color={main}>Valorant
            <Typography color={medium}>Tournements A</Typography>
            <Typography color={medium}>Tournements B</Typography>
        </Typography>
        <Typography style={{marginTop:'15px'}} color={main}>PUBG:Battlegrounds
            <Typography color={medium}>Tournements A</Typography>
            <Typography color={medium}>Tournements B</Typography>
        </Typography>
        <Typography style={{marginTop:'15px'}} color={main}>Apex Legends
            <Typography color={medium}>Tournements A</Typography>
            <Typography color={medium}>Tournements B</Typography>
        </Typography>
      <Typography color={medium} m="0.5rem 0">
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
