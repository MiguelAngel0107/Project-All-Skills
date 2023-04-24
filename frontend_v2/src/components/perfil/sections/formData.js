import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faImage } from "@fortawesome/free-solid-svg-icons";
import { countries } from "@/helpers/countries";

import DataSocial from "./formData/dataSocial";
import DataEcommerce from "./formData/dataEcommerce";
import { connect } from "react-redux";
import {
  update_data_user,
  update_data_user_ecommerce,
} from "@/redux/actions/perfil";
import FormProfile from "./formData/formProfile";

const DatosUser = ({ update_data_user, update_data_user_ecommerce }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    picture: null,
    banner: null,
    biografia: "",
    birthday: "",
    location: "",
    url: "",
  });
  const [formDataEcommerce, setFormDataEcommerce] = useState({
    address_line_1: "",
    address_line_2: "",
    city: "",
    state_province_region: "",
    zipcode: "",
    phone: "",
    country_region: "Peru",
  });
  const { fullName, biografia, birthday, location, url } = formData;

  const {
    address_line_1,
    address_line_2,
    city,
    state_province_region,
    zipcode,
    phone,
    country_region,
  } = formDataEcommerce;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleInputChangeEcommerce = (event) => {
    const { name, value } = event.target;
    setFormDataEcommerce({ ...formDataEcommerce, [name]: value });
  };
  const handleImageChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("picture", formData.picture);
    formDataToSend.append("banner", formData.banner);
    formDataToSend.append("biografia", formData.biografia);
    formDataToSend.append("birthday", formData.birthday);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("url", formData.url);
    update_data_user(formDataToSend);

    // Replace 'API_ENDPOINT' with your API endpoint
  };
  const handleSubmitEcommerce = (event) => {
    event.preventDefault();
    const formDataEcommerceToSend = new FormData();
    formDataEcommerceToSend.append(
      "address_line_1",
      formDataEcommerce.address_line_1
    );
    formDataEcommerceToSend.append(
      "address_line_2",
      formDataEcommerce.address_line_2
    );
    formDataEcommerceToSend.append("city", formDataEcommerce.city);
    formDataEcommerceToSend.append(
      "state_province_region",
      formDataEcommerce.state_province_region
    );
    formDataEcommerceToSend.append("zipcode", formDataEcommerce.zipcode);
    formDataEcommerceToSend.append("phone", formDataEcommerce.phone);
    formDataEcommerceToSend.append(
      "country_region",
      formDataEcommerce.country_region
    );
    update_data_user_ecommerce(formDataEcommerceToSend);

    // Replace 'API_ENDPOINT' with your API endpoint
  };

  return (
    <>
      <div className="flex flex-col xl:flex-row items-center justify-center mt-16 mb-16 ">
        <DataSocial
          handleInputChange={handleInputChange}
          handleImageChange={handleImageChange}
          fullName={fullName}
          biografia={biografia}
          birthday={birthday}
          location={location}
          url={url}
          handleSubmit={handleSubmit}
        />

        <DataEcommerce
          handleInputChange={handleInputChangeEcommerce}
          address_line_1={address_line_1}
          address_line_2={address_line_2}
          city={city}
          state_province_region={state_province_region}
          zipcode={zipcode}
          phone={phone}
          country_region={country_region}
          countries={countries}
          handleSubmit={handleSubmitEcommerce}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  update_data_user,
  update_data_user_ecommerce,
})(DatosUser);
