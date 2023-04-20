import { useEffect, useState } from "react";
import Layout from "@/layouts/layout";


import Head from "next/head";
import SideSettings from "@/components/messenger/sideSettings";
import ContactList from "@/components/messenger/contactList";
import MessageList from "@/components/messenger/showMessages";

const MessagingApp = () => {
  return (
    <Layout>
      <div className="flex h-screen bg-gray-100">
        <Head>
          <title>Mi app de mensajería</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ContactList />
        <MessageList />
        <SideSettings />
      </div>
    </Layout>
  );
};

export default MessagingApp;
