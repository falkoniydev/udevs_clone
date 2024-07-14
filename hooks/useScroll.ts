import { useState } from "react";

const useScroll = (initialActive = "home") => {
	const [active, setActive] = useState(initialActive);

	const scrollTo = (id: any) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActive(id);
		}
	};

	return { active, scrollTo };
};

export default useScroll;
