import React from "react";
import { Dropdown, Menu, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import useScroll from "@/hooks/useScroll";

const items2: MenuProps["items"] = [
	{
		key: "0",
		label: (
			<span className="font-black text-gray-400 cursor-text">Portfolio</span>
		),
	},
	{
		key: "1",
		label: (
			<div className="p-1">
				<a
					rel="noopener noreferrer"
					href="#"
					className="flex gap-3 items-center hover:text-orange-700">
					<span className="bg-orange-200 rounded-full px-3 py-2 text-orange-700 font-black">
						<strong>D</strong>
					</span>
					<span className="w-[200px] ">Delever</span>
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
					className="flex gap-3 items-center hover:text-blue-700">
					<span className="bg-blue-200 rounded-full px-3 py-2 text-blue-700 font-black">
						<strong>S</strong>
					</span>
					<span className="w-[200px]">Sms.uz</span>
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
					className="flex gap-3 items-center hover:text-red-700">
					<span className="bg-red-200 rounded-full px-3 py-2 text-red-700 font-black">
						<strong>G</strong>
					</span>
					<span className="w-[200px]">Goodzone</span>
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
					className="flex gap-3 items-center hover:text-green-700">
					<span className="bg-green-200 rounded-full px-3 py-2 text-green-700 font-black">
						<strong>I</strong>
					</span>
					<span className="w-[200px]">Iman</span>
				</a>
			</div>
		),
	},
];

const DropdownItems2 = () => {
	const { active, scrollTo } = useScroll("home");

	return (
		<div>
			<Dropdown className="cursor-pointer" overlay={<Menu items={items2} />}>
				<a onClick={(e) => e.preventDefault()}>
					<Space
						onClick={() => scrollTo("portfolio")}
						className={active === "portfolio" ? "active" : ""}>
						Portfolio
						<DownOutlined />
					</Space>
				</a>
			</Dropdown>
		</div>
	);
};

export default DropdownItems2;
