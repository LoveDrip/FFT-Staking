 import SDoodStaking from "layouts/sdoodstaking"; 

// @mui icons
import LocalOfferIcon from "@mui/icons-material/LocalOffer"; 

const routes = [ 
  {
    type: "collapse",
    name: "FFT STAKING",
    key: "FFTStaking",
    icon: <LocalOfferIcon />,
    route: "/FFTstaking",
    component: <SDoodStaking />,
  }, 
];

export default routes;
