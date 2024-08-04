export const categories = [
	{ name: 'Keyboards' },
	{ name: 'Laptops' },
	{ name: 'Phones' },
	{ name: 'Tablets' },
	{ name: 'Watch' },
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

export const products = [
	{
		name: 'MacBook Pro M3 Pro',
		imageUrl:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290',
		categoryId: 2,
	},
	{
		name: 'MacBook Air M3',
		imageUrl:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034',
		categoryId: 2,
	},
	{
		name: 'Iphone 15 pro max',
		imageUrl:
			'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y2s4MzZBNmdHSVg2cThsZ3BMbUtsRkFOL1haWCt6TDJ0UWlLb09XajVNdENYR1ZZZnEyMVlVQUliTThGMjNyaFFCMHlJSDZlR29pR3RqbDNCaEg3eXpJM0RzVzJwYklZUFVyaVlFeTFhTzVnPT0=&traceId=1',
		categoryId: 3,
	},
	{
		name: 'Iphone 15',
		imageUrl:
			'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-model-unselect-gallery-2-202309_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=70&.v=aVFiZEF4WDEvUWJNSU5HRDg4cklnTGdzSmpObkZCM3MrNmJ5SkhESlNDaExVZlBTUHJEUjQwbldMS1NzaFJQeDhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXM0UUVSNDJGWEJHV0t2RkppZEdxdXN6cjUvc3MyNjg1THVHblVjS3RPdWlnPT0=&traceId=1',
		categoryId: 3,
	},
	{
		name: 'Ipad Pro M4',
		imageUrl:
			'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202405?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cXN0QTVTNDBtbGIzcy91THBPRThnMkpvMjZnN3E5aGRZVXJIWmhFMitJSU9WV3R2ZHdZMXRzTjZIcWdMTlg4eUJQYkhSV3V1dC9oa0s5K3lqMGtUaFMvR01EVDlzK0hIS1J2bTdpY0pVeTBWNTFabEhVdlFNSjJrWGh4dTRLbEk=&traceId=1',
		categoryId: 4,
	},
	{
		name: 'Ipad Air M2',
		imageUrl:
			'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-blue-wifi?wid=5120&hei=2880&fmt=webp&qlt=70&.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmM3hxSU9Rc1hENld5ZlZGbisxZU9hWGJrbFd6ZHBvVk05L3d0WWlJMkh3MEU1V0hVSjZLVHJGenZsOFVicTBNclFUMngwVnJycmY0WkN2ZnNvOUpFNFV2eGpBMC9iUGh4eWtiNXU0bkNWTXR3YTQ0MU4xZTdueTNvL0Z1SUZMaGpBPT0=&traceId=1',
		categoryId: 4,
	},
	{
		name: 'Apple Watch Series 9',
		imageUrl:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s9-case-unselect-gallery-1-202403?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1708729831139',
		categoryId: 5,
	},
];
