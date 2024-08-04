import { hashSync } from 'bcrypt';
import { additions, categories, products } from './constants';
import { prisma } from './prisma-client';

const randomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User Test',
				email: 'user@test.com',
				password: hashSync('11111111', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'Admin Admin',
				email: 'admin@test.com',
				password: hashSync('11111111', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		],
	});

	await prisma.category.createMany({
		data: categories,
	});

	await prisma.addition.createMany({
		data: additions,
	});

	await prisma.product.createMany({
		data: products,
	});

	const keyboard1 = await prisma.product.create({
		data: {
			name: 'Dark Project KD87',
			imageUrl:
				'https://c.dns-shop.ru/thumb/st1/fit/500/500/2b6381a180751451b0c787637f890c6c/90d246fe5e864cbddcf07b0ab6406c1c3d581fa5e7908fa7044a4a6ba7e3ae9b.jpg.webp',
			categoryId: 1,
			additions: {
				connect: additions.slice(0, 2),
			},
		},
	});
	const keyboard2 = await prisma.product.create({
		data: {
			name: 'Logitech G813',
			imageUrl:
				'https://c.dns-shop.ru/thumb/st4/fit/500/500/614a7d4e3c863307b2a3e0229f3c5393/01cda45cc4cb2df9b6ed4f49a5d9da01340173245f1ad01b89f02174c8482447.jpg.webp',
			categoryId: 1,
			additions: {
				connect: additions.slice(2, 4),
			},
		},
	});

	await prisma.productItem.createMany({
		data: [
			{
				productId: 1,
				price: 1839.08,
				memory: 256,
				color: 1,
			},
			{
				productId: 1,
				price: 1930.01,
				memory: 512,
				color: 1,
			},
			{
				productId: 1,
				price: 2201.81,
				memory: 1024,
				color: 1,
			},
			{
				productId: 1,
				price: 1839.08,
				memory: 256,
				color: 2,
			},
			{
				productId: 1,
				price: 1930.01,
				memory: 512,
				color: 2,
			},
			{
				productId: 1,
				price: 2201.81,
				memory: 1024,
				color: 2,
			},
			// ------
			{ productId: 2, price: randomNumber(600, 1500) },
			{ productId: 3, price: randomNumber(600, 1500) },
			{ productId: 4, price: randomNumber(600, 1500) },
			{ productId: 5, price: randomNumber(600, 1500) },
			{ productId: 6, price: randomNumber(600, 1500) },
			{ productId: 7, price: randomNumber(600, 1500) },
		],
	});

	await prisma.productItem.createMany({
		data: [
			// Keyboard 1
			{
				productId: keyboard1.id,
				price: randomNumber(35, 200),
				style: 1,
				color: 1,
			},
			{
				productId: keyboard1.id,
				price: randomNumber(35, 200),
				style: 1,
				color: 2,
			},
			{
				productId: keyboard1.id,
				price: randomNumber(35, 200),
				style: 2,
				color: 1,
			},
			{
				productId: keyboard1.id,
				price: randomNumber(35, 200),
				style: 2,
				color: 2,
			},
			{
				productId: keyboard1.id,
				price: randomNumber(35, 200),
				style: 3,
				color: 1,
			},

			// Keyboard 2
			{
				productId: keyboard1.id,
				price: randomNumber(35, 200),
				style: 3,
				color: 2,
			},
			{
				productId: keyboard2.id,
				price: randomNumber(35, 200),
				style: 1,
				color: 1,
			},
			{
				productId: keyboard2.id,
				price: randomNumber(35, 200),
				style: 2,
				color: 1,
			},
			{
				productId: keyboard2.id,
				price: randomNumber(35, 200),
				style: 3,
				color: 2,
			},
		],
	});

	// Cart
	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: '111111',
			},
			{
				userId: 2,
				totalAmount: 0,
				token: '222222',
			},
		],
	});

	await prisma.cartItem.create({
		data: {
			productItemId: 18,
			cartId: 1,
			quantity: 2,
			additions: {
				connect: [{ id: 1 }, { id: 2 }],
			},
		},
	});
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Addition" RESTART IDENTITY CASCADE`;
}

async function main() {
	try {
		await down();
		await up();
	} catch (e) {
		console.error(e);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
