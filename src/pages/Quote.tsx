import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "2120 N Ronald Reagan Blvd, Unit 1104",
    sub: "Longwood, FL 32750",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(407) 509-3004",
    href: "tel:+14075093004",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@sbiconnects.us",
    href: "mailto:info@sbiconnects.us",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday – Friday",
    sub: "8:00 AM – 5:00 PM EST",
  },
];

const Quote = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://js.hsforms.net/forms/embed/v2.js"]'
    );

    const createForm = () => {
      const container = document.getElementById("hubspot-form");
      if (container) container.innerHTML = "";

      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "na1",
          portalId: "51553826",
          formId: "e486aa51-0b9d-4a20-815f-29dcfa459999",
          target: "#hubspot-form",
        });
      }
    };

    if (existingScript) {
      createForm();
    } else {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = createForm;
      document.body.appendChild(script);
    }

    return () => {
      const container = document.getElementById("hubspot-form");
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <Layout>
      <main className="container mx-auto px-4 py-16">
        <section className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-4xl font-bold">
            Request a Consultation
          </h1>

          <p className="mb-12 text-lg text-muted-foreground">
            Tell us about your project and our team will follow up to schedule
            a consultation.
          </p>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold">Get In Touch</h2>

              <p className="text-muted-foreground">
                Ready to start your next infrastructure project? Reach out and
                our team will respond within one business day.
              </p>

              {contactInfo.map((item) => {
                const Inner = (
                  <div className="flex items-start gap-4 rounded-xl border p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>

                      <div className="font-semibold">
                        {item.value}
                      </div>

                      {item.sub && (
                        <div className="text-muted-foreground">
                          {item.sub}
                        </div>
                      )}
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={item.label}>{Inner}</div>
                );
              })}
            </div>

            {/* HubSpot Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-xl font-semibold text-slate-900">
                  Request a Consultation
                </h3>

                <div id="hubspot-form" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Quote;