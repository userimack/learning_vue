var app = new Vue({
	el: "#app",
	data: {
		product: "socks",
		description: "A pair of warm, fuzzy socks",
		image: "./green.jpg",
		link: "https://google.com",
		inventory: 8,
		onSale: true,
		details: ["80% cotton", "20% Details"],
		variants: [
			{
				variantId: 2234,
				variantColor: "green",
			},
			{
				variantId: 2235,
				variantColor: "blue",

			}
		],
		sizes: ["small", "regular", "large"],
		cart: 0
	}
})

