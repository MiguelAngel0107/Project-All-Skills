import React from "react";
import APP_URL_SERVIDOR from "@/globals";

export default function PortadaPublic(props) {
  const UserPublic = props.UserPublic;
  return (
    <div class="w-full max-w-screen-lg mx-auto rounded-md overflow-hidden shadow-lg">
      <div class="relative h-72 md:h-96 bg-indigo-200">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src={`${APP_URL_SERVIDOR}${String(UserPublic.banner)}`}
          alt="Banner"
        />
        <div class="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 flex items-center">
          <div class="mr-4 lg:mr-8">
            <img
              class="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white"
              src={`${APP_URL_SERVIDOR}${UserPublic.picture}`}
              alt="Profile picture"
            />
          </div>
          <div class="text-white">
            <p class="text-2xl md:text-4xl font-bold leading-tight">
              {UserPublic.fullName}
            </p>
            <p class="text-base md:text-lg">@{UserPublic.fullName}</p>
          </div>
        </div>
      </div>
      {UserPublic.biografia && (
        <div class="p-4 md:p-2">
          <div class="mt-2">
            <p class="text-gray-200 font-semibold text-lg md:text-xl">
              Biografia:
            </p>
            <p class="text-gray-400 mt-2 text-base md:text-lg">
              {String(UserPublic.biografia)}s
            </p>
          </div>
        </div>
      )}
      {UserPublic.birthday && (
        <div class="p-4 md:p-2">
          <div class="mt-2">
            <p class="text-gray-200 font-semibold text-lg md:text-xl">
              Birthday:
            </p>
            <p class="text-gray-400 mt-2 text-base md:text-lg">
              {String(UserPublic.birthday)}s
            </p>
          </div>
        </div>
      )}
      {UserPublic.urlWeb && (
        <div class="p-4 md:p-2">
          <div class="mt-2">
            <p class="text-gray-200 font-semibold text-lg md:text-xl">
              My Page:
            </p>
            <p class="text-gray-400 mt-2 text-base md:text-lg hover:text-blue-500">
              <a href={`${String(UserPublic.urlWeb)}`}>
                {String(UserPublic.urlWeb)}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
