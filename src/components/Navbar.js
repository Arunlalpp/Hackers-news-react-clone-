import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<div className="w-full bg-white md:pt-2">
				<div className="lg:w-8xl m-auto bg-[rgb(255,102,0)] w-full">
					<div className="flex flex-row items-center">
						<div className="md:w-[25px]  md:h-[25px] w-[25px] h-[25px] ml-[2px] md:ml-0 flex flex-col ">
							<img
								className="border-2 ml-0 md:ml-[3px] mt-1"
								src="https://news.ycombinator.com/y18.gif"
								alt="Hackers-Logo"
							/>
						</div>
						<div className="flex md:flex-row md:items-center flex-col w-[100vw] md:mt-0 mt-[0.4rem]">
							<div className="md:ml-1 ml-2 leading-none">
								<a href="/">
									<span className="font-bold md:text-[13px] text-[15px] font-sans whitespace-nowrap">
										Hacker News
									</span>
								</a>
							</div>
							<div className="lg:text-[13px] text-[12px] font-sans ml-1 leading-none">
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
									<span className="md:ml-1 ml-[2px]">submit</span>
								</a>
							</div>
						</div>
						<div className="md:text-[14px] text-[12px] md:mr-1 mr-3 mt-1">
							<a href="/">
								<Link to="/LoginForm">login</Link>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
