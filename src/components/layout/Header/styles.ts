import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const UserInfo = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.textColors.secondaryColor};
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CircleUserProfilePic = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.principalColor};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 40px;
    height: 40px;
  }
`;
