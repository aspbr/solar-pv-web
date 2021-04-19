import { FETCH_CERTIFICATES } from './constants'

export interface ICertificate {
    certificateId: number,
    certificateNumber: string,
    location: string,
    reportNumber: string,
    contactId: string,
    testStandardId: string,
    productId: string,
    certIssueDate: string
}

export interface fetchCertificates {
    type: typeof FETCH_CERTIFICATES,
    payload: ICertificate
  }

  export type CertificateActionTypes = fetchCertificates
  