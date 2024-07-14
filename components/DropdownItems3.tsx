import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Typography } from "antd";
import { eng, rus, service5 } from "@/assets/images";
import Image from "next/image";

const items: MenuProps["items"] = [
	{
		key: "1",
		label: (
			<div className="flex items-center gap-2 py-1">
				<Image src={rus} alt="" width={45} height={45} />
				<span>Pyc</span>
			</div>
		),
	},
	{
		key: "2",
		label: (
			<div className="flex items-center gap-2 py-1">
				<Image src={eng} alt="" width={45} height={45} />
				<span>Eng</span>
			</div>
		),
	},
];

const DropdownItems3: React.FC = () => (
	<Dropdown
		menu={{
			items,
			selectable: true,
			defaultSelectedKeys: ["3"],
		}}>
		<Typography.Link>
			<Space className="text-black">
				Languages
				<DownOutlined />
			</Space>
		</Typography.Link>
	</Dropdown>
);

export default DropdownItems3;
