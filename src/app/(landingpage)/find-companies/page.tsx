"use client";

import { FilterFormProps } from "@/components/organisms/FilterFormData";
import { formFilterCompanySchema, formSearchSchema } from "@/lib/formSchema";
import {
	COMPANYSIZE_OPTIONS_FILTER,
	INDUSTRY_OPTIONS_FILTER,
} from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useCompanies from "@/hooks/api/useCompanies";
import { useFilterStore } from "@/lib/stores/filter";
import { useSearchStore } from "@/lib/stores/search";

const filterForms: FilterFormProps[] = [
	{
		name: "industry",
		title: "Industry",
		options: INDUSTRY_OPTIONS_FILTER,
	},
	{
		name: "companySize",
		title: "Company Size",
		options: COMPANYSIZE_OPTIONS_FILTER,
	},
];

export default function FindCompaniesPage() {
	const { data, isError, isLoading } = useCompanies();

	const { setFilter } = useFilterStore((state) => state);
	const { setSearch } = useSearchStore((state) => state);

	const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
		resolver: zodResolver(formFilterCompanySchema),
		defaultValues: {
			industry: [],
			companySize: [],
		},
	});

	const formSearch = useForm<z.infer<typeof formSearchSchema>>({
		resolver: zodResolver(formSearchSchema),
		defaultValues: {
			location: "Indonesia",
		},
	});

	const onSubmitSearch = async (values: z.infer<typeof formSearchSchema>) =>
		setSearch(values);

	const onSubmitFilter = async (
		values: z.infer<typeof formFilterCompanySchema>
	) => setFilter(values);

	return (
		<ExploreDataContainer
			formFilter={formFilter}
			onSubmitFilter={onSubmitFilter}
			filterForms={filterForms}
			formSearch={formSearch}
			onSubmitSearch={onSubmitSearch}
			titleContent="dream companies"
			descriptionContent="Find the dream companies you dream work for"
			type="companies"
			data={data}
			loading={isLoading}
		/>
	);
}
