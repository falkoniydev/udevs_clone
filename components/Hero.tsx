"use client";

import { heroSection, udevsLogo } from "@/assets/images";
import Image from "next/image";
import React from "react";
import TextGenerator from "./TextGenerator";
import useScroll from "@/hooks/useScroll";

const Hero = () => {
	const { scrollTo } = useScroll("home");

	return (
		<div className="hero-section py-20">
			<div className="container flex items-center justify-between gap-5 flex-wrap">
				<div className="hero-left">
					<Image
						src={udevsLogo}
						alt=""
						width={300}
						height={100}
						className="mb-2 "
					/>
					<h1 className="text-[40px] font-black max-sm:text-[24px]">
						IT-Outsourcing Company
					</h1>
					<TextGenerator />
					<button
						onClick={() => scrollTo("contact")}
						className="bg-[#1B5BF7] px-10 py-[10px] rounded-md text-white">
						Contact
					</button>
				</div>
				<div className="hero-right max-w-[574] w-full">
					<Image src={heroSection} alt="" width={547} height={412} />
				</div>
			</div>
		</div>
	);
};

export default Hero;
