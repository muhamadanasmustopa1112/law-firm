export default function Page() {
  return (
    <div className="h-[80vh] w-screen bg-black/85 text-white">
      <div className="container mx-auto h-full">
        <div className="flex items-center flex-nowrap h-full">
          <div className="w-1/2">
            <h2 className="uppercase text-7xl">About Us</h2>
            <span className="mt-2 block">
              We provide personalized legal solutions with a commitment <br />{" "}
              to excellence. Trust us to navigate your legal matters with <br />{" "}
              expert and dedication
            </span>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-4 items-start">
              <div className="flex gap-2">
                <span>
                  <img
                    src="/icons/icon-email.svg"
                    alt="email"
                    width={24}
                    height={24}
                  />
                </span>
                <span>iuris@iuris.group</span>
              </div>
              <div className="flex gap-2">
                <span>
                  <img
                    src="/icons/icon-phone.svg"
                    alt="phone"
                    width={24}
                    height={24}
                  />
                </span>
                <span>+6285822476880</span>
              </div>
              <div className="flex flex-col gap-1">
                <span>
                  Ready to discuss your case? Contact us today to schedule a{" "}
                  <br />
                  consultation and take the first step toward resolutions.
                </span>

                <button className="rounded-full uppercase w-32 bg-white text-gray-900 text-center py-2 text-sm font-medium mt-2">
                  contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
