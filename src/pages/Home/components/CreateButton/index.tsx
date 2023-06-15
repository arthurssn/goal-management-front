import { CreateButtonStyle } from "./styles";
import add_icon from "./assets/add_icon.svg";
export default function CreateButton({}: { children?: JSX.Element }) {
  return (
    <>
      <CreateButtonStyle>
        <img src={add_icon} /> Create
      </CreateButtonStyle>
    </>
  );
}
