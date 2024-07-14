"use client";

import { services } from "@/data/db";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextGenerator = () => {
	const sequence: (string | number)[] = services.flatMap((service) => [
		service.toString(),
		2000,
	]);

	return (
		<div className="max-w-[550px] w-full text-[#1B5BF7] font-black mb-3">
			<TypeAnimation
				sequence={sequence}
				wrapper="span"
				speed={50}
				style={{ fontSize: "1.5em", display: "inline-block" }}
				repeat={Infinity}
			/>
		</div>
	);
};

export default TextGenerator;
