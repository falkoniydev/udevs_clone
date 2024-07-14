import {
	atomicDesign,
	figma,
	illustrator,
	iman,
	imanBg,
	lottie,
	mobileDesign,
	prototyping,
	sketch,
	UI,
	UX,
	webDesign,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const UXDesign = () => {
	return (
		<div className="ux_ui_design pb-5">
			<div className="container">
				<h1 className="text-primary text-[60px] font-black max-w-[800px] w-full leading-tight my-[80px]">
					UI / UX design
				</h1>
				<div className="flex justify-between gap-5 mb-10 flex-wrap">
					<div className="mobile-left">
						<p className="max-w-[500px] w-full max-sm:w-[300px]">
							Our company takes a human-centered approach to design
						</p>

						<div className="flex gap-2 flex-wrap max-w-[500px] w-full text-[18px] font-black my-5">
							<div className="p-[15px] bg-secondary w-[150px] rounded-md">
								<Image
									src={UX}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>UX</h2>
							</div>
							<div className="p-[15px] bg-secondary w-[150px] rounded-md">
								<div>
									<Image
										src={UI}
										alt="ios"
										width={56}
										height={56}
										className="mb-2"
									/>
								</div>
								<h2>UI</h2>
							</div>
							<div className="p-[15px] bg-secondary w-[150px] rounded-md">
								<Image
									src={prototyping}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>Prototyping</h2>
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
									src={atomicDesign}
									alt="ios"
									width={56}
									height={56}
									className="mb-2"
								/>
								<h2>Atomic Design</h2>
							</div>
						</div>

						<h2 className="text-[32px] font-black">Technologies</h2>

						<div className="flex items-center gap-10 my-3 flex-wrap">
							<div>
								<Image src={figma} alt="" width={56} height={56} />
								<p>Swift</p>
							</div>
							<div>
								<Image src={sketch} alt="" width={56} height={56} />
								<p>Kotlin</p>
							</div>
							<div>
								<Image src={lottie} alt="" width={56} height={56} />
								<p>Flutter</p>
							</div>
							<div>
								<Image src={illustrator} alt="" width={56} height={56} />
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
							className="absolute top-14"
						/>
						<Image
							src={imanBg}
							alt=""
							width={500}
							height={616}
							className="h-[616px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UXDesign;
