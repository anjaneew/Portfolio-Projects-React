type DataType = {
    img: string;
    title: string;
    description: string;
    weight: string;
    category: string;
    price: number;
}

const DataList: DataType[] = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2BLqQolWQOlU1FS70r_39fN9sWVKEQ0W04Y5Ts7HEPclYd20RYnCgN9-peIzy-xfH5BXSfXVaM1VDGcfU7N_STz65ys9aX6YDv8TluZ8&s=10",
        title: "Tamarind සියඹලා",
        description: "Tamarind is a tangy, sweet-sour fruit pod used extensively in Sri Lankan cuisine as a souring agent. The brown, sticky pulp inside the pods adds depth and complexity to curries, chutneys, and sambols. Rich in tartaric acid, vitamins, and minerals, tamarind aids digestion, has laxative properties, and provides antioxidant benefits. It's essential in traditional dishes like ambul thiyal and various fish curries. Tamarind also has cooling properties in Ayurvedic medicine and is used to treat fever and digestive disorders. Ceylon tamarind is valued for its balanced sweet-sour flavor profile.",
        weight: "100g",
        category: "spices medicine",
        price: 1.99,
    },
    {
        img: "https://thottamfarmfresh.com/wp-content/uploads/2022/07/Ceylon-cinnamon.webp",
        title: "Cinnamon කුරුඳු",
        description: "Ceylon cinnamon, known as true cinnamon, is considered the world's finest variety with a delicate, sweet flavor and complex aroma. Grown in Sri Lanka's southwestern coastal regions, the inner bark is hand-harvested from cinnamon trees and rolled into distinctive quills. Unlike cassia, Ceylon cinnamon has low coumarin content, making it safer for regular consumption. It's used in both sweet and savory dishes, teas, and traditional medicine. Rich in antioxidants and anti-inflammatory compounds, cinnamon helps regulate blood sugar, supports heart health, and has antimicrobial properties. Ceylon cinnamon is a premium export product.",
        weight: "100g",
        category: "spices luxury items",
        price: 2.99,
    },
    {
        img: "https://cdn.lakpura.com/images/LK94007685-04-E.JPG",
        title: "Mountain Knotgrass පොල්පලා",
        description: "Mountain knotgrass, or polpala, is a medicinal herb native to Sri Lanka's highlands, highly valued in traditional Ayurvedic medicine. The small, oval leaves have bitter-sweet properties and are primarily used for treating kidney and urinary tract disorders. Polpala tea is consumed for its diuretic, anti-inflammatory, and detoxifying effects. It helps dissolve kidney stones, supports liver function, and purifies blood. The herb contains alkaloids and flavonoids with therapeutic properties. Often prepared as a decoction or herbal infusion, polpala is an essential remedy in Sri Lankan households for maintaining urinary health and overall wellness.",
        weight: "100g",
        category: "medicine",
        price: 1.99,
    },
    {
    img: "https://flaevor.com/wp-content/uploads/2023/07/Cardamom.jpg",
    title: "Cardamom කරඳමුංගු (එනසාල්)",
    description: "Ceylon cardamom is a premium spice known for its intense aroma and sweet, eucalyptus-like flavor. Grown in Sri Lanka's central highlands, these green pods are hand-harvested and sun-dried. Used extensively in both sweet and savory dishes, cardamom aids digestion, freshens breath, and has detoxifying properties. It's a key ingredient in Sri Lankan curries, biryanis, and traditional sweets. The oil extracted from cardamom seeds is valued in aromatherapy and pharmaceutical applications.",
    weight: "100g",
    category: "spices medicine",
    price: 4.99
},
{
    img: "https://cdn.prod.website-files.com/63ed08484c069d0492f5b0bc/66ff0566b3eef39b517ad7b5_66aa8595cb311516305003f4_cloves-benefits.webp",
    title: "Cloves කරබු නැටි",
    description: "Sri Lankan cloves are aromatic flower buds harvested from evergreen trees in the island's wet zone. Known for their strong, warm, and slightly bitter taste, cloves are essential in Sri Lankan cuisine and traditional medicine. They contain eugenol, a powerful antiseptic and anesthetic compound. Used in curries, rice dishes, and tea, cloves aid digestion, relieve toothaches, and boost immunity. Premium quality Ceylon cloves are highly sought after in international markets for their superior oil content.",
    weight: "100g",
    category: "spices medicine",
    price: 3.49
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzC83EesGBWgVM9wrjmTYTPhQPMIOU4IjWw&s",
    title: "Black Pepper ගම්මිරිස්",
    description: "Ceylon black pepper is renowned globally for its sharp, pungent flavor and high piperine content. Grown in Sri Lanka's tropical climate, these peppercorns are hand-picked at peak ripeness and sun-dried. Black pepper enhances virtually any savory dish and offers numerous health benefits including improved digestion, nutrient absorption, and metabolism. It has antibacterial properties and is used in traditional Ayurvedic medicine. Sri Lankan black pepper is considered among the finest quality available worldwide.",
    weight: "100g",
    category: "spices medicine",
    price: 2.49
},
{
    img: "https://www.mskcc.org/sites/default/files/styles/large/public/node/234928/3x2/istock-640978030-1200x800.jpg",
    title: "Turmeric Powder කහ කුඩු",
    description: "Sri Lankan turmeric powder is made from organically grown rhizomes cultivated in mineral-rich soil. Known for its vibrant golden color and earthy, slightly bitter taste, turmeric contains curcumin, a powerful anti-inflammatory compound. Essential in Sri Lankan curries and rice dishes, it also serves as a natural food coloring. Turmeric has been used for centuries in Ayurvedic medicine for wound healing, skin care, and digestive health. Ceylon turmeric is prized for its high curcumin content and purity.",
    weight: "100g",
    category: "spices medicine",
    price: 1.79
},
{
    img: "https://mangaalharvest.com/cdn/shop/products/Curryleaves.jpg?v=1595610614&width=1946",
    title: "Curry Leaves කරපිංචා",
    description: "Fresh dried curry leaves are an indispensable ingredient in Sri Lankan cuisine, providing a distinctive citrusy, slightly bitter aroma. These leaves come from the curry tree native to Sri Lanka and South India. Rich in antioxidants, vitamins A and C, curry leaves support digestive health, control blood sugar levels, and promote hair growth. They're tempered in hot oil to release their aromatic compounds before being added to curries, sambols, and rice preparations. Authentic Ceylon curry leaves are highly aromatic.",
    weight: "100g",
    category: "spices aromatics cooking ingredients medicine",
    price: 2.29
},
{
    img: "https://cdn.shopify.com/s/files/1/0270/7157/8246/files/goraka3_600x600.jpg?v=1652288228",
    title: "Goraka ගොරකා",
    description: "Goraka, also known as Malabar tamarind or garcinia cambogia, is a unique souring agent used extensively in Sri Lankan fish curries. These dried, smoky-flavored fruit segments impart a distinctive tangy taste and deep color to dishes. Goraka contains hydroxycitric acid, believed to aid weight management and suppress appetite. It's an essential ingredient in traditional Sri Lankan cuisine, particularly in ambul thiyal (sour fish curry). This indigenous fruit is now gaining international recognition for its culinary and potential health benefits.",
    weight: "100g",
    category: "spices cooking ingredients medicine",
    price: 2.99
},
{
    img: "https://www.foodandwine.com/thmb/BVretVplKHIgJ3qvhgwWpGIvdQs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Nutmeg-Explainer-3-FT-BLOG1222-70c43e3feb1c458cb1ea88a41bdcc2f4.jpg",
    title: "Nutmeg සාදික්කා",
    description: "Ceylon nutmeg is harvested from trees grown in Sri Lanka's southern coastal regions. This warm, sweet spice with a slightly nutty flavor is used sparingly due to its intensity. Nutmeg contains compounds that aid digestion, relieve pain, and promote sleep. It's grated fresh into Sri Lankan curries, desserts, and beverages. The spice has traditional uses in Ayurvedic medicine for treating digestive disorders and improving cognitive function. High-quality Ceylon nutmeg is valued for its aromatic oils and therapeutic properties.",
    weight: "100g",
    category: "spices",
    price: 5.49
},
{
    img: "https://cdn.shopify.com/s/files/1/0503/4413/2791/files/2_21b3b0f9-47fc-4b58-80ee-5f6e68e181e8.jpg?v=1679972063",
    title: "Mace වසවාසි",
    description: "Mace is the delicate, lacy covering of the nutmeg seed, offering a more subtle and sweeter flavor than nutmeg itself. Sri Lankan mace has a beautiful orange-red color and is carefully hand-processed from fresh nutmeg fruits. It adds warmth and complexity to both sweet and savory dishes, including curries, cakes, and pickles. Mace contains similar beneficial compounds to nutmeg, supporting digestive health and providing antioxidant benefits. This premium spice is highly valued in international cuisine and traditional medicine.",
    weight: "100g",
    category: "spices luxury items",
    price: 8.99
},
{
    img: "https://i.herbalreality.com/wp-content/uploads/2024/03/06113434/White-mustard-Sinapis-alba-seeds-and-flower-e1709724971169.jpg",
    title: "Mustard Seeds අබ",
    description: "Sri Lankan mustard seeds are small, round seeds that add a pungent, sharp flavor to dishes when heated in oil. Available in yellow and brown varieties, these seeds are fundamental to Sri Lankan tempering techniques. When fried, they pop and release their characteristic nutty, slightly bitter taste. Mustard seeds aid digestion, have anti-inflammatory properties, and are rich in minerals and omega-3 fatty acids. They're used in curries, pickles, and sambols, and mustard oil is valued in traditional medicine and massage therapy.",
    weight: "100g",
    category: "spices cooking ingredients medicine",
    price: 1.29
},
{
    img: "https://www.foodies.pk/wp-content/uploads/2020/01/zeera-or-cumin-seeds.jpeg",
    title: "Cumin Seeds දුරු",
    description: "Ceylon cumin seeds have an earthy, warm flavor with a hint of both sweetness and bitterness. These elongated seeds are essential in Sri Lankan curry powders and spice blends. Cumin aids digestion, boosts immunity, and is rich in iron and antioxidants. When dry-roasted, cumin releases its full aromatic potential. It's used in rice dishes, curries, and meat preparations. Cumin seeds have been valued in traditional medicine for treating digestive disorders, respiratory issues, and skin conditions.",
    weight: "100g",
    category: "spices medicine",
    price: 2.19
},
{
    img: "https://reluctanttrading.com/cdn/shop/products/closeup_Coriander_Seed_best_India_2000x2000.jpg?v=1616594423",
    title: "Coriander Seeds කොත්තමල්ලි",
    description: "Sri Lankan coriander seeds have a warm, citrusy flavor with subtle sweet undertones. These round, ridged seeds are a cornerstone of curry powders and spice blends. Coriander aids digestion, has anti-inflammatory properties, and helps regulate blood sugar levels. Both the seeds and fresh leaves (cilantro) are used extensively in Sri Lankan cuisine. When toasted and ground, coriander seeds provide depth and complexity to curries, sambols, and chutneys. This versatile spice has numerous applications in traditional medicine and culinary arts.",
    weight: "100g",
    category: "spices cooking ingredients medicine",
    price: 1.69
},
{
    img: "https://www.tomsofmaine.com/cdn/shop/articles/fennel_7Boriginal_7D.jpg?v=1742838342",
    title: "Fennel Seeds මාදුරු",
    description: "Fennel seeds are pale green, elongated seeds with a sweet, licorice-like flavor. In Sri Lankan cuisine, fennel is used in both sweet and savory dishes, curry powders, and as a mouth freshener after meals. These seeds aid digestion, freshen breath, and have mild estrogenic properties. Fennel tea is popular for relieving digestive discomfort and bloating. Rich in antioxidants and fiber, fennel seeds support overall health. They're also used in traditional medicine for treating respiratory conditions and promoting lactation.",
    weight: "100g",
    category: "spices medicine aromatics",
    price: 1.99
},
{
    img: "https://worldspice.com/cdn/shop/products/900_star_anise_whole.jpg?v=1679373478",
    title: "Star Anise අනිස්ස මල් /තරු අසමෝදගම් ",
    description: "Star anise is a beautiful star-shaped spice with a strong licorice-like flavor and sweet aroma. Though not indigenous to Sri Lanka, it's cultivated and widely used in the island's cuisine, particularly in biryanis and meat dishes. Star anise contains shikimic acid, used in antiviral medications, and has digestive and respiratory benefits. Its essential oils have antimicrobial properties. The spice adds both flavor and visual appeal to dishes and is valued in traditional medicine for treating coughs and digestive issues.",
    weight: "100g",
    category: "spices luxury items",
    price: 3.99
},
{
    img: "https://post.healthline.com/wp-content/uploads/2020/10/pandan-1296x728-header.jpg",
    title: "Pandan Leaves රමපේ",
    description: "Pandan leaves, also known as rampe, are fragrant green leaves that impart a unique, sweet aroma to Sri Lankan dishes. Essential in rice preparations, desserts, and curries, pandan has a vanilla-like fragrance with grassy notes. These leaves contain compounds that may help lower blood sugar levels and have antioxidant properties. Pandan is used to wrap food for steaming, flavor beverages, and color sweets naturally. The leaves are also used in traditional medicine for pain relief and fever reduction.",
    weight: "100g",
    category: "aromatics spices cooking ingredients",
    price: 2.49
},
{
    img: "https://cdn.shopify.com/s/files/1/0858/1205/2304/files/Get_to_Know_Lemongrass1.jpg?v=1726610567",
    title: "Lemongrass සේර",
    description: "Sri Lankan lemongrass is a tropical grass with a fresh, citrusy aroma and flavor. The lower stalks are used in curries, soups, and teas, while the leaves are used for making aromatic infusions. Lemongrass contains citral, which has antimicrobial and anti-inflammatory properties. It aids digestion, relieves stress, and may help lower cholesterol. Popular in both cooking and traditional medicine, lemongrass is also used to repel insects naturally. The essential oil extracted from lemongrass has numerous therapeutic applications.",
    weight: "100g",
    category: "aromatics spices medicine",
    price: 1.79
},
{
    img: "https://parachutekalpavriksha.org/cdn/shop/articles/66.04.jpg?v=1743141628&width=1500",
    title: "Coconut Flour පොල් පිටි",
    description: "Sri Lankan coconut flour is made from dried, defatted coconut meat, ground into a fine powder. This gluten-free flour is high in fiber, protein, and healthy fats. It's used in traditional Sri Lankan sweets, cakes, and as a thickening agent in curries. Coconut flour has a mild, slightly sweet flavor and absorbs moisture readily. Rich in medium-chain triglycerides, it supports metabolic health and provides sustained energy. This versatile ingredient is increasingly popular in health-conscious cooking and gluten-free baking worldwide.",
    weight: "100g",
    category: "cooking ingredients medicine",
    price: 2.29
},
{
    img: "https://www.trulyceylontea.com/images/black-tea.jpg",
    title: "Ceylon Tea Pure Black සිලෝන් තේ",
    description: "Pure Ceylon black tea is world-renowned for its exceptional quality, bright color, and brisk flavor with citrusy notes. Grown in Sri Lanka's high-elevation tea estates, these hand-plucked leaves undergo careful processing to develop their characteristic taste. Rich in antioxidants called polyphenols, Ceylon tea supports heart health, mental alertness, and metabolism. The tea industry is integral to Sri Lankan culture and economy. Premium Ceylon tea is distinguished by its smoothness, lack of bitterness, and golden coppery infusion, making it a luxury export product.",
    weight: "100g",
    category: "luxury items",
    price: 6.99
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKKGmKnK_gex8oD-EaVdz3kMXJLuLiD5i2A&s",
    title: "Gotukola ගොටුකොළ",
    description: "Gotukola, also known as Centella asiatica, is a medicinal herb used extensively in Sri Lankan traditional medicine and cuisine. The small, kidney-shaped leaves have a slightly bitter taste and are rich in triterpenoids that support cognitive function, wound healing, and skin health. Gotukola is consumed as a salad (gotu kola sambol), juice, or tea. It's believed to enhance memory, reduce anxiety, and promote longevity. This adaptogenic herb has gained international recognition for its neuroprotective and anti-aging properties in both culinary and wellness applications.",
    weight: "100g",
    category: "medicine cooking ingredients",
    price: 2.79
},
{
    img: "https://scontent.frix9-1.fna.fbcdn.net/v/t39.30808-6/299385237_448962477244032_4765182156050087959_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=J_IdNpAUQ_4Q7kNvwFZSijU&_nc_oc=AdlWluKFMU5rL5ReX8ZbI1DWOBYVvv4f194ZlDkYX47grD-C2CBv4W1JlTTPO6Ust4XSc9dywu40oyjn_tvnV4DO&_nc_zt=23&_nc_ht=scontent.frix9-1.fna&_nc_gid=5SNSVrWlfgLvAgs-fiAefA&oh=00_AfkytwXEcRjZe92UQ5D_-sE_RjLuxAaEUpnm-VmbqOK-Mg&oe=6958802E",
    title: "Dried Fish කරවල",
    description: "Sri Lankan dried fish, or karawala, is a traditional preserved seafood product with intense umami flavor. Various fish species are cleaned, salted, and sun-dried using time-honored methods. This protein-rich ingredient is essential in Sri Lankan cuisine, used in curries, sambols, and as a flavoring agent. Dried fish provides concentrated nutrients including omega-3 fatty acids, calcium, and vitamins. It has excellent shelf stability without refrigeration. Different varieties offer distinct flavors, from mild to pungent, adding depth and complexity to traditional dishes.",
    weight: "100g",
    category: "cooking ingredients",
    price: 4.49
},
{
    img: "https://scontent.frix9-1.fna.fbcdn.net/v/t39.30808-6/481812543_562170593533621_4622314815537444055_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kfny5hKFek4Q7kNvwGNbnnW&_nc_oc=Adm3AwMb07XhpKjGtaNGnhWE_QOIukNBladJzayY2ZOthxzhTjMd0oUdYPWH6DUlmOMpRNu13WGgN6Za06PRXoFN&_nc_zt=23&_nc_ht=scontent.frix9-1.fna&_nc_gid=rfgTaRLG_k4ctsFZpmMpkg&oh=00_AfmE7ydLoOTarFHkAQP-kHRExBjM0j5Y03lPg6qCgGlvkg&oe=6958813B",
    title: "Maldive Fish උම්බලකඩ",
    description: "Maldive fish, or umbalakada, is dried and cured tuna processed into hard, amber-colored chips. This traditional ingredient provides an intense, smoky, umami-rich flavor to Sri Lankan dishes. Shaved or pounded into flakes, it's added to curries, sambols, and rice preparations. High in protein and rich in minerals, Maldive fish is a nutritional powerhouse with excellent preservation qualities. The production process involves boiling, smoking, and sun-drying, creating a unique flavor profile. This luxury ingredient is essential in authentic Sri Lankan cooking and increasingly valued internationally.",
    weight: "100g",
    category: "cooking ingredients",
    price: 7.99
},
{
    img: "https://cdn.britannica.com/17/195217-138-BCBE1AFD/overview-cashews-shells.jpg?w=800&h=450&c=crop",
    title: "Cashew Nuts කජු",
    description: "Sri Lankan cashew nuts are premium quality kernels with a rich, buttery flavor and creamy texture. Grown primarily in the country's dry zone, these kidney-shaped nuts are carefully processed to remove the toxic shell oil. Cashews are rich in healthy fats, protein, magnesium, and copper. They're enjoyed as snacks, used in curries, rice dishes, and sweets. Cashew cultivation provides livelihoods for many Sri Lankan communities. The nuts support heart health, bone strength, and weight management. Ceylon cashews are prized for their size, taste, and quality.",
    weight: "100g",
    category: "luxury items",
    price: 5.99
},
{
    img: "https://nikura.com/cdn/shop/articles/citronella_627x364_crop_center.jpg?v=1690815078",
    title: "Citronella Oil පැඟිරි තෙල්",
    description: "Citronella Oil is a traditional Sri Lankan aromatic oil extracted from the roots and bark of indigenous plants through age-old distillation methods. This dark, viscous oil has a distinctive earthy, musky, and slightly sweet aroma that's deeply grounding. Highly valued in traditional Ayurvedic medicine, pagiri oil is renowned for treating rheumatism, joint pain, and muscular aches through massage therapy. It has warming properties that improve circulation and reduce inflammation. The oil is also used as a natural insect repellent and in traditional hair care to strengthen roots and prevent hair loss. Authentic pagiri oil represents Sri Lanka's ancient herbal wisdom.",
    weight: "100g",
    category: "aromatics medicine",
    price: 8.99
},
{
    img: "https://www.aussiecandlesupplies.com.au/cdn/shop/products/amberedsandalwood_a9fb00ca-7afd-41c7-9bc0-4bae54f4e55f_600x.jpg?v=1680742193",
    title: "Sandalwood Oil සඳුන් තෙල්",
    description: "Pure Sri Lankan sandalwood oil is extracted from the heartwood of mature sandalwood trees through steam distillation. This precious oil has a rich, warm, woody aroma with sweet, creamy undertones that's highly prized in perfumery and aromatherapy. Known for its calming and meditative properties, sandalwood oil reduces anxiety, promotes mental clarity, and enhances spiritual practices. It has powerful antiseptic, anti-inflammatory, and skin-healing properties. Used in high-end cosmetics and traditional Ayurvedic treatments, Ceylon sandalwood oil is one of the world's most expensive and sought-after essential oils.",
    weight: "100g",
    category: "aromatics luxury items medicine",
    price: 24.99
},
{
    img: "https://img.freepik.com/premium-photo/bottle-essential-oil-jasmin-flower-wooden-background_35641-1807.jpg",
    title: "Jasmine Oil පිච්ච තෙල්",
    description: "Sri Lankan jasmine oil is extracted from night-blooming jasmine flowers cultivated in the island's tropical gardens. This intensely fragrant oil has a sweet, exotic, and intoxicating floral aroma. Known as the 'King of Oils,' jasmine is used in premium perfumes and aromatherapy for its aphrodisiac and mood-enhancing properties. The oil relieves depression, anxiety, and stress while promoting relaxation and confidence. In traditional medicine, jasmine oil treats skin conditions and menstrual discomfort. Labor-intensive extraction makes this oil precious, requiring thousands of hand-picked flowers for small quantities.",
    weight: "100g",
    category: "aromatics luxury items",
    price: 18.99
},
{
    img: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXczqvx42XQjQqaHjFCwtyhLMCOFAAJ7sZwxUBochsKSAQ1yneCtY_FWBgLtxbi-CneFZlSkO3FV-zAosRLnrkj_W_OhruOnZnEdBhw9juPfIFf5NQp6qtadviJgc4fpAwAIB82Geq4FAe3jeQRKd6uzrE3B?key=gvyRSFjihHusw6nYLUKTvQ",
    title: "Ylang Ylang Oil වල් සපු තෙල්",
    description: "Sri Lankan ylang ylang oil is steam-distilled from the fragrant flowers of the Cananga tree. This golden oil has an intensely sweet, floral, and slightly fruity aroma that's both romantic and exotic. Considered one of the finest essential oils, ylang ylang balances emotions, reduces stress, and acts as a natural aphrodisiac. It regulates oil production in skin and hair, making it valuable in cosmetics. The oil has sedative properties that lower blood pressure and promote restful sleep. Ceylon ylang ylang is prized for its complex, well-balanced fragrance profile.",
    weight: "100g",
    category: "aromatics luxury items medicine",
    price: 16.99
},
{
    img: "https://naturalnicheperfume.com/wp-content/uploads/How-Rose-Essential-Oil-is-Made.jpg",
    title: "Rose Oil රෝස තෙල්",
    description: "Sri Lankan rose oil is extracted from fragrant rose petals through traditional distillation methods. This precious oil has a deep, romantic, floral aroma that's both uplifting and comforting. Rose oil is renowned for its skincare benefits, promoting cell regeneration, reducing scarring, and hydrating mature skin. It has powerful emotional benefits, alleviating depression, grief, and anxiety while promoting self-love and compassion. In Ayurvedic medicine, rose oil balances hormones and cools inflammatory conditions. The labor-intensive production requiring thousands of petals makes this one of the world's most valuable essential oils.",
    weight: "100g",
    category: "aromatics luxury items",
    price: 22.99
},
{
    img: "https://drvaidji.com/cdn/shop/articles/Bitter_Melon_1024x1024_37ab9838-93f6-4c88-83b4-508443174b78.jpg?v=1699514225",
    title: "Bitter Gourd කරවිල",
    description: "Bitter gourd, or karawila, is a distinctive vegetable with a bumpy, dark green exterior and intensely bitter taste. Despite its bitterness, it's highly prized in Sri Lankan cuisine for its medicinal properties. Rich in vitamins A and C, bitter gourd helps regulate blood sugar levels, making it beneficial for diabetics. It's used in curries, stir-fries, and sambols, often paired with coconut to balance the bitterness. The vegetable aids digestion, purifies blood, and boosts immunity. In traditional medicine, bitter gourd is considered a cooling food that detoxifies the body and supports liver function.",
    weight: "100g",
    category: "cooking ingredients medicine",
    price: 2.49
},
{
    img: "https://5.imimg.com/data5/ML/YX/WG/SELLER-4973005/drumstick-500x500.jpg",
    title: "Drumstick මුරුංගා",
    description: "Drumstick, or murunga, is a long, slender green pod from the moringa tree, considered a superfood in Sri Lankan cuisine. The tender pods have a slightly sweet, asparagus-like flavor and are rich in vitamins, minerals, and amino acids. Used in curries, soups, and traditional dishes, drumstick supports bone health, reduces inflammation, and boosts immunity. Both the pods and leaves are edible and nutritious. The tree is drought-resistant and grows abundantly in Sri Lanka. Drumstick curry is a beloved traditional dish, and the vegetable is increasingly recognized globally for its exceptional nutritional profile.",
    weight: "100g",
    category: "cooking ingredients medicine",
    price: 3.29
},
{
    img: "https://wp.plantsnap.com/wp-content/uploads/2018/11/snakegourd.jpg",
    title: "Snake Gourd පතොල",
    description: "Snake gourd, or pathola, is a long, slender vegetable with distinctive striped patterns on its skin. This mild-flavored, slightly sweet gourd is a staple in Sri Lankan home cooking. Low in calories and high in fiber, snake gourd aids digestion and helps manage blood sugar levels. It's typically used in curries, stir-fries, and mallum (a traditional shredded vegetable preparation). The vegetable has cooling properties in Ayurvedic medicine and is recommended for managing body heat. Rich in vitamins and minerals, snake gourd supports overall health and is particularly beneficial during hot weather.",
    weight: "100g",
    category: "cooking ingredients",
    price: 1.99
},
{
    img: "https://specialtyproduce.com/sppics/23847.png",
    title: "Ash Plantain අළු කෙසෙල්",
    description: "Ash plantain, or ala kesel, is a variety of cooking banana with a greenish-grey skin, essential in Sri Lankan cuisine. Unlike sweet bananas, this starchy fruit is always cooked before eating. It has a mild, potato-like flavor and firm texture that holds well in curries. Rich in resistant starch, ash plantain supports digestive health and provides sustained energy. It's used in traditional dishes, curries, and as a staple food. The fruit is high in potassium, vitamins, and fiber. Ash plantain curry is comfort food in Sri Lankan households and represents the island's agricultural heritage.",
    weight: "100g",
    category: "cooking ingredients medicine",
    price: 2.79
},
{
    img: "https://images.everydayhealth.com/images/diet-nutrition/jackfruit-101-1440x810.jpg?sfvrsn=8803e5c1_5",
    title: "Jackfruit කොස්",
    description: "Young jackfruit, or kos, is an immature version of the world's largest tree fruit, widely used as a vegetable in Sri Lankan cuisine. When unripe, it has a neutral flavor and meat-like texture that absorbs spices beautifully. Jackfruit is used in curries, particularly the famous polos curry, where it's cooked with spices until tender. Rich in fiber, vitamins, and antioxidants, jackfruit supports digestive health and immunity. As a sustainable, protein-rich plant food, it's gaining international popularity as a meat substitute. The entire tree is useful, with leaves, seeds, and ripe fruit all consumed.",
    weight: "100g",
    category: "cooking ingredients",
    price: 3.49
},
{
    img: "https://specialtyproduce.com/sppics/8746.png",
    title: "Breadfruit දෙල්",
    description: "Breadfruit, or del, is a large, starchy fruit with a mild, potato-like flavor when cooked. This versatile ingredient is used throughout Sri Lankan cuisine in curries, fried preparations, and traditional dishes. Rich in complex carbohydrates, fiber, and vitamins, breadfruit provides sustained energy and supports digestive health. The fruit can be boiled, roasted, fried, or curried. When ripe, it becomes slightly sweet. Breadfruit trees are highly productive and drought-resistant, making them an important food security crop. The fruit is gluten-free and increasingly valued as a sustainable, nutritious staple food globally.",
    weight: "100g",
    category: "cooking ingredients",
    price: 2.99
},
{
    img: "https://www.epicgardening.com/wp-content/uploads/2022/04/A-shot-of-freshly-harvested-pods-placed-on-a-woven-wicker-tray.jpg",
    title: "Winged Bean දඹල",
    description: "Winged bean, or sarasambal, is a distinctive legume with four frilly edges running along its length. This crunchy, slightly sweet bean is entirely edible, including pods, leaves, flowers, and tubers. Popular in Sri Lankan salads, stir-fries, and mallum, winged beans are exceptionally nutritious, containing high levels of protein, vitamins, and minerals. They support bone health, boost immunity, and aid digestion. The plant is nitrogen-fixing, enriching soil naturally. Winged beans have a nutty flavor and crisp texture that adds interest to dishes. This underutilized superfood is gaining recognition for its nutritional and agricultural benefits.",
    weight: "100g",
    category: "cooking ingredients",
    price: 3.79
},
{
    img: "https://www.melissas.com/cdn/shop/files/image-of-chinese-long-beans-vegetables-1125637311_600x600.jpg?v=1738769324",
    title: "Long Beans මෑකරල්",
    description: "Long beans, or me bonchi, are yard-long green beans that are a staple in Sri Lankan cooking. These slender, flexible beans have a slightly sweet flavor and crisp texture when fresh. Used extensively in stir-fries, curries, and sambols, long beans are rich in fiber, vitamins A and C, and folate. They support digestive health, eye health, and immunity. The beans are typically cut into smaller pieces before cooking and pair well with coconut, spices, and dried fish. Long beans are easy to grow in tropical climates and provide continuous harvest, making them economically important for Sri Lankan farmers.",
    weight: "100g",
    category: "cooking ingredients",
    price: 2.29
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhUtnGPhXGxdAg7NwoVVgpsIavNzCztTlZA&s",
    title: "Spiny Lasia කොහිල",
    description: "Kohila is an aquatic plant stem native to Sri Lankan wetlands, considered a delicacy in traditional cuisine. The cylindrical, brownish stems have a unique, slightly bitter taste and crunchy texture. Kohila curry is a beloved traditional dish, often prepared with coconut milk and spices. Rich in dietary fiber and minerals, kohila supports digestive health and provides essential nutrients. The plant grows wild in paddy fields and water bodies. Harvesting and preparing kohila requires skill, as it must be thoroughly cleaned and cooked to remove bitterness. This indigenous vegetable represents Sri Lanka's rich biodiversity and culinary heritage.",
    weight: "100g",
    category: "cooking ingredients medicine",
    price: 4.29
},
{
    img: "https://images.prismic.io/floraqueen-blog/ZtnmUbzzk9ZrXD-7_shutterstock_696032743.jpg?w=1000&h=600&fit=crop&auto=format,compress",
    title: "Banana Flower කෙසෙල් මුව",
    description: "Banana flower, or kesel mal, is the purple-maroon blossom from banana plants, used as a nutritious vegetable in Sri Lankan cuisine. The tender inner petals have a mild, slightly bitter taste and are rich in fiber, protein, vitamins, and minerals. Banana flower supports digestive health, regulates menstrual cycles, and helps manage blood sugar levels. It's prepared in salads (mallum), curries, and traditional dishes after removing outer layers and soaking to reduce bitterness. The flower must be used fresh as it oxidizes quickly. This zero-waste ingredient utilizes the entire banana plant and represents sustainable, traditional food practices.",
    weight: "100g",
    category: "cooking ingredients medicine",
    price: 3.99
}


];


export { type DataType, DataList }; 