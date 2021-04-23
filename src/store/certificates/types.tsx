import { FETCH_CERTIFICATES } from './constants'

export interface ICertificate {
    id: number,
    location: string,
    report_number: string,
    user: string,
    standard: string,
    product: string,
    issue_date: string
}

export interface fetchCertificates {
    type: typeof FETCH_CERTIFICATES,
    payload: ICertificate
  }

  export type CertificateActionTypes = fetchCertificates
  