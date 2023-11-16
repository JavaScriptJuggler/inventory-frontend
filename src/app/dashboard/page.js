import React from 'react';
import Layout from '../components/Layout';

export default function dashboard() {
    return (
        <Layout>
            <div className="container-xl">
                <div className="row row-deck row-cards">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="subheader">Sales</div>
                                    <div className="ms-auto lh-1">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item active" href="#">Last 7 days</a>
                                                <a className="dropdown-item" href="#">Last 30 days</a>
                                                <a className="dropdown-item" href="#">Last 3 months</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h1 mb-3">75%</div>
                                <div className="d-flex mb-2">
                                    <div>Conversion rate</div>
                                    <div className="ms-auto">
                                        <span className="text-green d-inline-flex align-items-center lh-1">
                                            7%
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" /></svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="progress progress-sm">
                                    <div className="progress-bar bg-primary" style={{ "width": "75%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="75% Complete">
                                        <span className="visually-hidden">75% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="subheader">Revenue</div>
                                    <div className="ms-auto lh-1">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item active" href="#">Last 7 days</a>
                                                <a className="dropdown-item" href="#">Last 30 days</a>
                                                <a className="dropdown-item" href="#">Last 3 months</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <div className="h1 mb-0 me-2">$4,300</div>
                                    <div className="me-auto">
                                        <span className="text-green d-inline-flex align-items-center lh-1">
                                            8%
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div id="chart-revenue-bg" className="chart-sm"></div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="subheader">New clients</div>
                                    <div className="ms-auto lh-1">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item active" href="#">Last 7 days</a>
                                                <a className="dropdown-item" href="#">Last 30 days</a>
                                                <a className="dropdown-item" href="#">Last 3 months</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <div className="h1 mb-3 me-2">6,782</div>
                                    <div className="me-auto">
                                        <span className="text-yellow d-inline-flex align-items-center lh-1">
                                            0%
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /></svg>
                                        </span>
                                    </div>
                                </div>
                                <div id="chart-new-clients" className="chart-sm"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="subheader">Active users</div>
                                    <div className="ms-auto lh-1">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item active" href="#">Last 7 days</a>
                                                <a className="dropdown-item" href="#">Last 30 days</a>
                                                <a className="dropdown-item" href="#">Last 3 months</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <div className="h1 mb-3 me-2">2,986</div>
                                    <div className="me-auto">
                                        <span className="text-green d-inline-flex align-items-center lh-1">
                                            4%
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" /></svg>
                                        </span>
                                    </div>
                                </div>
                                <div id="chart-active-users" className="chart-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal modal-blur fade" id="modal-report" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New report</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Client name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Reporting period</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div>
                                        <label className="form-label">Additional information</label>
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a href="#" className="btn btn-link link-secondary" data-bs-dismiss="modal">
                                Cancel
                            </a>
                            <a href="#" className="btn btn-primary ms-auto" data-bs-dismiss="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                                Create new report
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
