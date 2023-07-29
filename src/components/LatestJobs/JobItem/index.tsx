import Tag from "@/components/FeaturedJobs/Tag";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React, { FC } from "react";

interface JobItemProps {
	image: string;
	name: string;
	type: string;
	location: string;
	jobType: string;
	categories: string[];
}

const JobItem: FC<JobItemProps> = ({
	categories,
	image,
	jobType,
	location,
	name,
	type,
}) => {
	return (
		<div className="bg-white shadow-xs p-8 flex flex-row items-start gap-6 cursor-pointer">
			<div>
				<Image src={image} alt={image} width={64} height={64} />
			</div>
			<div>
				<div className="text-lg font-semibold">{name}</div>
				<div className="text-sm text-gray-500 mb-2">
					{type} · {location}
				</div>
				<div className="h-5 inline-flex gap-2 items-center">
					<Badge variant="secondary">{jobType}</Badge>
					<Separator orientation="vertical" />
					{categories.map((item: string, i: number) => (
						<Tag key={i} text={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default JobItem;