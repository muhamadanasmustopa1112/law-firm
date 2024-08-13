import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image';

const sourceSansPro = localFont({
    src: [
        {
            path: '../../../public/fonts/SourceSansPro-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/SourceSansPro-Semibold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/SourceSansPro-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ]
});
interface Services {
    name: string,
    path: string,
    content: React.ReactNode,
}

const page = ({
    params,
}: {
    params: {
        solution: string
    }
}) => {
    const services: Services[] = [
        {
            name: "Consulting Services",
            path: "consulting",
            content: <p>Empower your business with strategic Consulting Services tailored to drive success. At IURIS, we bring a wealth of expertise to the table, assisting companies in navigating complex challenges and optimizing their operations. Our seasoned consultants work collaboratively with your team, offering insights, developing effective strategies, and implementing solutions that propel your business towards sustainable growth. From organizational restructuring to process improvement, count on us to be your trusted partner in achieving strategic excellence.</p>,

        },
        {
            name: "Marketing Solutions",
            path: "marketing",
            content: <p>Unleash the full potential of your brand with our dynamic Marketing Solutions. IURIS is dedicated to crafting innovative and results-driven marketing strategies that resonate with your target audience. Whether you&apos;re looking to enhance your digital presence, launch impactful campaigns, or refine your brand identity, our team of marketing experts is committed to delivering creative and data-backed solutions. Elevate your brand and stay ahead in the competitive landscape with our comprehensive suite of marketing services.</p>
        },
        {
            name: "Staffing Support",
            path: "staffing",
            content: <p>Streamline your workforce with our tailored Staffing Support services. At IURIS, we understand the importance of having the right talent to drive your business forward. Our staffing solutions encompass temporary, permanent, and project-based placements, ensuring you have the right people with the right skills at the right time. From entry-level positions to executive roles, we excel in identifying and placing top-notch talent that aligns seamlessly with your company culture and goals. Trust us to be your strategic partner in building a high-performing and agile team.</p>
        },
        {
            name: "Auxiliary Services",
            path: "auxiliary-services",
            content: <ul className='text-left list-disc'>
                <li className="font-bold">
                    Real Estate Brokerage/Agency Consulting: <span className="font-light">Strategic guidance for optimizing real estate investments.</span>
                </li>
                <li className="font-bold">
                    Hedge Fund/Private Equity/Family Office/Venture Capital Consulting: <span className="font-light">Specialized insights to navigate dynamic financial markets.</span>
                </li>
                <li className="font-bold">United States Business Integration Services: <span className="font-light">Streamlined support for a seamless entry into the U.S. market.</span>
                </li>
                <li className="font-bold">Cross-Border Financing Services: <span className="font-light">Tailored financial solutions for international business transactions.</span>
                </li>
                <li className="font-bold">Investor Relations Services: <span className="font-light">Building trust and enhancing communication with stakeholders for sustained success.</span>
                </li>
            </ul>
        },
        {
            name: "Global Business Transitions",
            path: "business-transition",
            content: <p>Embark on a new era of international business success with IURIS upcoming Business Expat Services. Our comprehensive suite of solutions is meticulously crafted to simplify the complexities of global business transitions, ensuring a smooth and productive journey for professionals venturing into new territories. Stay tuned for a seamless blend of expertise and support, tailored to elevate your business ventures on a global scale.</p>
        },
        {
            name: "Tech Firm Consulting Services",
            path: "tech-firm",
            content: <p>Empower your tech firm with our cutting-edge Consulting Services at IURIS. Our specialized team of consultants brings a wealth of industry knowledge to optimize your operations, implement innovative strategies, and propel your business to new heights. From technology adoption to digital transformation, trust us to be your strategic partner in navigating the dynamic landscape of the tech industry, ensuring your firm stays ahead in this ever-evolving digital era.</p>
        },
        {
            name: "ICO Consulting",
            path: "ico-consulting",
            content: <div className='flex flex-col items-center gap-4'>
                <div className="flex items-center justify-between my-5 overflow-hidden bg-slate-900 p-10 rounded-xl gap-7">
                    <div className="w-1/2">
                        <h3 className="text-4xl font-semibold mb-5">Launch Your ICO with IURIS</h3>
                        <p className="text-xl mb-4">Welcome to IURIS, your reliable partner in providing fast and affordable ICO services. Our mission is to make ICO development accessible to everyone, regardless of their budget or technical expertise.</p>
                        <p className="text-xl mb-4">At IURIS, we&apos;re committed to helping you launch a successful ICO quickly and cost-effectively. Contact us today to learn more about our services and how we can help you achieve your fundraising goals. Let&apos;s work together to bring your vision to life.</p>
                    </div>
                    <div className="flex-shrink">
                        <Image alt="IURIS ICO" src={"/img/ico-consulting.webp"} height={500} width={500} />
                    </div>
                </div>
                <div className="flex flex-col items-center mb-5">
                    <div className="grid grid-cols-4 gap-5"><div className="bg-slate-900 p-4 rounded-xl"><h3 className="text-2xl text-center font-semibold mb-5">Affordable Pricing</h3><p>We know that cost is a significant factor for many startups and entrepreneurs. That&apos;s why we offer affordable pricing for all of our ICO services, without sacrificing quality. We believe that everyone should have access to top-notch ICO services, regardless of their budget.</p></div><div className="bg-slate-900 p-4 rounded-xl"><h3 className="text-2xl text-center font-semibold mb-5">Experienced Professionals</h3><p>Our team of experts has years of experience in the blockchain industry and is dedicated to staying up-to-date on the latest trends and developments. We&apos;ll work with you every step of the way to ensure that your ICO is a success.</p></div><div className="bg-slate-900 p-4 rounded-xl"><h3 className="text-2xl text-center font-semibold mb-5">Comprehensive Services</h3><p>We offer a wide range of services to help you launch a successful ICO, including token creation, smart contract development, marketing, and more. Whether you need help with one aspect of your ICO or the entire process, we&apos;ve got you covered.</p></div><div className="bg-slate-900 p-4 rounded-xl"><h3 className="text-2xl text-center font-semibold mb-5">Faster Turnaround Times</h3><p>Our team is dedicated to providing you with quick turnaround times without compromising on quality. We understand that time is of the essence when it comes to launching an ICO, and we&apos;re here to help you get your project off the ground as quickly as possible.</p></div></div>
                </div>
                <div className="w-[60%] mb-10"><p className="font-bold text-2xl">FULL PROCESS</p><p>Most companies process takes a year and a half, IURIS can get it done in a week.</p><div className="grid grid-cols-2 text-center bg-white text-black text-xl font-bold py-2"><p>Competitors</p><p>IURIS</p></div><div className="grid grid-cols-2 border-b border-white py-2"><div className="text-left px-7"><ul><li>ICO preparation 10 months/ICO launch market.</li><li>1-2 months/ICO live on market 2-3 months.</li></ul></div><div className="text-left px-7"><ul><li>1 week-2 months /ICO launch market.</li><li>1 month/up to 3 months live on market.</li></ul></div></div></div>
                <Link href="/contact" className='text-2xl font-semibold border border-white p-2 rounded-lg uppercase'>INQUIRE ABOUT PRICING</Link>
                <div className="text-sm text-left w-[50%]"><i>Service Availability Disclaimer: This service is currently available only in select countries. If you are accessing our website from a country outside these designated areas, certain features may be restricted or unavailable. We reserve the right to change service availability without notice. It is your responsibility to comply with local laws. We do not guarantee future service expansion. For questions,<Link href="/contact" className="underline text-[hotpink]">contact us</Link>.</i></div>
            </div>
        },
        {
            name: "AI Consulting Services",
            path: "ai-services",
            content: <p>Unlock the full potential of artificial intelligence with our specialized AI Consulting Services at IURIS. Our team of experts is dedicated to guiding your organization through the intricacies of AI implementation, providing tailored solutions for maximum efficiency and innovation. Whether you&apos;re exploring AI for the first time or seeking to enhance existing capabilities, trust us to be your strategic partner in harnessing the power of artificial intelligence for sustainable growth and competitive advantage</p>
        }
    ];

    const check = services.find((item) => item.path == params.solution);
    if (check == undefined) {
        notFound();
    }
    return (
        <div className='relative z-20 py-12'>
            <div className='flex flex-row justify-center gap-4'>
                {services.map((item, idx) => <Link key={idx} href={`/services/${item.path}`} className={'text-sm text-center transition-all ' + (item.path == params.solution ? "text-white relative before:absolute before:bottom-0 before:-left-[0.25rem] before:w-[calc(100%+0.5rem)] before:h-[1px] before:bg-white before:block" : "text-grey")}>{item.name}</Link>)}
            </div>
            <div className="flex flex-col gap-4 p-10 justify-center items-center">
                <h1 className='text-center font-semibold text-4xl'>{check.name}</h1>
                <div className={sourceSansPro.className + (check.path == "ico-consulting" ? " p-4" : " w-1/2 text-center") + " !leading-[150%]"}>
                    {check.content}
                </div>
            </div>
        </div>
    )
}

export default page