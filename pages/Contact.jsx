import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "./Header";

function Contact() {
  return (
    <div>
      <main>
        <div className="relative">
          <img src="/bg.jpg" alt="" className="relative" />
          <div className="absolute text-yellow-200 z-2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-4xl font-bold">
            Contact Page
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
