"use client";

// import sourceSansPro from '@/components/ui/sourceSansPro'
import { useFormState, useFormStatus } from "react-dom";
import { saveContactForm } from '@/app/actions';
import { NextFont } from "next/dist/compiled/@next/font";
import { useEffect, useState } from "react";

const initialState = {
    message: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className='px-6 py-2 border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] hover:bg-grey mt-4 flex justify-center items-center transition-all'
            aria-disabled={pending}
            disabled={pending}
        >
            {pending ? <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg> : "Send"}
        </button>
    );
}

const ContactForm = (props: { sourceSansPro: NextFont }) => {
    const [state, formAction] = useFormState(saveContactForm, initialState);
    const [status, setStatus] = useState(null as boolean | null);

    useEffect(() => {
        const form = document.getElementById("contact-form") as HTMLFormElement | null;
        if (state.message != "") {
            if (state.message == "success") {
                form?.reset();
                setStatus(true);
                setTimeout(() => {
                    setStatus(null)
                }, 2500);
            } else {
                setStatus(false);
            }
        }
    }, [state])

    return (
        <>
            <form id="contact-form" action={formAction} className='flex flex-col gap-4 w-10/12'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" id="name" placeholder='Input Name' className={`${props.sourceSansPro.className} p-2 placeholder:text-[#D9D9D9] placeholder:font-[${props.sourceSansPro.className}] text-black text-sm`} required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="email" placeholder='example@email.com' className={`${props.sourceSansPro.className} p-2 placeholder:text-[#D9D9D9] placeholder:font-[${props.sourceSansPro.className}] text-black text-sm`} required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='message'>Message</label>
                    <input type="text" name="message" id="message" placeholder='Input message' className={`${props.sourceSansPro.className} p-2 placeholder:text-[#D9D9D9] placeholder:font-[${props.sourceSansPro.className}] text-black text-sm`} required />
                </div>
                <SubmitButton />
            </form>
            <p
                id="form-status"
                aria-live="polite"
                className={"px-4 py-2 rounded-tl-3xl rounded-br-3xl border border-white transition-opacity opacity-0 " + (
                    status == null
                        ? ""
                        :
                        status
                            ? "bg-green-900 !opacity-100"
                            : "bg-red-900 !opacity-100"
                )}
                role="status"
            >
                {state?.message}
            </p></>

    )

}

export default ContactForm