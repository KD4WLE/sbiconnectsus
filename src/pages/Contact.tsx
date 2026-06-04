import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SeoHead from "@/components/seo/SeoHead";
import ContactSchemaJsonLd from "@/components/seo/ContactSchemaJsonLd";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

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

const Contact = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://js.hsforms.net/forms/embed/v2.js"]'
    );

    const createForm = () => {
      const container = document.getElementById("hubspot-contact-form");
      if (container) container.innerHTML = "";

      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "na1",
          portalId: "51553826",
          formId: "e486aa51-0b9d-4a20-815f-29dcfa459999",
          target: "#hubspot-contact-form",
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
      const container = document.getElementById("hubspot-contact-form");
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <Layout>
      <SeoHead
        title="Contact SBI Connects | Schedule a Low-Voltage Infrastructure Consultation"
        description="Contact SBI Connects for a consultation on structured cabling, wireless systems, security, or audio-visual infrastructure. Veteran-owned, RCDD-led design-build services in Longwood, FL."
        canonical="/contact"
        keywords="contact SBI Connects, low voltage consultation, infrastructure quote, Longwood FL, structured cabling contractor, technology consultation"
      />
      <ContactSchemaJsonLd />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Let's <span className="text-gradient">Connect.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell us about your project. We'll scope it, spec it, and deliver it right.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ready to start your next infrastructure project? Reach out and our team will respond within one business day.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Inner = (
                    <div className="flex items-start gap-4 p-4 rounded-xl glass-card hover:border-primary/30 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                        <div className="text-sm font-medium text-foreground">{item.value}</div>
                        {item.sub && <div className="text-xs text-muted-foreground">{item.sub}</div>}
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">
                      {Inner}
                    </a>
                  ) : (
                    <div key={item.label}>{Inner}</div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Request a Consultation</h3>
                <div id="hubspot-contact-form" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;