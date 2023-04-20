import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faImage } from "@fortawesome/free-solid-svg-icons";

export default function DataEcommerce(props) {
  return (
    <form
      className="bg-gray-100 shadow-md rounded px-16 pt-6 pb-8 mb-4 xl:mx-20 2xl:mx-40"
      onSubmit={props.handleSubmit}
    >
      <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
        Edit Data Ecommerce
      </h1>
      <div className="mb-4 w-96">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          Address_line_1
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.address_line_1}
          onChange={props.handleInputChange}
          name="address_line_1"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          Address_line_2
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.address_line_2}
          onChange={props.handleInputChange}
          name="address_line_2"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          City
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.city}
          onChange={props.handleInputChange}
          name="city"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          State_province_region
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.state_province_region}
          onChange={props.handleInputChange}
          name="state_province_region"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          zipcode
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.zipcode}
          onChange={props.handleInputChange}
          name="zipcode"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          Phone
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.phone}
          onChange={props.handleInputChange}
          name="phone"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          country_region
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.country_region}
          onChange={props.handleInputChange}
          name="country_region"
        >
          {props.countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center mt-10">
        <button
          type="submit"
          className="w-40 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </div>
    </form>
  );
}
