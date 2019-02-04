var app = new Vue({
	el: "#app",
	data: {
		product: "socks",
		description: "A pair of warm, fuzzy socks",
		image: "./assets/blue.jpg",
		link: "https://google.com",
		inventory: 8,
		onSale: true,
		details: ["80% cotton", "20% Details"],
		variants: [
			{
				variantId: 2234,
				variantColor: "green",
				variantImage: "./assets/green.jpg",
			},
			{
				variantId: 2235,
				variantColor: "blue",
				variantImage: "./assets/blue.jpg",

			}
		],
		sizes: ["small", "regular", "large"],
		cart: 0,
		inStock: true
	},
	methods: {
		addToCart(){
			this.cart += 1
		},
		removeFromCart(){
			this.cart -= 1
		},
		updateProduct(variantImage) {
			this.image = variantImage
		}
	}
})

