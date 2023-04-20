import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import { faUser, faImage } from "@fortawesome/free-solid-svg-icons";

export default function DataSocial(props) {
  return (
    <form
      className="bg-gray-100 shadow-md rounded px-16 pt-6 pb-8 mb-4 xl:mx-20 2xl:mx-40"
      onSubmit={props.handleSubmit}
    >
      <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
        Edit Data Social
      </h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          Full Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.fullName}
          onChange={props.handleInputChange}
          name="fullName"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="picture">
          Picture
        </label>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="mr-2 text-indigo-800" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="picture"
            name="picture"
            type="file"
            onChange={props.handleImageChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="banner">
          Banner
        </label>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faImage} className="mr-2 text-indigo-800" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="banner"
            name="banner"
            type="file"
            onChange={props.handleImageChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          Biografia
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.biografia}
          onChange={props.handleInputChange}
          name="biografia"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          birthday
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
          value={props.birthday}
          onChange={props.handleInputChange}
          name="birthday"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          Location
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.location}
          onChange={props.handleInputChange}
          name="location"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="full name"
        >
          Pagina Web {"(url)"}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.url}
          onChange={props.handleInputChange}
          name="url"
        />
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
