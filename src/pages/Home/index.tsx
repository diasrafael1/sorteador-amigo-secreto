import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import ListPeoples from "../../components/ListPeoples";

export default function Home() {
  return (
    <>
      <Header />
      <Card>
        <h1>Vamos começar!</h1>
        <Form />
        <ListPeoples />
        <Footer />
      </Card>
    </>
  );
}
