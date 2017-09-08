export const resource_module = {
	namespaced: true,
	state: {
		currentItem: {},
		headers: 	[
			{
				text: 'id', 
				align: 'left',
				sortable: false,
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
          name: "test",
          title: "efdsfsd"
        },
        {
          id: 2,
          name: "test",
          title: "efdsfsd"
        },
        {
          id: 3,
          name: "test",
          title: "efdsfsd"
        },
        {
          id: 4,
          name: "test",
          title: "efdsfsd"
        },
        {
          id: 10,
          name: "test",
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
  }, 
  mutations: {
  	ADD: (state, { item }) => {
  		state.items.unshift(item);
  	}

  },
  actions: {
  	add: ({ commit, state }, item) => {
      return commit('ADD', { item });
    }
  }
}