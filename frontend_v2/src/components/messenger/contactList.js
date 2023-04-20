import React from 'react';

const ContactList = () => {
    const contacts = [
        {
          id: 1,
          name: 'Juan Perez',
          avatar: '/profile.jpg',
          active: true,
        },
        {
          id: 2,
          name: 'Maria Rodriguez',
          avatar: '/profile.jpg',
          active: false,
        },
        {
          id: 3,
          name: 'Pedro Sanchez',
          avatar: '/profile.jpg',
          active: false,
        },
      ];
  return (
    <div className="flex-3 p-4 bg-gray-900 text-white">
      <h2 className="text-lg font-medium mb-4">Contactos</h2>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className={`flex items-center space-x-4 px-2 py-2 rounded-lg cursor-pointer ${
              contact.active
                ? 'bg-indigo-600 text-white'
                : 'hover:bg-indigo-600 hover:text-white'
            }`}
          >
            <img
              className="w-10 h-10 rounded-full"
              src={contact.avatar}
              alt={contact.name}
            />
            <div className="flex-1">
              <h2 className="text-lg font-medium">{contact.name}</h2>
            </div>
            {contact.active && (
              <svg
                className="w-4 h-4 fill-current text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;