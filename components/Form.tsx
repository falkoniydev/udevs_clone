"use client";

import React, { useState } from "react";
import { Button, Form, Input } from "antd";

const layout = {
	labelCol: { span: 32 },
	wrapperCol: { span: 16 },
};

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
	},
};

type TouchedFields = {
	[key: string]: boolean;
};

const FormComponent: React.FC = () => {
	const [touched, setTouched] = useState<TouchedFields>({
		name: false,
		email: false,
		introduction: false,
	});

	const [form] = Form.useForm();

	const onFinish = (values: any) => {
		console.log(values);
		form.resetFields(); // Form maydonlarini tozalash
	};

	const onFinishFailed = () => {
		Object.keys(touched).forEach((field) => {
			if (!touched[field]) {
				setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
			}
		});
	};

	const getValidateStatus = (field: string) => {
		const errors = form.getFieldError(field);
		return touched[field] && errors.length > 0 ? "error" : "";
	};

	const getHelpMessage = (field: string) => {
		const errors = form.getFieldError(field);
		return touched[field] && errors.length > 0 ? errors[0] : "";
	};

	return (
		<Form
			{...layout}
			form={form}
			name="nest-messages"
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			style={{ maxWidth: 600 }}
			validateMessages={validateMessages}
		>
			<Form.Item
				name="name"
				rules={[{ required: true, message: "Name is required!" }]}
				validateTrigger={["onBlur", "onChange"]}
				help={getHelpMessage("name")}
				validateStatus={getValidateStatus("name")}
			>
				<Input
					placeholder="Name"
					className="w-full h-12 border-black"
					onBlur={() => setTouched({ ...touched, name: true })}
				/>
			</Form.Item>
			<Form.Item
				name="email"
				rules={[
					{ required: true, message: "Email is required!" },
					{ type: "email", message: "Email is not valid!" },
				]}
				validateTrigger={["onBlur", "onChange"]}
				help={getHelpMessage("email")}
				validateStatus={getValidateStatus("email")}
			>
				<Input
					placeholder="Email"
					className="w-full h-12 border-black"
					onBlur={() => setTouched({ ...touched, email: true })}
				/>
			</Form.Item>
			<Form.Item
				name="introduction"
				validateTrigger="onBlur"
				help={getHelpMessage("introduction")}
				validateStatus={getValidateStatus("introduction")}
			>
				<Input.TextArea
					placeholder="Briefly describe your project"
					className="w-full h-[150px] border-black"
					style={{ height: "150px" }}
					onBlur={() => setTouched({ ...touched, introduction: true })}
				/>
			</Form.Item>
			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
				<Button
					style={{ width: "200px", height: "30px" }}
					type="primary"
					htmlType="submit"
				>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default FormComponent;
