"use client";

import React from "react";
import Image from "next/image";
import { analysis, contact, offer, start, teams } from "@/assets/images";

const steps = [
	{
		title: "Contact",
		description: "Send us your project request or project idea.",
		icon: contact,
	},
	{
		title: "Analysis",
		description: "We will contact you to clarify your project requirements.",
		icon: analysis,
	},
	{
		title: "Offer",
		description: "We will provide you with our free, non-binding application.",
		icon: offer,
	},
	{
		title: "Team",
		description: "We provide a team for your requirements.",
		icon: teams,
	},
	{
		title: "Start",
		description: "You will get to know the team and we'll get started.",
		icon: start,
	},
];

const HowWeWork = () => {
	return (
		<div className="py-12">
			<h2 className="container text-3xl font-bold text-blue-600">
				How we work!
			</h2>
			<div className="relative py-10">
				<div className="flex justify-center gap-1 items-center flex-wrap">
					{steps.map((step, index) => (
						<div
							key={index}
							className="text-center flex flex-col items-center justify-center w-[274px]">
							<Image src={step.icon} alt={step.title} width={84} height={84} />
							<h3 className="text-[18px] font-bold mt-1">{step.title}</h3>
							<p className="text-[16px] text-gray-600 mt-2">
								{step.description}
							</p>
						</div>
					))}
				</div>
				<div className="border-b-4 border-blue-300 w-[1150px] border-dotted absolute left-[170px] top-[100px] -z-10 max-md:hidden"></div>
			</div>
		</div>
	);
};

export default HowWeWork;
