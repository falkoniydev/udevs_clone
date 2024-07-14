import { ourServices } from "@/data/db";
import Image from "next/image";
import React from "react";

const OurServices = () => {
	return (
		<div className="our_services" id="our-services">
			<div className="container">
				<h1 className="text-[60px] font-black text-[#1B5BF7] py-10">
					Our Services
				</h1>

				<div className="flex flex-wrap gap-5 mb-16">
					{ourServices.map((service) => (
						<div
							key={service.id}
							className="p-5 border w-[359px] bg-[#F4F7FF] h-[219px] rounded-md items-start flex flex-col gap-4">
							<Image src={service.image} alt="" width={40} height={40} />
							<h2 className="text-[20px] font-semibold">{service.title}</h2>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OurServices;
