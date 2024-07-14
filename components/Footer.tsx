"use client";

import { udevsLogo } from "@/assets/images";
import useScroll from "@/hooks/useScroll";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
	const { active, scrollTo } = useScroll("home");

	return (
		<div className="footer-section bg-secondary">
			<div className="container">
				<div className="flex items-center justify-center py-10">
					<Image src={udevsLogo} alt="" width={100} height={50} />
				</div>
				<div className="flex justify-between flex-wrap">
					<div>
						<h1 className="text-[27px] font-black py-5">About us</h1>
						<ul className="text-[18px] text-primary flex flex-col gap-1 ">
							<li>
								<a
									href=""
									className="hover:underline "
									onClick={() => scrollTo("our-services")}>
									Direction
								</a>
							</li>
							<li>
								<a
									href=""
									className="hover:underline "
									onClick={() => scrollTo("command")}>
									Command
								</a>
							</li>
							<li>
								<a href="" className="hover:underline ">
									Tools
								</a>
							</li>
							<li>
								<a href="" className="hover:underline ">
									Clients
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h1 className="text-[27px] font-black py-5">Services</h1>
						<ul className="text-[18px] text-primary flex flex-col gap-1">
							<li>
								<a href="" className="hover:underline ">
									Development of mobile applications
								</a>
							</li>
							<li>
								<a href="" className="hover:underline ">
									Development and implementation ERP systems
								</a>
							</li>
							<li>
								<a href="" className="hover:underline ">
									User interface, User experience design
								</a>
							</li>
							<li>
								<a href="" className="hover:underline ">
									IT consulting
								</a>
							</li>
							<li>
								<a href="" className="hover:underline ">
									Optimization IT consulting infrastructure
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h1 className="text-[27px] font-black py-5">Portfolio</h1>
						<ul className="text-[18px] text-primary flex flex-col gap-1">
							<li>
								<a href="" className="hover:underline ">
									Delever
								</a>
							</li>
							<li>
								<a href="" className="hover:underline ">
									Sms.uz
								</a>
							</li>
							<li>
								<a href="" className="hover:underline ">
									Goodzone
								</a>
							</li>
							<li>
								<a href="" className="hover:underline ">
									Iman
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div
					style={{
						width: "100%",
						height: "1px",
						background: "blue",
						opacity: "0.3",
						margin: "40px 0",
					}}></div>

				<div className="flex items-center justify-between gap-5 py-5 flex-wrap max-sm:justify-center">
					<p className="text-center text-sm text-primary flex items-center gap-1">
						<span>&copy;</span>
						<span className="text-[18px]">
							2024 Udevs.io. All rights reserved.
						</span>
					</p>
					<div>
						<div className="flex items-center gap-5 text-[24px] text-primary">
							<a
								href="https://udevs.io/"
								className="bg-blue-200 rounded-full p-1">
								<FaYoutube className="hover:text-red-600 hover:transition-all" />
							</a>
							<a
								href="https://udevs.io/"
								className="bg-blue-200 rounded-full p-1">
								<FaInstagram className="hover:text-pink-600 hover:transition-all" />
							</a>
							<a
								href="https://udevs.io/"
								className="bg-blue-200 rounded-full p-1">
								<FaFacebookF className="hover:text-blue-800 hover:transition-all" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
