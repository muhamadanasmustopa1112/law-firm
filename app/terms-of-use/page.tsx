import React from 'react'

const page = () => {
    return (
        <div className="flex flex-col p-8 mx-20">
            <h1 className="text-4xl font-semibold text-center">Terms of Use</h1>
            <p className="text-md text-center">Last Updated: Dec 2023</p>
            <hr className="border border-white w-[90%] self-center" />
            <div className="mt-5 mb-3">
                <h3 className="font-semibold">1. Acceptence of Term:</h3>
                <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By accessing and using this website, you agree to be bound by these terms and conditions. If you do not agree, please refrain from using the site.</p>
            </div>
            <div className="mt-5 mb-3">
                <h3 className="font-semibold">2. Use of Content:</h3>
                <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The content on this website is for informational purposes only. Reproduction, distribution, or modification of any content is prohibited without prior written consent.</p>
            </div>
            <div className="mt-5 mb-3">
                <h3 className="font-semibold">3. User Responsibilities:</h3>
                <p className="mb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Users are responsible for ensuring the accuracy and security of their information. Any use of the website that may disrupt its functionality or compromise security is strictly prohibited.</p>
            </div>
        </div>
    )
}

export default page