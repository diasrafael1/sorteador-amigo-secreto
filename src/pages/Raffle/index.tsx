import { useState } from "react";
import Card from "../../components/Card";
import Form from "./components/Form";
import { FriendSpan } from "./styles";
import AirPlane from "../../assets/aviao.png";

export default function Raffle() {
  const [friend, setFriend] = useState("");

  return (
    <>
      <Card>
        <h1>Quem vai tirar o papelzinho?</h1>
        <Form setFriend={setFriend} />
        {friend && <FriendSpan role="alert">{friend}</FriendSpan>}
        <img src={AirPlane} alt="Imagem de avião de papel" />
      </Card>
    </>
  );
}
