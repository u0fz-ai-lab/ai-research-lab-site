export type member = {
	name: string;
	picture: string;
	linkedin: string;
	github: string;
	site?: string;
};

export type paper = {
	name: string;
	date: string;
	source: string;
	link: string;
};

export type post = {
	title: string;
	date: string;
	summary: string;
};

export const team: member[] = [
	{ name: "Musa", picture: "", linkedin: "", github: "", site: "" },
	{
		name: "Prince",
		picture: "",
		linkedin: "",
		github: "",
		site: "",
	},
	{
		name: "Tembo",
		picture: "",
		linkedin: "",
		github: "",
		site: "",
	},
	{
		name: "Erlson",
		picture: "",
		linkedin: "",
		github: "",
		site: "",
	},
	{
		name: "Musa",
		picture: "",
		linkedin: "",
		github: "",
		site: "",
	},
	{
		name: "Tino",
		picture: "",
		linkedin: "",
		github: "",
		site: "",
	},
];

export const papers: paper[] = [
	{
		name: "Generative Agents: A Simulacra Of Human Behavior",
		date: "February 15, 2024",
		source: "",
		link: "",
	},
	{
		name: "Attention is All you need",
		date: "",
		source: "",
		link: "",
	},
	{
		name: "Large Language Models Ethical Alignment",
		date: "",
		source: "",
		link: "",
	},
	{
		name: "The Current State of Foundational Generative Models",
		date: "",
		source: "",
		link: "",
	},
];

export const posts: post[] = [
	{
		title: "Gaming (Vidya)",
		date: "January 20, 2024",
		summary:
			"sjsdo  sjidmi smkmc skdmkcmk sjsdo  sjidmi smkmc skdmkcmk smdkmkm smkdmcm msdmsmmk smdmscms smodmsmcsmp odkocos smdkmkm smkdmcm msdmsmmk smdmscms smodmsmcsmp odkocos",
	},
	{
		title: "Bro",
		date: "2024-02-14",
		summary:
			"sjsdo  sjsdo  sjidmi smkmc skdmkcmk smdkmkm smkdmcm sjsdo  sjidmi smkmc skdmkcmk smdkmkm smkdmcm msdmsmmk smdmscms smodmsmcsmp odkocos msdmsmmk smdmscms smodmsmcsmp odkocos sjidmi smkmc skdmkcmk smdkmkm smkdmcm msdmsmmk smdmscms smodmsmcsmp odkocos",
	},
];
