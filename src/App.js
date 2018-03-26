import React, {Component} from "react";
import './App.css';
import uuidv1 from "uuid";
import {addArticle, addItem} from "./actions/index";
import gun1 from './assets/img/gun1.jpeg';
import gun2 from './assets/img/gun2.jpg';
import gun3 from './assets/img/gun3.jpeg';
import logo from './assets/img/logo.png'
import box from './assets/img/box.png';


class App extends Component {
    handleSubmit() {
        const item = {
            price: 30,
            title: 'Starter Box'
        };
        const id = uuidv1();
        addItem({ item, id });
    }
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-4">
                    <a className="navbar-brand" href="#home"><img className="mb-2" src={logo} alt="" width="24" height="24"/> RED DIAMOND AIRSOFT</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">Pricing </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Contact</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary"  data-toggle="modal" data-target="#exampleModal" >
                                    <i className="fas fa-shopping-cart"></i> Shopping Cart <span className="badge badge-light">4</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"><img className="mb-2" src={logo} alt="" width="24" height="24"/> Shopping Cart</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted">Your cart</span>
                                        <span className="badge badge-secondary badge-pill">3</span>
                                    </h4>
                                    <ul className="list-group mb-3">
                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 className="my-0">Product name</h6>
                                                <small className="text-muted">Brief description</small>
                                            </div>
                                            <span className="text-muted">$12</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 className="my-0">Second product</h6>
                                                <small className="text-muted">Brief description</small>
                                            </div>
                                            <span className="text-muted">$8</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 className="my-0">Third item</h6>
                                                <small className="text-muted">Brief description</small>
                                            </div>
                                            <span className="text-muted">$5</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Total (USD)</span>
                                            <strong>$20</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" intro" id={'home'}>
                    <div className="col-md-8 p-lg-5 mx-auto my-5">
                        <h1 className=" font-weight-normal">GET YOUR <span className={'redOut'}> MYSTERY BOX</span> TODAY!</h1>
                        <a className="btn btn-outline-danger" href="">Choose Your Box</a>
                    </div>
                    <div className="product-device box-shadow d-none d-md-block"></div>
                    <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
                </div>
                <div className="container marketing">
                    <hr className="featurette-divider"/>

                        <div className="row featurette" id={'about'}>
                            <div className="col-md-7">
                                <h2 className="featurette-heading">First featurette heading. <span className="redOut">It'll blow your mind.</span></h2>
                                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                            </div>
                            <div className="col-md-5">
                                <img className="featurette-image img-fluid mx-auto" src={gun1} alt="Generic placeholder"/>
                            </div>
                        </div>

                        <hr className="featurette-divider"/>

                            <div className="row featurette">
                                <div className="col-md-7 order-md-2">
                                    <h2 className="featurette-heading">Oh yeah, it's that good. <span className="redOut">See for yourself.</span></h2>
                                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                                </div>
                                <div className="col-md-5 order-md-1">
                                    <img className="featurette-image img-fluid mx-auto" src={gun2} alt="Generic placeholder"/>
                                </div>
                            </div>

                            <hr className="featurette-divider"/>

                                <div className="row featurette">
                                    <div className="col-md-7">
                                        <h2 className="featurette-heading">And lastly, this one. <span className="redOut">Checkmate.</span></h2>
                                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                                    </div>
                                    <div className="col-md-5">
                                        <img className="featurette-image img-fluid mx-auto" src={gun3} alt="Generic placeholder"/>
                                    </div>
                                </div>

                                <hr className="featurette-divider"/>

                </div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id={'pricing'}>
                    <h1 className="display-4 featurette-heading">Pricing</h1>
                    <p className="lead" style={{width: '80%', margin: 'auto'}}>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal featurette-heading">Starter Box</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$30 <small className="text-muted">/ + tax</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>1 pack of BBs</li>
                                    <li>Starter Gun</li>
                                    <li>Decals/patches</li>
                                    <li>Eye Pro</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary featurette-heading" onClick={this.handleSubmit()}>Add to Cart</button>
                            </div>
                        </div>
                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal featurette-heading">Advance Box</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$80<small className="text-muted">/ + tax</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Bucket of BBs</li>
                                    <li>Electric Gun</li>
                                    <li>Advanced Gear</li>
                                    <li>Gun Parts</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-primary featurette-heading">Add to Cart</button>
                            </div>
                        </div>
                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal featurette-heading">Ultimate Box</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$129 <small className="text-muted">/ + tax</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Bucket of BBs</li>
                                    <li>High Quality Gun</li>
                                    <li>Field Gear</li>
                                    <li>Lottery Ticket</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-primary featurette-heading">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="pt-4 my-md-5 pt-md-5 border-top container">
                    <div className="row">
                        <div className="col-12 col-md">
                            <img className="mb-2" src={logo} alt="" width="30" height="30"/>
                                <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="">Cool stuff</a></li>
                                <li><a className="text-muted" href="">Random feature</a></li>
                                <li><a className="text-muted" href="">Team feature</a></li>
                                <li><a className="text-muted" href="">Stuff for developers</a></li>
                                <li><a className="text-muted" href="">Another one</a></li>
                                <li><a className="text-muted" href="">Last time</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="">Resource</a></li>
                                <li><a className="text-muted" href="">Resource name</a></li>
                                <li><a className="text-muted" href="">Another resource</a></li>
                                <li><a className="text-muted" href="">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="">Team</a></li>
                                <li><a className="text-muted" href="">Locations</a></li>
                                <li><a className="text-muted" href="">Privacy</a></li>
                                <li><a className="text-muted" href="">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;