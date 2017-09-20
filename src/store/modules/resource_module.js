export const resource_module = {
	namespaced: true,
	state: {
    all_dialog: {
      edit_dialog: false ,
      delete_dialog: false
      },
		selected: {},
    subjects: [
      "Literature",
      "Maths",
      "Biology",
      "Physics",
      "Chemistry"
    ],
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
			},
      {
        text: 'Subject', 
        sortable: false,
        value: 'subject'
      }
		], 
		items: 
		[
			 {
          id: 1,
          name: "test",
          title: "efdsfsd",
          subject: "",
          active: true
        },
        {
          id: 2,
          name: "test",
          title: "efdsfsd",
          subject: "",
          active: true
        },
        {
          id: 3,
          name: "test",
          title: "efdsfsd",
          subject: "",
          active: true
        },
        {
          id: 4,
          name: "test",
          title: "efdsfsd",
          subject: "",
          active: true
        },
        {
          id: 5,
          name: "test",
          title: "efdsfsd",
          subject: "",
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
      console.log(item.name+ " ADD_ITEM");		
  		state.items.unshift(item);
  	},
  	DELETE_ITEM: (state, {item}) => {  
      console.log(item.id+" DELETE");
      //state.selected = id.item;
      for(var i=0; i<state.items.length; i++)
      {
        if(item.id===state.items[i].id){
          state.items.splice(i,1);
        }
      }
    },
    EDIT_ITEM: (state, {modifieditem}) => {
      // state.selected = id.item;
      console.log(modifieditem.title+" ID");
      for(var i=0; i<state.items.length; i++)
      {
        if(modifieditem.id===state.items[i].id){
          state.items.splice(i,1,modifieditem);
          console.log(modifieditem.title+" modifieditem");
        }
      }
    }
  },
  actions: {
  	add_item: ({ commit, state }, item) => {
      console.log(item+ " add_item");
      return commit('ADD_ITEM', { item });
    },
    delete_item: ({ commit, state }, item) => {
      console.log(item+" delete_item");
      return commit('DELETE_ITEM', { item });
    },
    edit_item: ({ commit, state }, modifieditem) => {
      console.log(modifieditem.title+" edit_item");
      return commit('EDIT_ITEM', { modifieditem });
    } 
  }
}