import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
                <Row lg={2} className="footer-last">
                    <Col className="footer-last-left">
                        <FontAwesomeIcon className="footer-last-white" icon={faMapMarkerAlt}></FontAwesomeIcon>
                        <span className="footer-last-white">&nbsp; United States &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className="footer-last-grey">© 2020 The LEGO Group. All Rights Reserved</span>
                    </Col>
                    <Col className="footer-last-right">
                        <span className="footer-last-grey">Guides</span>
                        <span className="footer-last-grey">Terms of Sale</span>
                        <span className="footer-last-grey">Terms of Use</span>
                        <span className="footer-last-grey">Privacy Policy</span>
                    </Col>
                </Row>
			</React.Fragment>
		);
	}
}

export default Footer;
