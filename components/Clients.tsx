import React from "react";
import Image from "next/image";
import { clientsData1, clientsData2 } from "@/data/db";

const Clients = () => {
	return (
		<div className="clients-section py-10" id="clients">
			<div className="container">
				<h1 className="text-primary text-[60px] font-black py-5">
					Our Clients
				</h1>
			</div>
			<div className="marquee">
				<div className="marquee-content">
					{[
						...clientsData1,
						...clientsData1,
						...clientsData1,
						...clientsData1,
					].map((client, index) => (
						<div key={index} className="client-logo">
							<Image
								className="w-[213px] h-[128px] rounded-2xl shadow-lg"
								src={client.src}
								alt={client.name}
								width={213}
								height={128}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="marquee reverse">
				<div className="marquee-content">
					{[
						...clientsData2,
						...clientsData2,
						...clientsData2,
						...clientsData2,
					].map((client, index) => (
						<div key={index} className="client-logo">
							<Image
								className="w-[213px] h-[128px] rounded-2xl shadow-lg"
								src={client.src}
								alt={client.name}
								width={213}
								height={128}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Clients;
