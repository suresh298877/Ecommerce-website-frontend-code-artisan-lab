import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";

function Reports() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Daily Reports</h4>
                                    <h4><Link to='/seller/daily-report' className="btn btn-info">view</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Monthly Reports</h4>
                                    <h4><a href='#' className="btn btn-info">view</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Yearly Reports</h4>
                                    <h4><a href='#' className="btn btn-info">view</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Reports;