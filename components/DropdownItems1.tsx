import {
	mobileDesign,
	service3,
	service4,
	service5,
	service6,
} from "@/assets/images";
import { Dropdown, Menu, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import useScroll from "@/hooks/useScroll";

const items1: MenuProps["items"] = [
	{
		key: "0",
		label: <span className="font-black text-gray-400">Services</span>,
	},
	{
		key: "1",
		label: (
			<div className="p-1">
				<a
					rel="noopener noreferrer"
					href="#"
					className="flex gap-3 items-center">
					<span className="bg-gray-200 rounded-full p-2">
						<Image
							src={mobileDesign}
							alt="Logo"
							width={32}
							height={32}
							priority
						/>
					</span>
					<span className="w-[200px]">Development of mobile applications</span>
				</a>
			</div>
		),
	},
	{
		key: "2",
		label: (
			<div className="p-1">
				<a
					rel="noopener noreferrer"
					href="#"
					className="flex gap-3 items-center">
					<span className="bg-gray-200 rounded-full p-2">
						<Image src={service3} alt="Logo" width={32} height={32} priority />
					</span>
					<span className="w-[200px]">
						Development and implementation of ERP systems
					</span>
				</a>
			</div>
		),
	},
	{
		key: "3",
		label: (
			<div className="p-1">
				<a
					rel="noopener noreferrer"
					href="#"
					className="flex gap-3 items-center">
					<span className="bg-gray-200 rounded-full p-2">
						<Image src={service4} alt="Logo" width={32} height={32} priority />
					</span>
					<span className="w-[200px]">
						User interface, User Experience design
					</span>
				</a>
			</div>
		),
	},
	{
		key: "4",
		label: (
			<div className="p-1">
				<a
					rel="noopener noreferrer"
					href="#"
					className="flex gap-3 items-center">
					<span className="bg-gray-200 rounded-full p-2">
						<Image src={service6} alt="Logo" width={32} height={32} priority />
					</span>
					<span className="w-[200px]">IT Consulting</span>
				</a>
			</div>
		),
	},
	{
		key: "5",
		label: (
			<div className="p-1">
				<a
					rel="noopener noreferrer"
					href="#"
					className="flex gap-3 items-center">
					<span className="bg-gray-200 rounded-full p-2">
						<Image src={service5} alt="Logo" width={32} height={32} priority />
					</span>
					<span className="w-[200px]">
						Optimization IT Consulting Infrastructures
					</span>
				</a>
			</div>
		),
	},
];

const DropdownItems1 = () => {
	const { active, scrollTo } = useScroll("home");

	return (
		<div>
			<Dropdown className="cursor-pointer" overlay={<Menu items={items1} />}>
				<a onClick={(e) => e.preventDefault()}>
					<Space
						onClick={() => scrollTo("mobile-dev")}
						className={active === "mobile-dev" ? "active" : ""}>
						Services
						<DownOutlined />
					</Space>
				</a>
			</Dropdown>
		</div>
	);
};

export default DropdownItems1;
