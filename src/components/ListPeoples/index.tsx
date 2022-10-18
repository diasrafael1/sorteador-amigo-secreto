import useListPeoples from "../../state/hooks/useListPeoples";

export default function ListPeoples() {
  const list = useListPeoples();
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
