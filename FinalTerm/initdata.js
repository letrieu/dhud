var mongoose = require('mongoose');

var Product = mongoose.model("Product", {
	id: String,
	name: String,
	startingbid: {type: Number, default: 0},
	expriretime: {type: Number, default: 0},
	currentprice: {type: Number, default: 0},
	description: String,
	producttype: Number ,
	productgroup: Number,
	winner: {type: Number, default: 0},
	image: String
})

var Contact = mongoose.model("Contact", {
	name: String,
	slogan: String,
	phone: String,
	address: String,
	email: String,
})

var Review = mongoose.model("Review", {
	id: String,
	name: String,
	time: String,
	rating: String,
	content: String,
	productid: String
})

var ProductGroup = mongoose.model("ProductGroup", {
	id: String,
	name: String,
})

var ProductType = mongoose.model("ProductType", {
	id: String,
	name: String,
	image: String
})

var ProductImage = mongoose.model("ProductImage", {
	image: String,
	product: Number
});

var Banner = mongoose.model("Banner",{
	link: String,
	image: String,
	description: String
});




mongoose.connect('mongodb://localhost/baymax');

var db = mongoose.connection;
db.on("error", console.error);
db.once("open", insertData);

function insertData(){
	insertProduct();
	insertContact();
	insertProductGroup();
	insertProductType();
	insertReview();
	insertProductImage();
	insertBanner();
}


