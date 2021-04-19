/* eslint-disable import/no-anonymous-default-export */
import {
    CertificateActionTypes
  } from './types'
  
  import { FETCH_CERTIFICATES } from './constants'
  
  let initialState: any = []
  
  export default (state = initialState, action: CertificateActionTypes) => {
    switch (action.type) {
      case FETCH_CERTIFICATES:
        return action.payload
      
      default:
        return state
    }
  }