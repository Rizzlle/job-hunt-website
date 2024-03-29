import Tag from "@/components/organisms/FeaturedJobs/Tag";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface CompanyCardProps {
	image: string;
	totalJobs: number;
	name: string;
	description: string;
	id: string;
	categories: string[];
}

const CompanyCard: FC<CompanyCardProps> = ({
	categories,
	description,
	image,
	name,
	totalJobs,
	id,
}) => {
	const router = useRouter();

	const handleClickJob = () => router.push(`/detail/company/${id}`);

	return (
		<div onClick={handleClickJob} className="border border-gray-300 p-6">
			<div className="flex flex-row justify-between items-start">
				<Image src={image} alt={image} width={66} height={66} />
				<div className="text-blue-primary bg-blue-primary/10 w-max text-sm px-3 py-1">
					{totalJobs} Jobs
				</div>
			</div>
			<div className="my-4">
				<div className="text-lg font-semibold mb-2">{name}</div>
				<div
					className="line-clamp-3 text-sm text-gray-500"
					dangerouslySetInnerHTML={{ __html: description }}
				></div>
			</div>
			<div className="space-x-2">
				{categories.map((item: string, i: number) => (
					<Tag key={i} text={item} />
				))}
			</div>
		</div>
	);
};

export default CompanyCard;
