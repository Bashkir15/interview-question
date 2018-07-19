const uuid = require('uuid')

const user1_id = uuid.v4()
const user2_id = uuid.v4()
const user3_id = uuid.v4()
const user4_id = uuid.v4()
const user5_id = uuid.v4()

module.exports = {
	users: [
		{
			_id: user1_id,
			name: 'Michael Harrison',
			team_members: [user2_id, user4_id, user5_id],
			cart: {
				items: [
					{
						_id: uuid.v4(),
						name: 'hp-laptop',
						price: 1200,
						purchasedOnSale: false
					},
					{
						_id: uuid.v4(),
						name: 'awesome tablet',
						price: 600,
						purchasedOnSale: true
					},
					{
						_id: uuid.v4(),
						name: 'SSD',
						price: 120,
						purchasedOnSale: false
					}
				],
				recentlyRemovedItems: [
					{
						_id: uuid.v4(),
						name: 'less-awesome tablet',
						price: 250,
						purchasedOnSale: false
					}
				]
			}
		},
		{
			_id: user2_id,
			name: 'Terrance Johnson',
			team_members: [user1_id, user3_id],
			cart: {
				items: [
					{
						_id: uuid.v4(),
						name: 'hp-laptop',
						price: 1200,
						purchasedOnSale: false
					}
				],
				recentlyRemovedItems: []
			}
		},
		{
			_id: user3_id,
			name: 'Lisa Mable',
			team_members: [user2_id],
			cart: {
				items: [],
				recentlyRemovedItems: []
			}
		},
		{
			_id: user4_id,
			name: 'Jeff Banks',
			team_members: [user1_id, user2_id, user5_id],
			cart: {
				items: [
					{
						_id: uuid.v4(),
						name: 'hp-laptop',
						price: 1200,
						purchasedOnSale: true
					},
					{
						_id: uuid.v4(),
						name: 'awesome tablet',
						price: 600,
						purchasedOnSale: true
					},
				],
				recentlyRemovedItems: []
			}
		},
		{
			_id: user5_id,
			name: 'Amy Bark',
			team_members: [user1_id, user2_id],
			cart: {
				items: [
					{
						_id: uuid.v4(),
						name: 'SSD',
						price: 120,
						purchasedOnSale: false
					}
				],
				recentlyRemovedItems: [
					{
						_id: uuid.v4(),
						name: 'awesome tablet',
						price: 600,
						purchasedOnSale: true
					}
				]
			}
		}
	]
}
