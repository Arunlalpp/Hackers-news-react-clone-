import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import newsData from "./NewsData";

const MAX_POST_COUNT = 3;

export default function NewsContainer() {
	let [searchParams] = useSearchParams();
	let pageNumber = parseInt(searchParams.get("p"));

	if (!pageNumber) {
		pageNumber = 1;
	}

	const newsDataForPage = newsData.slice(
		MAX_POST_COUNT * (pageNumber - 1),
		MAX_POST_COUNT * pageNumber
	);

	return (
		<>
			<div className="w-full bg-[#f6f6ef]">
				<div className="w-[98%] 2xl:w-[85%] 2xlw-[99%] m-auto">
					<div className="mt-1">
						{newsDataForPage.map((newsItem, index) => {
							return (
								<div className="flex flex-row">
									<div className="flex flex-row ">
										<span className="text-[#828282]">
											{MAX_POST_COUNT * (pageNumber - 1) + (index + 1)}
										</span>
										<TiArrowSortedUp className="fill-gray-300 w-[25px] h-[28px]" />
									</div>
									<div className="flex flex-col">
										<div>
											<a className="text-[14px] font-sans" href="/">
												{newsItem.title}
											</a>
											<a
												className="text-[10px] text-[#828282] font-sans hover:underline"
												href="/"
											>
												{newsItem.website}
											</a>
										</div>
										<div className="text-xs text-[#828282]">
											<span className="pr-1">{newsItem.points} points by</span>
											<a href="/">{newsItem.name}</a>
											<a className="p-1" href="/">
												{newsItem.time}
											</a>
											<span className="p-1">|</span>
											<span className="p-1">hide</span>
											<span>{newsItem.comment} comments</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					{newsData.length > MAX_POST_COUNT * pageNumber && (
						<Link
							to={`/news?p=${pageNumber + 1}`}
							className=" inline-block mt-6 rounded-full px-6 py-2.5  text-[#828282] font-medium text-xs leading-tight"
						>
							Show More
						</Link>
					)}
				</div>
			</div>
		</>
	);
}
