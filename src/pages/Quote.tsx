import Layout from "@/components/layout/Layout";

const Quote = () => {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-16">
        <section className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold">Get a Quote</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Tell us about your project and our team will follow up to schedule a consultation.
          </p>

          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            {/* Paste Jobber's embed iframe URL here */}
            <iframe
              src="https://clienthub.getjobber.com/hubs/2f579759-c710-4a1e-8a10-8435dddcad5b/public/requests/2158156/new"
              title="SBI Connects Quote Request Form"
              className="h-[900px] w-full rounded-xl border-0"
              loading="lazy"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Quote;