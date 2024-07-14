import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import Delever from "@/components/Delever";
import ERPSystem from "@/components/ERPSystem";
import Footer from "@/components/Footer";
import Goodzone from "@/components/Goodzone";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import ImanInvest from "@/components/ImanInvest";
import ITConsulting from "@/components/ITConsulting";
import MobileDev from "@/components/MobileDev";
import Optimizatons from "@/components/Optimizatons";
import OurServices from "@/components/OurServices";
import Smsuz from "@/components/Smsuz";
import Team from "@/components/Team";
import Tools from "@/components/Tools";
import UXDesign from "@/components/UXDesign";
import React from "react";

const page = () => {
	return (
		<div>
			<Header />
			<Hero />
			<OurServices />
			<Team />
			<MobileDev />
			<ERPSystem />
			<UXDesign />
			<Optimizatons />
			<ITConsulting />
			<Tools />
			<Clients />
			<Delever />
			<Smsuz />
			<Goodzone />
			<ImanInvest />
			<HowWeWork />
			<ContactUs />
			<Footer />
		</div>
	);
};

export default page;
