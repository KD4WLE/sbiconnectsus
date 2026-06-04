import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const Quote = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.async = true;

    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "na1",
          portalId: "51553826",
          formId: "e486aa51-0b9d-4a20-815f-29dcfa459999",
          target: "#hubspot-form",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      const container = document.getElementById("hubspot-form");
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <Layout>
      <main className="container mx-auto px-4 py-16">
        <section className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold">Get a Quote</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Tell us about your project and our team will follow up to schedule a consultation.
          </p>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div id="hubspot-form" />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Quote;