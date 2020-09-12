let state = {count: 0}

function dispatch(action){
  state = changeState(state, action) //invoke the changeState reducer
  render() //invoke the render on page
}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}


function render(){
  document.body.textContent = state.count
}


render()