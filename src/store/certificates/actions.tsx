import { FETCH_CERTIFICATES } from './constants'

import axios from 'axios'
import { Dispatch } from 'redux'

export const fetchCertificates = () => async (dispatch: Dispatch) => {
    let response = await axios.get(`http://localhost:8000/backend/certificate-list/`)
    let certificates = response.data
  
    dispatch({
      type: FETCH_CERTIFICATES,
      payload: certificates
    })
  }