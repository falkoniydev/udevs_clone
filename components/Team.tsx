import { team } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Team = () => {
	return (
		<div className="bg-secondary" id="command">
			<div className="container">
				<h1 className="text-primary text-[60px] font-black pt-10">Team</h1>
				<div className="flex justify-between gap-5 py-10 flex-wrap">
					<div className="team-left">
						<p className="max-w-[500px] w-full text-[20px]">
							For each project, we form a team that includes a project manager,
							business analyst, UI / UX designer, DevOps, QA engineer, backend
							and front-end developers.
						</p>
						<span className="text-primary text-[120px] font-black">100+</span>
						<h2 className="text-[45px] font-black">Dedicated team</h2>
					</div>
					<div className="team-right">
						<Image src={team} alt="" width={450} height={400} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
