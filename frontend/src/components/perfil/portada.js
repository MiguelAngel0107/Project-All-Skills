import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

import { connect } from "react-redux";
import APP_URL_SERVIDOR from "@/globals";

//"https://picsum.photos/800/400"
//"https://picsum.photos/200"

const ProfileEditor = ({ picture, banner, fullName }) => {
  useEffect(() => {
    console.log(banner);
  }, []);
  return (
    <div class="w-full max-w-screen-lg mx-auto rounded-md overflow-hidden shadow-lg">
      <div class="relative h-72 md:h-96 bg-indigo-200">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src={`${APP_URL_SERVIDOR}${String(banner)}`}
          alt="Banner"
        />
        <div class="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 flex items-center">
          <div class="mr-4 lg:mr-8">
            <img
              class="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white"
              src={`${APP_URL_SERVIDOR}${picture}`}
              alt="Profile picture"
            />
          </div>
          <div class="text-white">
            <p class="text-2xl md:text-4xl font-bold leading-tight">
              {fullName}
            </p>
            <p class="text-base md:text-lg">@{fullName}</p>
          </div>
        </div>
      </div>
      <div class="p-4 md:p-8">
        <div class="mt-2">
          <p class="text-gray-200 font-semibold text-lg md:text-xl">
            Pensamiento:
          </p>
          <p class="text-gray-600 mt-2 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dui
            ultricies, venenatis risus quis, vulputate sapien. Nunc id orci vel
            felis posuere sodales sit amet sit amet risus. Etiam in ante et mi
            iaculis tempor vel vel magna.
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  picture: state.User.picture,
  banner: state.User.banner,
  fullName: state.User.fullName,
});

export default connect(mapStateToProps, {})(ProfileEditor);
