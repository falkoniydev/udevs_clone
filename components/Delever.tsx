import {
	adminPanel,
	crossplatform,
	delever_app,
	deleverBrandName,
	deleverIcon,
	imanLogo,
	mobileDesign,
	webDesign,
	website,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const Delever = () => {
	return (
		<div className="delever-section py-12" id="portfolio">
			<div className="container flex items-center justify-between gap-5 flex-wrap">
				<div className="delever-left">
					<Image src={delever_app} alt="" width={500} height={618} />
				</div>
				<div className="delever-right">
					<Image
						src={deleverBrandName}
						alt="delever"
						width={252}
						height={49}
						className="mb-5"
					/>
					<div className="bg-orange-200 rounded-3xl px-4 py-1  flex items-center justify-center gap-1 w-[130px] mb-5">
						<Image src={deleverIcon} alt="icon" width={36} height={36} />
						<span className="text-orange-600 text-[16px]">Delivery</span>
					</div>
					<p className="max-w-[547px] w-full max-sm:w-[300px] mb-5">
						Delever - Delivery service automation targeted at both consumers and
						restaurants.
					</p>
					<h1 className="text-[46px] font-black ">What we did?</h1>

					<div className="flex gap-2 flex-wrap max-w-[500px] w-full text-[18px] font-black my-5 ">
						<div className="p-[15px] bg-secondary w-[150px] rounded-md">
							<Image
								src={website}
								alt="ios"
								width={56}
								height={56}
								className="mb-2"
							/>
							<h2>Website</h2>
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
						<div className="p-[15px] bg-secondary w-[150px] rounded-md">
							<Image
								src={webDesign}
								alt="ios"
								width={56}
								height={56}
								className="mb-2"
							/>
							<h2>Web Design</h2>
						</div>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Delever;
