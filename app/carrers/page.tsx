import Image from "next/image";

// Define the type for a career item
type CareerItem = {
  title: string;
  description: string;
};

const CareerListing: React.FC<{ item: CareerItem }> = ({ item }) => {
  return (
    <div className="border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] overflow-hidden">
      <div className="p-4 bg-black-800 text-white">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-300">{item.description}</p>
      </div>
    </div>
  );
};

const CareerPage: React.FC = () => {
  const careerListings: CareerItem[] = [
    {
      title: "General Counsel (multi bar)",
      description:
        "As the General Counsel, you will be leading the legal department and advising on critical legal matters.",
    },
    {
      title: "Associate Attorney",
      description:
        "We are looking for a talented Associate Attorney to join our legal team. The role requires excellent legal research and communication skills.",
    },
    {
      title: "Paralegal",
      description:
        "The Paralegal will assist with legal research, documentation preparation, and case management support for the legal team.",
    },
    {
      title: "Executive Assistant",
      description:
        "We are seeking an Executive Assistant who is highly organized and able to assist with the coordination of the executive team's activities.",
    },
    {
      title: "Real Estate Specialist",
      description:
        "As a Real Estate Specialist, you will be responsible for managing real estate transactions, providing expert advice on property investments, and ensuring compliance with real estate laws and regulations. ",
    },
    {
      title: "Legal Assistant",
      description:
        "As a Legal Assistant, you will provide crucial support to the legal team by managing administrative tasks, preparing legal documents, and assisting with research on legal matters. Your responsibilities will include drafting contracts, filing legal paperwork, scheduling meetings, and maintaining case files. You will also liaise with clients, ensuring effective communication and timely updates on legal matters.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8">Careers at Our Company</h1>
        <p className="text-lg text-gray-400 mb-12">
          Join our team and be a part of a growing, dynamic organization.
        </p>

        {/* Career Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-4 justify-center px-0 lg:px-16 py-0 lg:py-8">
          {careerListings.map((item, index) => (
            <CareerListing item={item} key={index} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12">
          <p className="text-lg text-gray-400 mb-4">
            Interested in joining us? Learn more about our company and the
            opportunities available.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/consult"
              className="px-6 py-3 text-lg font-medium text-black bg-white rounded-full shadow-md hover:bg-gray-200 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
