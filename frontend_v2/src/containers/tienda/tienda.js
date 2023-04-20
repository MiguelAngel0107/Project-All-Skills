import { useState } from "react";
import SideFilter from "@/components/tienda/filters/sideFilter";
import ViewProducts from "@/components/tienda/viewProducts";
import Layout from "@/layouts/layout";

const Tienda = () => {
  const [filtered, setFiltered] = useState(false);
  return (
    <Layout>
      <div className="flex flex-row mt-10">
        <div class="basis-1/6">
          <SideFilter setFiltered={setFiltered}/>
        </div>
        <div class="basis-5/6">
          <ViewProducts filtered={filtered}/>
        </div>
      </div>
    </Layout>
  );
};

export default Tienda;
