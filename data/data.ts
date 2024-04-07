export type member = {
	name: string;
	picture: string;
	linkedin: string;
	github: string;
	site: string;
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

	{
		name: "Prince",
		picture: "/gumball.jpg",
		linkedin: "",
		github: "",
		site: "",
	},
	{
		name: "Tembo",
		picture: "/makima.jpg",
		linkedin: "",
		github: "",
		site: "",
	},
	{
		name: "Erlson",
		picture: "/geto.jpg",
		linkedin: "",
		github: "",
		site: "",
	},
	{
		name: "Musa",
		picture: "/gojo.jpg",
		linkedin: "",
		github: "",
		site: "",
	},
	{
		name: "Tino",
		picture: "/sukuna.jpg",
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
		link: "/2305.07633.pdf Zero Shot LLM.pdf",
	},
	{
		name: "Attention is All you need",
		date: "",
		source: "",
		link: "/attention is all you need.pdf",
	},
	{
		name: "Large Language Models Ethical Alignment",
		date: "",
		source: "",
		link: "/2307.02046 LLM Recommender Systems.pdf",
	},
	{
		name: "The Current State of Foundational Generative Models",
		date: "",
		source: "",
		link: "/2307.11019.pdf LLM Retrieval Aug.pdf",
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
