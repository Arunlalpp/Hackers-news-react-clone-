import React from "react";

export default function Footer() {
	return (
		<>
			<div className="w-full bg-[#f6f6ef]">
				<div className="w-[98%] 2xl:w-[85%] 2xlw-[99%] sm:w-[99%] m-auto">
					<div className="flex flex-row justify-center border-t-4 border-[#ff6600] list-none p-4 text-[10px] whitespace-nowrap">
						<li className="text-[#828282] text-[10px]">Guidelines |</li>
						<li className="px-[2px]">FAQ |</li>
						<li className="px-[2px]">Lists |</li>
						<li className="px-[2px]">API |</li>
						<li className="px-[2px]">Security |</li>
						<li className="px-[2px]">Legal |</li>
						<li className="px-[2px]">Apply to YC |</li>
						<li className="px-[2px]">Contact</li>
					</div>
					<div className="flex flex-row justify-center items-center">
						<span>Search:</span>
						<input
							className="border-2 border-black"
							type="text"
							placeholder="Search.."
						></input>
					</div>
				</div>
			</div>
		</>
	);
}
