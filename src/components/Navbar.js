import React from "react";

export default function Navbar() {
	return (
		<>
			<div className="w-full bg-white md:py-[0.5rem] p-0">
				<div className="lg:w-8xl m-auto bg-[rgb(255,102,0)] w-full">
					<div className="flex justify-between items-center">
						<div className="flex md:flex-row p-[1px] items-center flex-col">
							<div className="w-[18px] h-[18px]">
								<img
									className="border-2 ml-[1px]"
									src="https://news.ycombinator.com/y18.gif"
									alt="Hackers-Logo"
								/>
							</div>
							<div className="ml-1">
								<a href="/">
									<span className="font-bold text-[13px] font-sans whitespace-nowrap">
										Hacker News
									</span>
								</a>
							</div>
							<div className="text-[13px] font-sans ml-1">
								<a href="/">
									<span className="w-1/2 px-[4px] border-r border-black">
										new
									</span>
								</a>
								<a href="/">
									<span className="w-1/2 px-[4px] border-r border-black">
										past
									</span>
								</a>
								<a href="/">
									<span className="w-1/2 px-[4px] border-r border-black">
										comments
									</span>
								</a>
								<a href="/">
									<span className="w-1/2 px-[4px] border-r border-black">
										ask
									</span>
								</a>
								<a href="/">
									<span className="w-1/2 px-[5px] border-r border-black">
										show
									</span>
								</a>
								<a href="/">
									<span className="w-1/2 px-[5px] border-r border-black">
										jobs
									</span>
								</a>
								<a href="/">
									<span className="ml-1">submit</span>
								</a>
							</div>
						</div>
						<div className="text-[14px] mr-1">
							<span>login</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
