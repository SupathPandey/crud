export const resource_module = {
	namespaced: true,
	state: {
		headers: 	[
			{
				text: 'id', 
				align: 'left',
				value: 'id'
			}, 
			{
				text: 'Resource', 
				value: 'resource'
			}, 
			{
				text: 'Title', 
				value: 'title'
			}
		], 
		items: 
		[
			 {
          id: 1,
          resource: "test",
          title: "efdsfsd"
        },
        {
          id: 2,
          resource: "test",
          title: "efdsfsd"
        },
        {
          id: 3,
          resource: "test",
          title: "efdsfsd"
        },
        {
          id: 4,
          resource: "test",
          title: "efdsfsd"
        },
        {
          id: 10,
          resource: "test",
          title: "efdsfsd"
        },
        {
          id: 10,
          resource: "test",
          title: "efdsfsd"
        },
        {
          id: 10,
          resource: "test",
          title: "efdsfsd"
        },
        {
          id: 10,
          resource: "test",
          title: "efdsfsd"
        },
        {
          id: 11,
          resource: "test",
          title: "efdsfsd"
        }

		]
	},
	getters: {
    headers: state => {
      return state.headers;
    },
    items: state => {
      return state.items;
    }
  }
  // ,
  // actions {
  // 	increment ({ state, commit }) {
      
  //   }
  // }
}