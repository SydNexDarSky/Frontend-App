import React from "react";
import AnotherSection from "../components/AnotherSection";

export default function Home() {

  return (
    <section className="home">
      <h2>This is the Home Page</h2>
      
      <button>Click me</button>

      <AnotherSection /> {/* This is a components */}
      
    </section>
  )
}
