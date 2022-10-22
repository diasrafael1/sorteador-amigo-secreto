import Card from "components/Card";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ListPeople from "./components/ListPeople";

export default function Home() {
  return (
    <>
      <Card>
        <h1>Vamos começar!</h1>
        <Form />
        <ListPeople />
        <Footer />
      </Card>
    </>
  );
}
