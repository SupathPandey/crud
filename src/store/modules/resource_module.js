export const resource_module = {
	namespaced: true,
	state: {
    all_dialog: false,
		selected: {},
		headers: 
		[
			{
				text: 'id', 
				align: 'left',
				sortable: false,
				value: 'id'
			}, 
			{
				text: 'Resource', 
				sortable: false,
				value: 'resource'
			}, 
			{
				text: 'Title', 
				sortable: false,
				value: 'title'
			}
		], 
		items: 
		[
			 {
          id: 1,
          name: "test",
          title: "efdsfsd",
          active: true
        },
        {
          id: 2,
          name: "test",
          title: "efdsfsd",
          active: true
        },
        {
          id: 3,
          name: "test",
          title: "efdsfsd",
          active: true
        },
        {
          id: 4,
          name: "test",
          title: "efdsfsd",
          active: true
        },
        {
          id: 5,
          name: "test",
          title: "efdsfsd",
          active: true
        }

		]
	},
	getters: {
    headers: state => {

    	//var arr = Object.key(state.items[0]);
    	
     // var obj = state.items[0];
     //  return Object.keys(obj);
     return state.headers;
    },
    items: state => {
      return state.items;
    },
    selected: state => {
    	return state.selected;
    }
  },
  mutations: {
  	ADD_ITEM: (state, {item}) => {  		
  		state.items.unshift(item);
  	},
  	DELETE_ITEM: (state, id) => {  
      state.selected = id.item;
      for(var i=0; i<state.items.length; i++)
      {
        if(id.item===state.items[i].id){
          state.items.splice(i,1);
        }
      }

    }
  },
  actions: {
  	add_item: ({ commit, state }, item) => {
      return commit('ADD_ITEM', { item });
    },
    delete_item: ({ commit, state }, item) => {
      return commit('DELETE_ITEM', { item });
    }
  }
}