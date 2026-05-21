interface Portfolio {
	id?: string;
	href: string;
	img: {
		src: string;
		alt: string;
	};
	title: string;
	game?: string;
	types?: string[];
	short_description?: string;
}

export const getTags = (portfolio: Portfolio): string[] => {
	const result: string[] = [];
	if (portfolio.game) result.push(portfolio.game);
	portfolio.types?.forEach((type) => result.push(type));
	return result;
};

import additional_mobs_webp from '$lib/assets/images/additional_mobs.webp';
import sawit_webp from '$lib/assets/images/sawit.webp';
import titans_webp from '$lib/assets/images/titans.webp';

const TAG_GAME_MINECRAFT = 'Minecraft';
const TAG_GAME_GTA_V = 'GTA V';
const TAG_TYPE_ADDON = 'Addon';
const TAG_TYPE_MOD = 'Mod';
const TAG_TYPE_COMMISSION = 'Commission';
const TAG_TYPE_CLIENT_WORK = 'Client Work';
const TAG_TYPE_CLIENT_PROJECT = 'Client Project';

export const portfolios: Portfolio[] = [
	{
		href: 'https://youtu.be/149eF_udHZI?si=C40zpLLOkU_6761O',
		img: {
			src: 'https://i3.ytimg.com/vi/149eF_udHZI/maxresdefault.jpg',
			alt: 'Aerell Fasting Image'
		},
		title: 'Aerell Fasting',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON],
		short_description: 'An immersive 30-day fasting challenge for Minecraft.'
	},
	{
		href: 'https://youtu.be/2AGPcd45Lvc?si=SrpnhhBNA51jDM44',
		img: {
			src: 'https://i3.ytimg.com/vi/2AGPcd45Lvc/maxresdefault.jpg',
			alt: 'Aerell Time Text Image'
		},
		title: 'Aerell Time Text',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON],
		short_description: 'Display a 24-hour digital clock right on your Minecraft screen.'
	},
	{
		href: 'https://drive.google.com/file/d/18CKmCfYqSsNb1O6nhVrdLzEjsHUD66BS/view?usp=sharing',
		img: {
			src: sawit_webp,
			alt: 'Sawit Image'
		},
		title: 'Sawit',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_MOD, TAG_TYPE_COMMISSION, TAG_TYPE_CLIENT_PROJECT],
		short_description: 'Palm tree, complete with fruit, mechanisms, and behavior.'
	},
	{
		href: 'https://youtu.be/UFIP6Ipsgcs?si=A3Xmz0KNU3oUcHrE',
		img: {
			src: 'https://i3.ytimg.com/vi/UFIP6Ipsgcs/maxresdefault.jpg',
			alt: 'Aerell NPC Image'
		},
		title: 'Aerell NPC',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON],
		short_description: 'NPC for accompany player to playing Minecraft.'
	},
	{
		href: 'https://www.curseforge.com/minecraft/mc-mods/aerellcrafter',
		img: {
			src: 'https://raw.githubusercontent.com/aerell-minecraft/aerell-crafter/refs/heads/main/gif/with.gif',
			alt: 'Aerell Crafter Gif'
		},
		title: 'Aerell Crafter',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_MOD],
		short_description: 'Making crafter block more user friendly.'
	},
	{
		href: 'https://youtu.be/s9zcFahb3wg?si=YXrmY51ovjbmKEPY',
		img: {
			src: 'https://i3.ytimg.com/vi/s9zcFahb3wg/maxresdefault.jpg',
			alt: 'Aerell Flags Image'
		},
		title: 'Aerell Flags',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON],
		short_description: 'Interactive flags to decorate your Minecraft world with style.'
	},
	{
		href: 'https://youtu.be/s9zcFahb3wg?si=YXrmY51ovjbmKEPY',
		img: {
			src: 'https://i3.ytimg.com/vi/s9zcFahb3wg/maxresdefault.jpg',
			alt: 'Aerell Flags Image'
		},
		title: 'Aerell Headbands',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON]
	},
	{
		href: 'https://drive.google.com/file/d/1rNik7oqhqOC9L66j09OXFqy4vEqZIim_/view?usp=sharing',
		img: {
			src: titans_webp,
			alt: 'Titans Image'
		},
		title: 'Titans',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_MOD, TAG_TYPE_COMMISSION, TAG_TYPE_CLIENT_PROJECT]
	},
	{
		href: 'https://drive.google.com/file/d/1S_3SZ2BntmKT86rFCRFNUsNCnLo71r64/view?usp=sharing',
		img: {
			src: additional_mobs_webp,
			alt: 'Additional Mobs Image'
		},
		title: 'Additional Mobs',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_COMMISSION, TAG_TYPE_CLIENT_WORK]
	},
	{
		href: 'https://www.youtube.com/playlist?list=PLVkP-VbRczeQ61-EcY1Tl7UnRdZ-e2_H2',
		img: {
			src: 'https://img.youtube.com/vi/-mYn7Pra-04/maxresdefault.jpg',
			alt: 'Idul Adha Image'
		},
		title: 'Idul Adha',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON]
	},
	{
		href: 'https://mcpedl.com/reltech-digital-clock-addon/',
		img: {
			src: 'https://i3.ytimg.com/vi/yEx5T6HiiLI/maxresdefault.jpg',
			alt: 'Digital Clock Image'
		},
		title: 'Digital Clock',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON]
	},
	{
		href: 'https://youtu.be/A2PakxHFyfg?si=UyegmsNE-2cJP959',
		img: {
			src: 'https://i3.ytimg.com/vi/A2PakxHFyfg/maxresdefault.jpg',
			alt: 'Smart Torch Image'
		},
		title: 'Smart Torch',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON]
	},
	{
		href: 'https://www.youtube.com/playlist?list=PLVkP-VbRczeT7TDkvwX8lRURfQKbVEDkx',
		img: {
			src: 'https://i3.ytimg.com/vi/-FM4k4FtvFw/maxresdefault.jpg',
			alt: 'Partner Image'
		},
		title: 'Partner',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON]
	},
	{
		href: 'https://www.youtube.com/playlist?list=PLVkP-VbRczeQN_vs4PjZxNdxMvF-79mky',
		img: {
			src: 'https://img.youtube.com/vi/pnxBliV9QmQ/maxresdefault.jpg',
			alt: 'Ramadhan Image'
		},
		title: 'Ramadhan',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON, TAG_TYPE_MOD]
	},
	{
		href: 'https://www.youtube.com/watch?v=A1Ng-_zSoOc',
		img: {
			src: 'https://img.youtube.com/vi/A1Ng-_zSoOc/maxresdefault.jpg',
			alt: 'Random Ore Generator Image'
		},
		title: 'Random Ore Generator',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON]
	},
	{
		href: 'https://www.youtube.com/watch?v=JgvSrLJ9Fkw',
		img: {
			src: 'https://img.youtube.com/vi/JgvSrLJ9Fkw/maxresdefault.jpg',
			alt: 'Flat World Village Image'
		},
		title: 'Flat World Village',
		game: TAG_GAME_MINECRAFT,
		types: [TAG_TYPE_ADDON]
	},
	{
		href: 'https://id.gta5-mods.com/scripts/ragdoll-player-when-shot-fern-aerell',
		img: {
			src: 'https://img.youtube.com/vi/Jdf9VIBzo7A/maxresdefault.jpg',
			alt: 'Ragdoll Player When Shot Image'
		},
		title: 'Ragdoll Player When Shot',
		game: TAG_GAME_GTA_V,
		types: [TAG_TYPE_MOD]
	}
];
