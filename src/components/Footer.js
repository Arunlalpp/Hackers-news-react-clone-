import React from "react";

export default function Footer() {
	return (
		<>
			<div className="w-full">
				<div className="w-[98%] lg:w-[85%] 2xlw-[99%] m-auto  bg-[#f6f6ef]">
					<div className="flex flex-row justify-center border-t-[1px] border-[#ff6600] list-none p-4 text-[10px] whitespace-nowrap">
						<li className="text-[#828282] text-[10px]">Guidelines |</li>
						<li className="px-[2px]">FAQ |</li>
						<li className="px-[2px]">Lists |</li>
						<li className="px-[2px]">API |</li>
						<li className="px-[2px]">Security |</li>
						<li className="px-[2px]">Legal |</li>
						<li className="px-[2px]">Apply to YC |</li>
						<li className="px-[2px]">Contact</li>
					</div>
					<div className="flex flex-row justify-center items-center p-2">
						<span className="text-[13px] text-[#828282]">Search:</span>
						<input
							className="ml-1 border-2 border-black p-[1px]"
							type="text"
							placeholder=""
						></input>
					</div>
				</div>
			</div>
		</>
	);
}
