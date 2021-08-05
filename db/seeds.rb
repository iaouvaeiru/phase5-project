# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: 'Leon', password: "12345"})
User.create({username: 'ratchetjim', password: "abc123"})
Item.create({user_id: 1, name: "spongebob", price: 5, image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png", description: "spongebob"})
Item.create({user_id: 2, name: "Fender Telecaster (Made in Japan)", price: 2000, image: "https://images.reverb.com/image/upload/s--2G_nQEfT--/f_auto,t_large/v1541183868/eqkwpmhufhq5x0kdvde9.jpg", description: "Telecaster (made in Japan) 1988 / mint condition"})
Item.create({user_id: 2, name: "Les Paul", price: 3500, image: "https://images.musicstore.de/images/1280/gibson-les-paul-standard-60s-bourbon-burst_1_GIT0049494-000.jpg", description: "Gibson Les Paul / rarely played"})
Item.create({user_id: 1, name: "Nvidia RTX 3080", price: 1380, image: 'https://i.ebayimg.com/images/g/ChsAAOSwXrpfbI4~/s-l640.jpg', description: 'get it before it is gone'})
Item.create({user_id: 2, name: "Lawnmower", price: 140, image: 'https://mobileimages.lowes.com/productimages/5aecfc12-1f76-4488-af6c-653b05f0abe5/09849341.jpg?size=pdhi', description: "Craftsman Lawnmower, works well"})
Item.create({user_id: 2, name: "Lobster Dog Costume", price: 45, image: 'https://cdn3.volusion.com/uxmhm.qxgbz/v/vspfiles/photos/68243-2.jpg?v-cache=1624339085', description: 'Lobster costume for small dogs, dog not included. Costume is machine washable'})
Item.create({user_id: 1, name: "Garfield Book", price: 1, image: 'https://images-na.ssl-images-amazon.com/images/I/81HS19PO3rL.jpg', description: 'Was not funny, I would be surprised if you paid a dollar for this'})