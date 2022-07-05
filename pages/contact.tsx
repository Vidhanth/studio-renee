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
        <div className="mx-auto mt-7 max-w-6xl px-7 sm:px-6 lg:mt-16 lg:px-8">
          <h1 className="text-3xl lg:text-[2.5rem] font-medium">
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

            <div className="grid grid-cols-12 gap-y-8">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.84196751461!2d77.59030941524074!3d12.917876719549044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bfd1934751%3A0xd421098a499824c6!2sStudio%20Ren%C3%A9e!5e0!3m2!1sen!2sin!4v1632890998681!5m2!1sen!2sin"
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
