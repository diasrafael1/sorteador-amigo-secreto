import useListPeople from "../../state/hooks/useListPeople";
import { List } from "./styles";

export default function ListPeople() {
  const list = useListPeople();
  return (
    <List>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </List>
  );
}
