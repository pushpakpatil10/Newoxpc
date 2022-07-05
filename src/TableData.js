import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import LoadingSpinner from './Layout Component/LoadingSpinner';

var CryptoJS = require("crypto-js");

function TableData() {
    const [items, setitems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const url = "https://oxpc-backend-api.azurewebsites.net/api";
    const columns = [
        { dataField: 'id', text: 'Id', sort: true },
        { dataField: 'description', text: 'Procedure name', sort: true, filter: textFilter() },
        { dataField: 'consentStatusFormatted', text: 'Procedure status', sort: true, filter: textFilter() },
        // { dataField: 'approverfullname', text: 'Clinician name' ,sort: true,filter:textFilter()},
        { dataField: 'createdOn', text: 'Created on', sort: true, filter: textFilter() }

    ]
    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage)
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage)
        }
    });

    useEffect(() => {
        getAllProcedure();
    }, []);


    const getAllProcedure = async () => {
        debugger;
        try {
            setIsLoading(true);
            fetch(`${url}/Consent/Procedure/GetAllExistingProcedure`).then((res) => {
                res.json().then((result) => {
                    debugger;
                    var passphras = "3f18a233-9291-49bd-bed8-8e5441ede658" + new Date().toISOString().split('T')[0].replace('-', '').replace('-', '');
                    var bytes = CryptoJS.AES.decrypt(result, passphras);
                    var body = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                    console.log("Response ...." + JSON.stringify(body));
                    debugger;
                    body.map((item, i) => {
                        
                        return (item.id = ++i)
                    });
                    setitems(body);
                    setIsLoading(false);
                })

            })

        } catch {
            console.log(console.error)
            setIsLoading(false);
        }
    }

    return (
        <div id="main" className="main">
               {isLoading ? <LoadingSpinner /> 
                :
        <div className='' style={{ padding: "6%" }}>
            <BootstrapTable
                bootstrap4
                keyField='id'
                pagination={pagination}
                filter={filterFactory()}
                data={items}
                columns={columns} />
</div>}
        </div>
    )
}



export default TableData;


