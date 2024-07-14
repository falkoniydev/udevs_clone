import React from "react";
import FormCompenent from "./Form";
import Image from "next/image";
import { address, sms, tel, tg } from "@/assets/images";
import {
	FaFacebookF,
	FaInstagram,
	FaTelegramPlane,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";

const ContactUs = () => {
	return (
		<div className="contact-us-section pb-16" id="contact">
			<div className="container bg-white">
				<h1 className="text-[60px] font-black text-primary py-10">
					Contact Us
				</h1>
				<div className="shadow-2xl w-full rounded-xl p-10 max-sm:p-5">
					<h3 className="text-[20px] font-black pb-5">Leave us a message</h3>
					<div className="flex justify-between flex-wrap ">
						<div className="contact-left w-[528px]">
							<FormCompenent />
						</div>
						<div className="contact-right max-w-[450px] w-full max-sm:w-[250px] text-[16px] font-bold flex flex-col gap-6">
							<a
								target="_blank"
								href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor"
								className="flex items-center gap-2">
								<Image src={address} alt="address" width={24} height={24} />
								<span>
									Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
								</span>
							</a>
							<a href="tel:+998336600999" className="flex items-center gap-2">
								<Image src={tel} alt="address" width={24} height={24} />
								<span>+998 33 66 00 999</span>
							</a>

							<a
								href="mailto:azizbek.b@udevs.io"
								className="flex items-center gap-2">
								<Image src={sms} alt="address" width={24} height={24} />
								<span>azizbek.b@udevs.io</span>
							</a>

							<a
								target="_blank"
								href="https://t.me/azizbekbakhodirov"
								className="flex items-center gap-2 text-primary">
								<FaTelegramPlane className="text-[32px]" />
								<span className="text-[24px] max-sm:text-[18px]">
									t.me/azizbekbakhodirov
								</span>
							</a>

							<div className="flex items-center gap-5 text-[24px] text-primary">
								<a href="https://udevs.io/">
									<FaYoutube className="hover:text-red-600 hover:transition-all" />
								</a>
								<a
									href="https://udevs.io/"
									className="hover:text-pink-600 hover:transition-all">
									<FaInstagram />
								</a>
								<a href="https://udevs.io/">
									<FaFacebookF className="hover:text-blue-800 hover:transition-all" />
								</a>
								<a href="https://udevs.io/">
									<FaTwitter className="hover:text-blue-400 hover:transition-all" />
								</a>
							</div>

							<div
								className="yandex-map"
								style={{ position: "relative", overflow: "hidden" }}>
								<a
									href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
									style={{
										color: "#eee",
										fontSize: "12px",
										position: "absolute",
										top: "0px",
									}}>
									Tashkent
								</a>
								<a
									href="https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.300883%2C41.334649&mode=usermaps&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_medium=mapframe&utm_source=maps&z=14"
									style={{
										color: "#eee",
										fontSize: "12px",
										position: "absolute",
										top: "14px",
									}}>
									Yandex Maps: search for places, transport, and routes
								</a>
								<iframe
									src="https://yandex.com/map-widget/v1/?from=mapframe&ll=69.300883%2C41.334649&mode=usermaps&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_source=mapframe&z=14"
									width="428"
									height="248"
									className="max-w-[428px] w-full max-sm:w-[300px]"
									style={{ position: "relative" }}></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
