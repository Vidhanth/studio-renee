import { NextPage } from "next";

import { Button } from "@/components/Elements/Button";
import { Field, Input, Textarea } from "@/components/Form";
import { Head } from "@/components/Head";
import { DefaultLayout } from "@/components/Layout";

const Contact: NextPage = () => {
  return (
    <DefaultLayout>
      <Head title="Contact" />

      <main>
        <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:mt-16 lg:px-8">
          <h1 className="font-montserrat text-3xl lg:text-[2.5rem]">
            We&apos;d love to hear from you!
          </h1>

          <form
            className="mt-12"
            name="contact-form"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact-form" />

            <div className="grid grid-cols-12 gap-8">
              {/* Honeypot field to prevent spam. */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <Field label="Name" className="col-span-12">
                <Input required type="text" name="first_name" id="first_name" />
              </Field>

              <Field label="Phone Number" className="col-span-12 sm:col-span-6">
                <Input
                  required
                  type="text"
                  name="phone_number"
                  id="phone_number"
                />
              </Field>

              <Field label="Email" className="col-span-12 sm:col-span-6">
                <Input required type="email" name="email" id="email" />
              </Field>

              <Field label="Message" className="col-span-12">
                <Textarea required name="message" id="message" />
              </Field>
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="neutral" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-20 h-[40rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d794.0298963974951!2d77.5770247657798!3d12.988448476438021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae163d86137e33%3A0xdcefcaba8911733a!2s17%2C%20N%20S%20Iyengar%20St%2C%204th%20Block%2C%20Kumara%20Park%20West%2C%20Seshadripuram%2C%20Bengaluru%2C%20Karnataka%20560020!5e0!3m2!1sen!2sin!4v1648467177672!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Contact;
