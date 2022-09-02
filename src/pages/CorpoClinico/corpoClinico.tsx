import CardDoctors from "../../components/CardDoctors/cardDoctors";
import Footer from "../../components/Footer/footer";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/Header/header";

const CorpoClinico = () => {
  const { itemFilter, doctorsList } = useContext(AuthContext);
  return (
    <>
    <Header />
      {itemFilter.length > 0 ? (
        <CardDoctors doctorsList={itemFilter} />
      ) : (
        <CardDoctors doctorsList={doctorsList} />
      )}
      <Footer />
    </>
  );
};

export default CorpoClinico;