export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'
export const CHANGEIMG = 'counter/CHANGEIMG'
export const CHANGEIMGMOD = 'counter/CHANGEIMGMOD'

const initialState = {
  movies: [],
  showImage:false
}
export const componentDidMount = () => {
  let dataURL = "reactweb?_embed";
  fetch(dataURL)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        movies: res
      })
    })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    case CHANGEIMG:
      return {
        ...state,
        showImage:true
      }

      case CHANGEIMGMOD:
      return {
        ...state,
        showImage:false
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}

export const changeImage = () => {
  return dispatch => {
    dispatch({
      type: CHANGEIMG
    })

    dispatch({
      type: CHANGEIMGMOD
    })
  }
}