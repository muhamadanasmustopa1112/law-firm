import React from 'react'

const page = () => {
    return (
        <div className="flex flex-col p-8 mx-20">
            <h1 className="text-4xl font-semibold text-center">Privacy Policy</h1>
            <p className="text-md text-center">Effective Date: Dec 2023</p>
            <hr className="border border-white w-[90%] self-center" />
            <div className="mt-5 mb-3">
                <h3 className="font-semibold">1. Information Collection:</h3>
                <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We collect and store information that users voluntarily provide, such as contact details and preferences. This information is used solely for the purpose of improving user experience and providing relevant content.</p>
            </div>
            <div className="mt-5 mb-3">
                <h3 className="font-semibold">2. Data Security:</h3>
                <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We implement industry-standard measures to safeguard user information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
            </div>
            <div className="mt-5 mb-3">
                <h3 className="font-semibold">3. Cookies and Tracking:</h3>
                <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This website uses cookies for a better user experience. Users can manage cookie preferences, but disabling cookies may affect the functionality of the site.</p>
            </div>
            <div className="mt-5 mb-3">
                <h3 className="font-semibold">4. Third-Party Links:</h3>
                <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites.</p>
            </div>
            <div className="mt-5 mb-3">
                <h3 className="font-semibold">5. Policy Changes:</h3>
                <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We reserve the right to update these terms and conditions and the privacy statement at any time. Users are encouraged to review these policies periodically.</p>
            </div>
            <div className="mt-5 mb-3">
                <p className="mb-1">By using this website, you acknowledge that you have read, understood, and agreed to these terms and conditions and the privacy&nbsp;statement.</p>
            </div>
        </div>
    )
}

export default page