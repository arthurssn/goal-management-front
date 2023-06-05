import { CircleUserProfilePic, HeaderContainer, UserInfo } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <img src="src/assets/icons/home_icon.svg" alt="home_icon" />

      <UserInfo>
        Olá, Arthur!
        <CircleUserProfilePic>
          <img src="src/assets/icons/user_icon.svg" alt="user_icon" />
        </CircleUserProfilePic>
      </UserInfo>
    </HeaderContainer>
  );
}
