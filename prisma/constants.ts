export const categories = [
	{ name: 'Laptops' },
	{ name: 'Phones' },
	{ name: 'Tablets' },
	{ name: 'Servers' },
	{ name: 'Keyboards' },
];

export const additions = [
	{
		name: 'Keycap Puller',
		price: 5.99,
		imageUrl: 'https://m.media-amazon.com/images/I/51lBTTBAIrL._AC_UY218_.jpg',
	},
	{
		name: 'Coral Keycaps',
		price: 23.55,
		imageUrl: 'https://ae04.alicdn.com/kf/Hc3e35a36e840415badb53de03ff14ca7x.jpg_640x640.jpg',
	},
	{
		name: 'Switches G3ms Sapphire',
		price: 23.55,
		imageUrl:
			'https://sun9-50.userapi.com/s/v1/ig2/dFKMX95zAENboPPs41bmsmdvENF15SB6-aCRbbGhkzJpLscZu4PU4SjX6ZVqbcksGIqbEvSKXrZGlpRofu_iyMVi.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2160x2160&from=bu&u=oxHJONkRZyg03c15-7_3e4Npke9fsclF8FE1MluQ_uw&cs=510x510',
	},
	{
		name: 'Switches Kailh Speed',
		price: 21.1,
		imageUrl: 'https://ae04.alicdn.com/kf/S2b3eb3f8f9b74ed88c2e341163ba7e4bR.jpg_640x640.jpg',
	},
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [];
