import sourceSansPro from "@/components/ui/sourceSansPro";
import ContactForm from "@/components/contact/form";

export default function Page() {
  return (
    <div className="py-8 px-48 relative z-10 bg-black/90 text-white">
      <div className="flex flex-row justify-stretch gap-8">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-4xl font-semibold mb-4">
            Crafting Future Solutions Together
          </h1>
          <p className="leading-[150%] mb-4">
            We appreciate your interest in connecting with us. For individuals
            of discerning taste and elevated aspirations, we understand the
            importance of refined communication. Please utilize the form below
            to convey your inquiries, and rest assured, our dedicated team is
            committed to providing you with the prompt and discreet attention
            that befits your status.
          </p>
          <ContactForm sourceSansPro={sourceSansPro} />
          <p className={sourceSansPro.className + " text-center"}>
            Your privacy and satisfaction are of paramount importance to us. We
            look forward to the privilege of addressing your needs with the
            utmost professionalism.
          </p>
        </div>
        <div className="w-1 bg-white flex-shrink"></div>
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-4xl font-semibold mb-4">
            Contact Us | Collaborate for Progress
          </h1>
          <p className={`${sourceSansPro.className} leading-snug`}>
            Elevating beyond borders, we aim to globally share our innovative
            solutions, connecting with diverse communities worldwide and
            bringing excellence to new horizons.
          </p>
          <p className={`${sourceSansPro.className} leading-snug`}>
            PT IURIS INTERNATIONAL INDONESIA
            <br />
            AXA Tower, 36th Floor, Kuningan, Jakarta, Indonesia
            <br />
            +622150101510
            <br />
            info@iurisinternational.com
          </p>
        </div>
      </div>
    </div>
  );
}
