import useListPeoples from "../../state/hooks/useListPeoples";
import { List } from "./styles";

export default function ListPeoples() {
  const list = useListPeoples();
  return (
    <List>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </List>
  );
}