function insertProduct(){
	var products = new Product({
		id: "1",
		name: "Fashion Women Summer Sleeveless Evening Party Beach Long Maxi Sundress Dress",
		startingbid: 14490000,
		expriretime: 86400,
		description: "Regardless of the occasion, you will look charming and attractive in this beautiful dress.",
		producttype:  2,
		productgroup: 1,
		image: "product1_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "2",
		name: "Adrianna Papell Green Lace Metallic Party Clubwear Dress - NEW",
		startingbid: 14490000,
		expriretime: 86400,
		description: "A Great Looking & Hard to Find Piece from NIKE! Exclusive Nike Graphics. ",
		producttype:  2,
		productgroup: 2,
		image: "product2_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "3",
		name: "Hot Fashion Women Ladies 3D Classic Emoji Patchwork Print Blue Dress",
		startingbid: 14490000,
		expriretime: 86400,
		description: "Hot Fashion Women Ladies 3D Classic Emoji Patchwork Print Blue Dress",
		producttype:  2,
		productgroup: 3,
		image: "product3_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "4",
		name: "Tadashi Shoji Tulle & Lace Blouson Dress SAND SIZE 10 #201, #270 NWT",
		startingbid: 14490000,
		expriretime: 86400,
		description: "Incandescent lace overlays a luminous, scoop-neck sheath dress with an elaborate grosgrain bow to nip the waist and give the bodice a soft, blouson finish.",
		producttype:  2,
		productgroup: 2,
		image: "product4_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "5",
		name: "Versace Collection VJT4001 V34S10 V401 Blue Jeans Size 36 38 40",
		startingbid: 14490000,
		expriretime: 86400,
		description: "Bnwt Mens Authentic Wrangler Peak Jeans New Comfort Fit Black Button Fly",
		producttype:  1,
		productgroup: 1,
		image: "product5_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "6",
		name: "Fred-Perry-Mens-Twin-Tipped-Bomber-Jacket-J7214-Medieval-Blue",
		startingbid: 14490000,
		expriretime: 86400,
		description: "This is an adaptation of Fred Perry's iconic tennis bomber - a new square-shaped twin tipped ribbed collar that references FP's pique shirts. ",
		producttype:  1,
		productgroup: 3,
		image: "product6_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "7",
		name: "Tommy Hilfiger Denim Men Classic Fit Straight Leg Blue Jeans - Free $0 Shipping",
		startingbid: 14490000,
		expriretime: 86400,
		description: "You are bidding on a brand new (with tag) Tommy Hilfiger Denim Mens Classic Fit Straight Leg Jeans.",
		producttype:  1,
		productgroup: 3,
		image: "product7_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "8",
		name: "Tommy Hilfiger Men Long Sleeve Button Down Custom Fit Casual Shirt - $0 Ship",
		startingbid: 14490000,
		expriretime: 86400,
		description: "Shirt brand new",
		producttype:  1,
		productgroup: 2,
		image: "product8_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "9",
		name: "NEW Donnay Xenecore Pro One 97 16x19 Tennis Racquet Grip 4 3/8",
		startingbid: 14490000,
		expriretime: 86400,
		description: "A solid playing player's racquet, the Donnay Pro One 97 offers a crisp and clean response much like the original. Control is excellent from all areas of the court. With improvements in maneuverability and comfort, this new Pro One feels faster and more forgiving. From the baseline this racquet provides easy access to pace. The 327 swingweight (RDC) puts ample mass behind the ball yet maneuverability is not sacrificed thanks to a light 11.5-ounce strung weight and 4 points head light balance. Easy access to fast swing speeds results in solid pace and spin. At net the racquet impresses with a high level of precision and excellent feel. The control-oriented response allows aggressive serving without a loss in consistency. A very impressive racquet, this one makes a great choice for the 4.0+ level player.",
		producttype:  3,
		productgroup: 1,
		image: "product9_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "10",
		name: "New 1X Green Top Quality high-strength Aluminium Alloy Tennis Racquet 4 3/8 Bag",
		startingbid: 14490000,
		expriretime: 86400,
		description: "New modular frame concept, creates maximum penetration of the racquet through the air and increases the hitting power. Perfect control for directional hitting.",
		producttype:  3,
		productgroup: 1,
		image: "product10_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "11",
		name: "Lot Assorted Soft Silicone Fishing Lures Tackle Box Baits Jig Swivels Head Hooks",
		startingbid: 14490000,
		expriretime: 86400,
		description: "100% brand new and high quality",
		producttype:  3,
		productgroup: 2,
		image: "product11_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "12",
		name: "Canon EOS 50D 15.1MP Digital SLR Camera - Black (Body Only)) +battery+charger",
		startingbid: 14490000,
		expriretime: 86400,
		description: "This camera come with  battery charger, power cable,  only very nice working order please see all pictures in list for condition",
		producttype:  4,
		productgroup: 3,
		image: "product12_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "13",
		name: "Samsung-UN40H5201-40-Inch-Full-HD-1080p-60-Hz-LED-HDTV-with-built-in-Wi-Fi",
		startingbid: 14490000,
		expriretime: 86400,
		description: "This Samsung HDTV's 1080p display and Clear Motion Rate 120 produce detailed, clear images. Stream TV shows and movies easily with access to media via the Smart TV capability and built-in Wi-Fi.",
		producttype:  4,
		productgroup: 2,
		image: "product13_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "14",
		name: "4CH 960H DVR 2*540TVL HD indoor Home CCTV Surveillance Security Camera System",
		startingbid: 14490000,
		expriretime: 86400,
		description: "Packaging included:   1x 2PCS 1/3 540TV Line Sony CCD Color IP66 weatherproof Camera(only  ntsc) 1x4CH CCTV DVR(NOT   INCLUDE HDD) 1x4pcs BNC",
		producttype:  4,
		productgroup: 1,
		image: "product14_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "15",
		name: "Wireless Bluetooth Foldable Headset Stereo Headphone Earphone for iPhone Samsung",
		startingbid: 14490000,
		expriretime: 86400,
		description: "Just plug in with an audio cable , and listen to your favorite music tracks. The Hurricane H also has voice prompts in 4 languages (English, French, Spanish, and Chinese).",
		producttype:  4,
		productgroup: 3,
		image: "product15_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
	products = new Product({
		id: "16",
		name: "NEW 20-70LB Compound Bow and Arrow Archery Hunting Target USA Limbs Camouflage",
		startingbid: 14490000,
		expriretime: 86400,
		description: "Oztreme bows are manufactured using Magnesium Alloy Riser, which makes our bows light weight and extremely durable.",
		producttype:  3,
		productgroup: 1,
		image: "product16_1.jpg"
	});
	products.save(function(err){
		if(err)
			console.log(err);
	})
}

function insertContact(){
	var item = new Contact({
		name: "Baymax",
		slogan: "We are Baymax",
		phone: "+84975441178",
		address: "227 Nguyen Van Cu St., Ward 4, District 5, Ho Chi Minh City, Vietnam",
		email:  "Email: support@example.com"
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
}

function insertProductGroup(){
	var item = new ProductGroup({
		id: "1",
		name: "Popular"
		
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductGroup({
		id: "2",
		name: "Featured"
		
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductGroup({
		id: "3",
		name: "Lastest"
		
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
}

function insertProductType(){
	var item = new ProductType({
		id: "1",
		name: "Men"
		
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductType({
		id: "2",
		name: "Women"
		
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductType({
		id: "3",
		name: "Sport"
		
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductType({
		id: "4",
		name: "Electronics"
		
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
}

function insertReview(){
	var item = new Review({
		id: "1",
		name: "Nguyen van",
		time: "5/6/2016",
		rating: "4",
		content: "Great product",
		productid: "3"	
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new Review({
		id: "2",
		name: "tuan pro",
		time: "5/6/2016",
		rating: "4",
		content: "It's so good",
		productid: "1"	
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new Review({
		id: "3",
		name: "tu tran",
		time: "5/6/2016",
		rating: "4",
		content: "Good",
		productid: "2"	
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new Review({
		id: "4",
		name: "nguyen pro",
		time: "5/6/2016",
		rating: "4",
		content: "Beautiful",
		productid: "3"	
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new Review({
		id: "5",
		name: "meo con",
		time: "5/6/2016",
		rating: "4",
		content: "Beautiful",
		productid: "3"	
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new Review({
		id: "6",
		name: "nguyen tuan",
		time: "5/6/2016",
		rating: "4",
		content: "awesome",
		productid: "2"	
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
}

function insertProductImage(){
	var item = new ProductImage({
		image: "product1_1.jpg",
		product: 1
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product1_2.jpg",
		product: 1
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product1_3.jpg",
		product: 1
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new ProductImage({
		image: "product2_1.jpg",
		product: 2
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new ProductImage({
		image: "product2_2.jpg",
		product: 2
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new ProductImage({
		image: "product3_1.jpg",
		product: 3
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new ProductImage({
		image: "product4_1.jpg",
		product: 4
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product4_2.jpg",
		product: 4
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product4_3.jpg",
		product: 4
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new ProductImage({
		image: "product5_1.jpg",
		product: 5
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product5_2.jpg",
		product: 5
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product5_3.jpg",
		product: 5
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new ProductImage({
		image: "product6_1.jpg",
		product: 6
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product6_2.jpg",
		product: 6
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product6_3.jpg",
		product: 6
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product7_1.jpg",
		product: 7
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product7_2.jpg",
		product: 7
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product7_3.jpg",
		product: 7
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new ProductImage({
		image: "product8_1.jpg",
		product: 8
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product8_2.jpg",
		product: 8
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product8_3.jpg",
		product: 8
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new ProductImage({
		image: "product9_1.jpg",
		product: 9
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product9_2.jpg",
		product: 9
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product9_3.jpg",
		product: 9
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new ProductImage({
		image: "product10_1.jpg",
		product: 10
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product10_2.jpg",
		product: 10
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product10_3.jpg",
		product: 10
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product11_1.jpg",
		product: 11
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product11_2.jpg",
		product: 11
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product11_3.jpg",
		product: 11
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product12_1.jpg",
		product: 12
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product12_2.jpg",
		product: 12
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product12_3.jpg",
		product: 12
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product13_1.jpg",
		product: 13
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product13_2.jpg",
		product: 13
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product13_3.jpg",
		product: 13
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product14_1.jpg",
		product: 14
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product14_2.jpg",
		product: 14
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product14_3.jpg",
		product: 14
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product15_1.jpg",
		product: 15
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product15_2.jpg",
		product: 15
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product15_3.jpg",
		product: 15
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product16_1.jpg",
		product: 16
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product16_2.jpg",
		product: 16
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
	item = new ProductImage({
		image: "product16_3.jpg",
		product: 16
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
}

function insertBanner(){
	var item = new Banner({
		link: "type/1",
		image: "1.jpg",
		description: "Type 1"
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new Banner({
		link: "type/2",
		image: "2.jpg",
		description: "Type 2"
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new Banner({
		link: "type/3",
		image: "3.jpg",
		description: "Type 3"
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new Banner({
		link: "type/4",
		image: "4.jpg",
		description: "Type 4"
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})

	item = new Banner({
		link: "type/5",
		image: "5.jpg",
		description: "Type 5"
	});
	item.save(function(err){
		if(err)
			console.log(err);
	})
}