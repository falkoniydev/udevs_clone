import {
	architecture,
	backend,
	devOps,
	frontend,
	itConsulting,
	qa,
	ux_ui,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const ITConsulting = () => {
	return (
		<div className="it-consulting pb-5">
			<div className="container">
				<h1 className="text-primary text-[60px] font-black max-w-[800px] w-full max-sm:text-[46px] leading-tight my-[80px]">
					IT consulting
				</h1>
				<div className="flex justify-between gap-5 mb-10 flex-wrap">
					<div className="mobile-left">
						<p className=",max-w-[500px] w-full max-sm:w-[300px] max-sm:text-center">
							We can improve the qualifications of your employees thereby
							increasing the efficiency of your company
						</p>

						<div className="flex gap-2 flex-wrap max-w-[500px] w-full text-[18px] font-black my-5">
							<div className="p-[15px] bg-secondary w-[150px] rounded-md">
								<Image
									src={frontend}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>Frontend</h2>
							</div>
							<div className="p-[15px] bg-secondary w-[150px] rounded-md">
								<div>
									<Image
										src={backend}
										alt="ios"
										width={56}
										height={56}
										className="mb-2"
									/>
								</div>
								<h2>Backend</h2>
							</div>
							<div className="p-[15px] bg-secondary w-[150px] rounded-md">
								<Image
									src={architecture}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>Architecture</h2>
							</div>
							<div className="p-[15px] bg-secondary w-[150px] rounded-md">
								<Image
									src={devOps}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>DevOps</h2>
							</div>
							<div className="p-[15px] bg-secondary w-[150px] rounded-md">
								<Image
									src={ux_ui}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>UX / UI </h2>
							</div>
							<div className="p-[15px] bg-secondary w-[150px] rounded-md">
								<Image
									src={qa}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>QA</h2>
							</div>
						</div>
					</div>
					<div className="mobile-right">
						<Image src={itConsulting} alt="" width={500} height={447} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ITConsulting;
