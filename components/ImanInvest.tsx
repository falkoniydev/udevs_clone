import {
	adminPanel,
	crossplatform,
	imanApp,
	imanBrandName,
	imanLogo,
	mobileDesign,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const ImanInvest = () => {
	return (
		<div className="iman-section py-10">
			<div className="container flex items-center justify-between gap-5 flex-wrap">
				<div className="delever-left">
					<Image
						src={imanBrandName}
						alt="smsuz"
						width={169}
						height={49}
						className="mb-5"
					/>
					<div className="bg-green-100 rounded-3xl px-4 py-1  flex items-center justify-center gap-1 w-[160px] mb-5">
						<Image src={imanLogo} alt="icon" width={24} height={24} />
						<span className="text-green-600 text-[16px]">Finance</span>
					</div>
					<p className="max-w-[547px] w-full max-sm:w-[300px] text-[20px] mb-5">
						Iman - It is a mutual financing platform based on the principles of
						Islamic Finance. Buyers, sellers and investors meet here.
					</p>
					<h1 className="text-[46px] font-black ">What we did?</h1>

					<div className="flex gap-2 flex-wrap max-w-[500px] w-full text-[18px] font-black my-5">
						<div className="p-[15px] bg-secondary w-[150px] rounded-md">
							<Image
								src={mobileDesign}
								alt="ios"
								width={56}
								height={56}
								className="mb-2"
							/>
							<h2>Mobile Design</h2>
						</div>
						<div className="p-[15px] bg-secondary w-[150px] rounded-md">
							<div>
								<Image
									src={adminPanel}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
							</div>
							<h2>Admin Panel</h2>
						</div>
						<div className="p-[15px] bg-secondary w-[150px] rounded-md">
							<Image
								src={crossplatform}
								alt="ios"
								width={56}
								height={56}
								className="mb-2"
							/>
							<h2>Crossplatform</h2>
						</div>
					</div>
				</div>
				<div className="delever-right">
					<Image src={imanApp} alt="" width={500} height={618} />
				</div>
			</div>
		</div>
	);
};

export default ImanInvest;
