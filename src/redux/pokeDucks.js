import axios from "axios";

// constantes
const dataInicial = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

//type
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO";


// reducer

export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, ...action.payload };
    case SIGUIENTE_POKEMONES_EXITO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

// acciones

export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  //console.log( "getState", getState().pokemones.offset)
  //const offset =  getState().pokemones.offset
  //const {offset} =  getState().pokemones

  if(localStorage.getItem('offset=0')){
    console.log("datos guardados")
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem('offset=0')) 
    })
    return
  }

  try {
    console.log('datos de la api')
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
    );
    console.log(res.data);
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data,
    });
    localStorage.setItem('offset=0',JSON.stringify(res.data))
  } catch (error) {
    console.log(error);
  }
};

export const siguientePokemonAccion = (numero) => async (
  dispatch,
  getState
) => {
  // primera alternativa
  //const offset = getState().pokemones.offset
  //const siguiente = offset + numero

  const next = getState().pokemones.next;

  try {
    const res = await axios.get(next);
    console.log(res.data);
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const anteriorPokemonAccion = () => async(dispatch, getState) => {

  const {previous} = getState().pokemones

  try {
    const res = await axios.get(previous);
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
