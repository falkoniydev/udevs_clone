// "use client";

// import Image from "next/image";
// import React from "react";
// import { udevsLogo } from "@/assets/images";
// import DropdownItems1 from "./DropdownItems1";
// import DropdownItems2 from "./DropdownItems2";
// import useScroll from "@/hooks/useScroll";
// import DropdownItems3 from "./DropdownItems3";

// const Header = () => {
// 	const { active, scrollTo } = useScroll("home");

// 	return (
// 		<div
// 			className="shadow-sm fixed top-0 right-0 left-0 w-full bg-white border-b"
// 			style={{ zIndex: "100" }}>
// 			<div className="container flex items-center justify-between ">
// 				<div className="logo py-3">
// 					<a href="/">
// 						<Image src={udevsLogo} alt="Logo" width={96} height={32} priority />
// 					</a>
// 				</div>
// 				<div className="nav-items">
// 					<ul className="flex items-center text-[14px] gap-2 font-bold transition ease-in-out delay-200">
// 						<li>
// 							<a
// 								onClick={() => scrollTo("our-services")}
// 								className={active === "our-services" ? "active" : ""}>
// 								Direction
// 							</a>
// 						</li>
// 						<li>
// 							<a
// 								onClick={() => scrollTo("command")}
// 								className={active === "command" ? "active" : ""}>
// 								Command
// 							</a>
// 						</li>
// 						<li>
// 							<DropdownItems1 />
// 						</li>
// 						<li>
// 							<a
// 								onClick={() => scrollTo("tools")}
// 								className={active === "tools" ? "active" : ""}>
// 								Tools
// 							</a>
// 						</li>
// 						<li>
// 							<a
// 								onClick={() => scrollTo("clients")}
// 								className={active === "clients" ? "active" : ""}>
// 								Clients
// 							</a>
// 						</li>
// 						<li>
// 							<DropdownItems2 />
// 						</li>
// 						<li>
// 							<DropdownItems3 />
// 						</li>
// 						<li>
// 							<button
// 								onClick={() => scrollTo("contact")}
// 								className="bg-[#1B5BF7] px-5 py-[10px] rounded-md text-white ml-3">
// 								Contact
// 							</button>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Header;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import { udevsLogo } from "@/assets/images";
import DropdownItems1 from "./DropdownItems1";
import DropdownItems2 from "./DropdownItems2";
import useScroll from "@/hooks/useScroll";
import DropdownItems3 from "./DropdownItems3";
import { FaBars } from "react-icons/fa";

const Header = () => {
	const { active, scrollTo } = useScroll("home");
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className="shadow-sm fixed top-0 right-0 left-0 w-full bg-white border-b"
			style={{ zIndex: "100" }}>
			<div className="container flex items-center justify-between ">
				<div className="logo py-3">
					<a href="/">
						<Image src={udevsLogo} alt="Logo" width={96} height={32} priority />
					</a>
				</div>
				<div className="nav-items hidden md:flex">
					<ul className="flex items-center text-[14px] gap-2 font-bold transition ease-in-out delay-200">
						<li>
							<a
								onClick={() => scrollTo("our-services")}
								className={active === "our-services" ? "active" : ""}>
								Direction
							</a>
						</li>
						<li>
							<a
								onClick={() => scrollTo("command")}
								className={active === "command" ? "active" : ""}>
								Command
							</a>
						</li>
						<li>
							<DropdownItems1 />
						</li>
						<li>
							<a
								onClick={() => scrollTo("tools")}
								className={active === "tools" ? "active" : ""}>
								Tools
							</a>
						</li>
						<li>
							<a
								onClick={() => scrollTo("clients")}
								className={active === "clients" ? "active" : ""}>
								Clients
							</a>
						</li>
						<li>
							<DropdownItems2 />
						</li>
						<li>
							<DropdownItems3 />
						</li>
						<li>
							<button
								onClick={() => scrollTo("contact")}
								className="bg-[#1B5BF7] px-5 py-[10px] rounded-md text-white ml-3">
								Contact
							</button>
						</li>
					</ul>
				</div>
				<div className="md:hidden">
					<FaBars size={24} onClick={handleMenuToggle} />
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden bg-white border-t">
					<ul className="flex flex-col items-center text-[14px] gap-2 font-bold">
						<li>
							<a
								onClick={() => {
									scrollTo("our-services");
									setIsOpen(false);
								}}
								className={active === "our-services" ? "active" : ""}>
								Direction
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									scrollTo("command");
									setIsOpen(false);
								}}
								className={active === "command" ? "active" : ""}>
								Command
							</a>
						</li>
						<li>
							<DropdownItems1 />
						</li>
						<li>
							<a
								onClick={() => {
									scrollTo("tools");
									setIsOpen(false);
								}}
								className={active === "tools" ? "active" : ""}>
								Tools
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									scrollTo("clients");
									setIsOpen(false);
								}}
								className={active === "clients" ? "active" : ""}>
								Clients
							</a>
						</li>
						<li>
							<DropdownItems2 />
						</li>
						<li>
							<DropdownItems3 />
						</li>
						<li>
							<button
								onClick={() => {
									scrollTo("contact");
									setIsOpen(false);
								}}
								className="bg-[#1B5BF7] px-5 py-[10px] rounded-md text-white ml-3">
								Contact
							</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Header;
