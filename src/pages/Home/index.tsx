import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import ListPeople from "../../components/ListPeople";

export default function Home() {
  return (
    <>
      <Header />
      <Card>
        <h1>Vamos começar!</h1>
        <Form />
        <ListPeople />
        <Footer />
      </Card>
    </>
  );
}
