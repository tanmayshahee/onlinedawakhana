"use client";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Treatments from "../components/Treatments";
import BookAppointment from "../components/BookAppointment";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Natural Health - Homeopathy</title>
        <meta
          name="description"
          content="Book natural health treatments and consultations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Treatments />
      <BookAppointment />
      <Footer />
    </>
  );
}
