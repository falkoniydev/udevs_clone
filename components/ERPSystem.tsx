import {
	crm,
	deskDashBg,
	desktopDash,
	eCommerce,
	eLearning,
	pos,
	sms,
	warehouse,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const ERPSystem = () => {
	return (
		<div className="erp-system bg-secondary pb-10">
			<div className="container">
				<h1 className="text-primary font-black py-10 text-[60px]">
					ERP system
				</h1>

				<div className="flex justify-between gap-5 flex-wrap">
					<div className="erp-left relative">
						<Image
							src={desktopDash}
							alt=""
							width={500}
							height={296}
							className="absolute top-10"
						/>
						<Image
							src={deskDashBg}
							alt=""
							width={500}
							height={300}
							className="h-[426px]"
						/>
					</div>
					<div className="erp-right">
						<p className="max-w-[500px] w-full max-sm:w-[300px] text-[24px]">
							IT Systems of any level of complexity at a convenient time for you
						</p>

						<div className="flex flex-wrap max-w-[500px] w-full gap-2 text-[18px] font-black my-5">
							<div className="p-[15px] bg-info w-[150px] rounded-md">
								<Image
									src={crm}
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
										src={eLearning}
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
									src={eCommerce}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>E-commerce</h2>
							</div>
							<div className="p-[15px] bg-info w-[150px] rounded-md">
								<Image
									src={pos}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>POS</h2>
							</div>
							<div className="p-[15px] bg-info w-[150px] rounded-md">
								<Image
									src={sms}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>SMS / Email</h2>
							</div>
							<div className="p-[15px] bg-info w-[150px] rounded-md">
								<Image
									src={warehouse}
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

export default ERPSystem;
