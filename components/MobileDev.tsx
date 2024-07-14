import {
	android,
	crossplatform,
	flutter,
	iman,
	imanBg,
	ios,
	kotlin,
	swift,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const MobileDev = () => {
	return (
		<div className="mobile-dev" id="mobile-dev">
			<div className="container">
				<h1 className="text-primary text-[60px] font-black max-w-[800px] w-full leading-tight my-[80px] max-sm:text-[32px]">
					Development of mobile applications
				</h1>
				<div className="flex justify-between gap-5 mb-10 flex-wrap">
					<div className="mobile-left">
						<p className="max-w-[500px] w-full max-sm:w-[300px] max-sm:text-center ">
							In collaboration with startups, we have learned how to create a
							creative and functional user interface for mobile applications.
						</p>

						<div className="flex gap-2 text-[18px] font-black my-5 max-w-[450px] w-full flex-wrap">
							<div className="p-[15px] bg-secondary w-[150px] rounded-md">
								<Image
									src={ios}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>IOS</h2>
							</div>
							<div className="p-[15px] bg-secondary w-[150px] rounded-md">
								<div>
									<Image
										src={android}
										alt="ios"
										width={56}
										height={56}
										className="mb-2"
									/>
								</div>
								<h2>Android</h2>
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

						<h2 className="text-[32px] font-black">Technologies</h2>

						<div className="flex items-center gap-10 my-3 ">
							<div>
								<Image src={swift} alt="" width={56} height={56} />
								<p>Swift</p>
							</div>
							<div>
								<Image src={kotlin} alt="" width={56} height={56} />
								<p>Kotlin</p>
							</div>
							<div>
								<Image src={flutter} alt="" width={56} height={56} />
								<p>Flutter</p>
							</div>
						</div>
					</div>
					<div className="mobile-right relative">
						<Image
							src={iman}
							alt=""
							width={500}
							height={447}
							className="absolute top-3"
						/>
						<Image src={imanBg} alt="" width={500} height={563} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileDev;
