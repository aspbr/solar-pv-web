
import React, { ChangeEvent, Component } from 'react';
import { ICertificate } from '../../store/certificates/types';

import { AppState } from '../../store'
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface CertificateListProps {
    certificates: ICertificate[]
}

interface CertificateListState {
    filterText: string
}

class CertificateList extends Component<CertificateListProps, CertificateListState> {

    state = {
        filterText: ''
      }

      handleChange = (e: ChangeEvent<HTMLInputElement>) =>
  this.setState({ filterText: e.target.value })

    render() {

    let listOfCertificates = this.props.certificates
      .filter((certificate: ICertificate) => certificate.id.toString().includes(this.state.filterText))
      .map(certificate =>   <TableRow key={certificate.id}>
                                <TableCell>{certificate.id}</TableCell>
                                <TableCell>{certificate.issue_date}</TableCell>
                                <TableCell>{certificate.location}</TableCell>
                                <TableCell>{certificate.product}</TableCell>
                                <TableCell>{certificate.report_number}</TableCell>
                                <TableCell>{certificate.standard}</TableCell>
                                <TableCell>{certificate.user}</TableCell>
                            </TableRow>)


        return (
            <div className="spv-main">
                <input name="filterText" 
                    onChange={this.handleChange} 
                    placeholder="Filter for what you are looking for here.."
                    className="cert-name-filter">
                </input>

                <TableContainer component={Paper}>
                <Table  aria-label="Certificate List">
                    <TableHead>
                    <TableRow>
                        <TableCell >Certificate ID</TableCell>
                        <TableCell >Issue Date</TableCell>
                        <TableCell >Location ID</TableCell>
                        <TableCell >Product ID</TableCell>
                        <TableCell >Report Number</TableCell>
                        <TableCell >Standard ID</TableCell>
                        <TableCell >User ID</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {listOfCertificates}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        );
    }
}

export default connect((state: AppState) => ({ certificates: state.certificates }))(CertificateList)