import { BaseButton } from "@/components/buttons/styles";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ICardFormProps {
  title: string;
  children: React.ReactNode;
  onClickBack: string;
}

const CardFormContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

export const CardFormTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #ff3f34;
  margin-bottom: 35px;
`;

const CardFormButtonBack = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border: none;
  padding: 10px 25px;
  color: white;
  transform: translateY(-100%);
`;

export default function CardForm({
  title,
  children,
  onClickBack,
}: ICardFormProps) {
  const navigate = useNavigate();
  return (
    <CardFormContainer>
      <CardFormTitle>{title}</CardFormTitle>
      <CardFormButtonBack
        onClick={() => navigate(onClickBack)}
        color="red"
        size="sm"
      >
        Voltar
      </CardFormButtonBack>
      {children}
    </CardFormContainer>
  );
}
