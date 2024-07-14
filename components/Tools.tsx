"use client";

import { toolsData } from "@/data/db";
import Image from "next/image";
import React, { useState } from "react";

const Tools = () => {
	const [filter, setFilter] = useState("");

	const handleFilterChange = (type: string) => {
		if (filter === type) {
			setFilter(""); // Filterni o'chirish
		} else {
			setFilter(type);
		}
	};

	return (
		<div className="tools-section bg-secondary" id="tools">
			<div className="container">
				<div>
					<h1 className="text-[60px] text-primary font-black pt-10">Tools</h1>
				</div>
				<div className="filter-options text-[14px] font-black py-5 flex flex-wrap">
					<div
						onClick={() => handleFilterChange("Frontend")}
						className={`custom-radio ${filter === "Frontend" ? "active" : ""}`}>
						Frontend
					</div>
					<div
						onClick={() => handleFilterChange("Backend")}
						className={`custom-radio ${filter === "Backend" ? "active" : ""} `}>
						Backend
					</div>
					<div
						onClick={() => handleFilterChange("Devops")}
						className={`custom-radio ${filter === "Devops" ? "active" : ""}`}>
						Devops
					</div>
					<div
						onClick={() => handleFilterChange("Testing")}
						className={`custom-radio ${filter === "Testing" ? "active" : ""}`}>
						Testing
					</div>
					<div
						onClick={() => handleFilterChange("UI/UX")}
						className={`custom-radio ${filter === "UI/UX" ? "active" : ""}`}>
						UX/UI
					</div>
					<div
						onClick={() => handleFilterChange("Infrastructure")}
						className={`custom-radio ${
							filter === "Infrastructure" ? "active" : ""
						}`}>
						Infrastructure
					</div>
					<div
						onClick={() => handleFilterChange("Mobile")}
						className={`custom-radio ${filter === "Mobile" ? "active" : ""}`}>
						Mobile
					</div>
				</div>
				<div className="tools-list pb-10">
					{toolsData.map((tool) => (
						<div
							key={tool.name}
							className={`tool-item ${
								filter && filter !== tool.type ? "faded" : ""
							} text-center flex flex-col justify-center items-center w-[90px] h-[90px] p-[15px] gap-2`}
							style={{
								backgroundColor: filter
									? filter === tool.type
										? tool.bgColor
										: ""
									: tool.bgColor,
							}}>
							<Image src={tool.src} alt={tool.name} width={24} height={24} />
							<p className="text-[10px]">{tool.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tools;
