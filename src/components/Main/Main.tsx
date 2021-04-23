import { useEffect } from 'react';
import './Main.css'
import Views from '../Views/Views';
import { useDispatch } from 'react-redux'
import { fetchCertificates } from '../../store/certificates/actions';
import CertificateList from '../CertificateList/CertificateList';

interface MainProps {
    history: any;
  }

export default function Main(props: MainProps) {

        return (
            <div className="spv-main">
                <Views history={props.history}/>
            </div>
        );
}