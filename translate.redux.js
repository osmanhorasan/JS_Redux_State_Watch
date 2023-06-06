const data = {
    tr:[
        {merhaba:'hello'},
    ],
    en:[
        {hello:'merhaba'}
    ]
}


function todoReducer(state = [], action) {
    switch (action.type) {
      case 'LANGUAGE_CHANGE': return state =  data[action.payload.toLowerCase()]
      default: return state;
    }
  }


 