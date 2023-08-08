import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";

import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";

import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useNavigate } from "react-router-dom";

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const icons = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    url: "/stock/",
  },
  {
    title: "Purchase",
    icon: <ShoppingCartCheckoutIcon />,
    url: "/stock/purchases/",
  },
  {
    title: "Sales",
    icon: <LocalAtmIcon />,
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    icon: <StoreIcon />,
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: <StarsIcon />,
    url: "/stock/brands/",
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
    url: "/stock/products/",
  },
  {
    title: "Admin Panel",
    icon: <SupervisorAccountIcon />,
    url: "https://10001.fullstack.clarusway.com/admin",
  },
];

const iconStyle = {
  color: "black",
  "& .MuiSvgIcon-root": { color: "black" },
  "&:hover": { color: "red" },
  "&:hover .MuiSvgIcon-root": { color: "red" },
};

const MenuListItems = () => {
  const navigate = useNavigate();
  return (
    <div>
      <List>
        {icons?.map((item, index) => (
          <ListItem key={index} disablePadding>
            {!item.url.startsWith("http") ? (
              <ListItemButton onClick={() => navigate(item.url)} sx={iconStyle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            ) : (
              <ListItemButton to={item.url} sx={iconStyle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
