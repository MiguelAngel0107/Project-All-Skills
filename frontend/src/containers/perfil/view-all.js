import React from "react";
import Layout from "@/layouts/layout";
import { useState, useEffect } from "react";
import SubMenu1 from "@/components/perfil/menus/subMenu1";
import SubMenu2 from "@/components/perfil/menus/subMenu2";
import DatosUser from "@/components/perfil/sections/formData";
import Two from "@/components/perfil/sections/2";
import Three from "@/components/perfil/sections/3";
import Four from "@/components/perfil/sections/4";

import ProfileEditor from "@/components/perfil/portada";

export default function View_All() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [hover, setHover] = useState([true, false, false, false]);
  useEffect(() => {}, [hover]);

  const Change = (e) => {
    if (e[0]) {
      return <DatosUser />;
    }
    if (e[1]) {
      return <Two />;
    }
    if (e[2]) {
      return <Three />;
    }
    if (e[3]) {
      return <Four />;
    }
    console.log(e);
  };
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  return (
    <Layout>
      <ProfileEditor /> 
      {typeof window !== "undefined" && screenWidth >= 500 ? (
        <SubMenu1 setHover={setHover} hover={hover} />
      ) : (
        <SubMenu2 setHover={setHover} hover={hover} />
      )}
      {Change(hover)}
    </Layout>
  );
}
