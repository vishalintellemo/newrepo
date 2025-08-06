import Head from "next/head";
import Header from "./Header";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [selectedText, setSelectedText] = useState(null);
  const homePageData = [
    { listName: "Title1", listDescription: "Description1" },
    { listName: "Title2", listDescription: "Description2" },
    { listName: "Title3", listDescription: "Description3" },
  ]

  const handleElementSelect = (e) => {
    const elementText = e.currentTarget.textContent
    setSelectedText(elementText)
  }
  const homeData = [...homePageData];

  const handleInputChange = () => {
    
  }
  return (
    <div>
      <main>
        <div className="relative">
          <img src="/bg.jpg" alt="" className="relative" />
          <div className="absolute text-white z-2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-4xl font-bold backdrop-blur-sm p-5 rounded-2xl">
            <h1 className="mb-3">Home Page</h1>
            <ul className="mb-3">
              {homeData.map((data, index) => (
                <li key={index} className="text-sm font-medium">
                  <span>Name:</span> <button onClick={handleElementSelect}>{data.listName}</button> ||{" "}
                  <span>Description:</span> <button onClick={handleElementSelect}>{data.listDescription}</button>
                </li>
              ))}
            </ul>
            <div className="text-sm font-light">
              <div className="font-semibold mb-2">
                Selected Text : 
                <span className="text-yellow-200">{selectedText}</span>
              </div>
              <input type="text" className="border-white border w-100" placeholder={selectedText} onChange={handleInputChange}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
