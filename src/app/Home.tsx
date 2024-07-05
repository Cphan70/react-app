// import { useState } from "react";

import OrderList from "../components/OrderList";
import OrderTable from "../components/OrderTable";

const Home = () => {
  // const [count, setCount] = useState(0);
  return (
    <>
      <OrderTable />
      <OrderList />
    </>
  );
};

export default Home;
