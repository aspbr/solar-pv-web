import { ICertificate } from '../../store/certificates/types';
import './Certificate.css'

interface CertificateProps {
  certificate: ICertificate;
}

export function Certificate(props: CertificateProps) {
  return (
    <div className={'certificate-item-' + props.certificate.id}>
        {props.certificate.id}
        {props.certificate.issue_date}
        {props.certificate.location}
        {props.certificate.product}
        {props.certificate.report_number}
        {props.certificate.standard}
        {props.certificate.user}
    </div>
  )
}

export default Certificate