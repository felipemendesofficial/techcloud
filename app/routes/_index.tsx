import type { MetaFunction } from "@remix-run/node";
import { Blog } from "~/components/blog";
import { Customers } from "~/components/card-customers";
import { Cover } from "~/components/cover";
import { Footer } from "~/components/foooter";
import { FormNews } from "~/components/form-news";
import { Interactions } from "~/components/interactions-erp";
import { NavBar } from "~/components/navbar";
import { ERP } from "~/components/section-erp";
import { Segments } from "~/components/segments";

export const meta: MetaFunction = () => {
  return [
    { title: "TechCloud" },
    { name: "description", content: "Bem vindos a TechCloud" },
  ];
};

export default function Index() {
  return (
    <>
      <NavBar />
      <Cover />
      <Segments />
      <ERP />
      <Interactions />
      <Customers />
      <FormNews />
      <Blog />
      <Footer />
    </>
  );
}
