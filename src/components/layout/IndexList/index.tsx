import { IndexListContainer, IndexListTitle } from "./styles";

export default function IndexList({
  title,
  content,
}: {
  title: string;
  content?: JSX.Element;
}) {
  return (
    <IndexListContainer>
      <IndexListTitle>{title}</IndexListTitle>
      {content}
    </IndexListContainer>
  );
}
