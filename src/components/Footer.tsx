

const Footer = () => {
    const product =
        ["overview", "features", "pricing plans", "api documentaton", "integrations", "changelog"]

    const support =
        [
            "help center", "tutorials", "community forum", "developer resources", "FAQs", "contact page"
        ]

    const legal =
        [
            "about us", "careers", "blog", "prices", "privacy policy", "terms of services", "data secuirity"
        ]


    return (
        <div className="flex items-center justify-center w-full md:pt-48 pt-24 md:pb-6 pb-2">
            <div className="xl:w-[80rem] w-full flex lg:flex-nowrap flex-wrap lg:gap-0 gap-12 items-start justify-between relative">

                <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-3">
                        {/* <img src={logo} width={'25px'} className="dark:flex hidden" alt="" /> */}
                        {/* <img src={darkLogo} width={'25px'} className="dark:hidden flex" alt="" /> */}
                        <h3 className="text-lg font-semibold">
                            Re<span className="text-[var(--primary-color)]">ʌ</span>ertex<span>.</span>
                        </h3>
                    </div>
                    <p className="text-[0.85rem] dark:text-gray-300 text-black mt-4">© 2024 Revertex Private Limited.
                        All rights reserved.
                    </p>
                    <p className="text-[0.85rem] dark:text-gray-300 text-black">
                        contact@revertex.com
                    </p>
                    <div className="flex items-center gap-2">
                        <svg cursor={"pointer"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path></svg>
                        <p>/</p>
                        <svg cursor={"pointer"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                    </div>
                </div>

                <ul className="flex flex-col items-start gap-2">
                    <h1 className="text-xl font-semibold mb-3">About Us</h1>
                    {product.map((item, idx) => {
                        return (
                            <li className="text-[0.75rem] hover:underline cursor-pointer capitalize" key={idx}>{item}</li>
                        )
                    })}
                </ul>
                <ul className="flex flex-col items-start gap-2">
                    <h1 className="text-xl font-semibold mb-3">Support</h1>
                    {support.map((item, idx) => {
                        return (
                            <li className="text-[0.75rem] hover:underline cursor-pointer capitalize" key={idx}>{item}</li>
                        )
                    })}
                </ul>
                <ul className="flex flex-col items-start gap-2">
                    <h1 className="text-xl font-semibold mb-3">Legal</h1>
                    {legal.map((item, idx) => {
                        return (
                            <li className="text-[0.75rem] hover:underline cursor-pointer capitalize" key={idx}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Footer