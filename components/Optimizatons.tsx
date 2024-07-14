import {
	architecture,
	autoTesting,
	CI_CD,
	cloud,
	deskDashBg,
	desktopDash,
	devOps,
	loadTesting,
	stressTesting,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const Optimizatons = () => {
	return (
		<div className="optimizations-section pb-10 bg-secondary">
			<div className="container">
				<h1 className="text-primary font-black py-10 text-[60px] max-w-[500px] w-full max-sm:text-[46px] leading-tight">
					Optimization Infrastructure
				</h1>

				<div className="flex justify-between gap-5 flex-wrap">
					<div className="erp-left relative">
						<Image
							src={desktopDash}
							alt=""
							width={500}
							height={296}
							className="absolute top-16"
						/>
						<Image
							src={deskDashBg}
							alt=""
							width={500}
							height={300}
							className="h-[526px]"
						/>
					</div>
					<div className="erp-right">
						<p className="max-w-[500px] w-full max-sm:w-[300px] max-sm:text-center text-[24px]">
							Our experienced professionals will help you optimize your
							infrastructure
						</p>

						<div className="flex flex-wrap max-w-[500px] w-full gap-2 text-[18px] font-black my-5">
							<div className="p-[15px] bg-info w-[150px] rounded-md">
								<Image
									src={architecture}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>CRM</h2>
							</div>
							<div className="p-[15px] bg-info w-[150px] rounded-md">
								<div>
									<Image
										src={autoTesting}
										alt="ios"
										width={56}
										height={56}
										className="mb-2"
									/>
								</div>
								<h2>E-Learning</h2>
							</div>
							<div className="p-[15px] bg-info w-[150px] rounded-md">
								<Image
									src={stressTesting}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>E-commerce</h2>
							</div>
							<div className="p-[15px] bg-info w-[150px] rounded-md">
								<Image
									src={loadTesting}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>POS</h2>
							</div>
							<div className="p-[15px] bg-info w-[150px] rounded-md">
								<Image
									src={devOps}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>SMS / Email</h2>
							</div>
							<div className="p-[15px] bg-info w-[150px] rounded-md">
								<Image
									src={cloud}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>Warehouse</h2>
							</div>
							<div className="p-[15px] bg-info w-[150px] rounded-md">
								<Image
									src={CI_CD}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>Warehouse</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Optimizatons;
