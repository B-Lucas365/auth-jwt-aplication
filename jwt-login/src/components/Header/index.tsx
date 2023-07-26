import { Container, Profile } from "./styles";
import Image from "next/image";
import logo from "@/public/logo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";

export const Header = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/me")
    .then((response) => console.log(response))
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <Container>
      <Image src={logo} alt="" width={70} />

      <Profile>
        <div className="notifications">
          <CircleNotificationsIcon className="icons" />
          <ChatBubbleIcon className="icons" />
        </div>

        <div className="divider"></div>

        <div className="profile">
          <AccountCircleIcon className="user-icon" />
          <div className="user-info">
            <p>{user?.email}</p>
            <p>Role</p>
          </div>
        </div>
      </Profile>
    </Container>
  );
};
