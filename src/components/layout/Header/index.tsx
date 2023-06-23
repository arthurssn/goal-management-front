import { CircleUserProfilePic, HeaderContainer, UserInfo } from "./styles";
import user_icon from "@/assets/icons/user_icon.svg";
import home_icon from "@/assets/icons/home_icon.svg";
export default function Header() {
  return (
    <HeaderContainer>
      <img src={home_icon} alt="home_icon" />

      <UserInfo>
        Bem-vindo!
        <CircleUserProfilePic>
          <img src={user_icon} alt="user_icon" />
        </CircleUserProfilePic>
      </UserInfo>
    </HeaderContainer>
  );
}
