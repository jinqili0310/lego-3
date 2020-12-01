import React, { Component } from 'react';
import { Form, Table } from 'react-bootstrap';

class ProductOneText extends Component {
	state = {};
	render() {
		return (
			<Form.Group className="intro-text-one">
				<Form.Row>
					<Table className="product-table">
						<thead>
							<tr>
								<th>Ages</th>
								<th>Pieces</th>
								<th>VIP Points</th>
								<th>Item</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>8+</td>
								<td>1010</td>
								<td>650</td>
								<td>71369</td>
							</tr>
						</tbody>
					</Table>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>Specifications</b>
					</Form.Label>
				</Form.Row>
				{/* <br /> */}
				<Form.Row>
					<Form.Label>
						Players will love the flipping, shaking and balancing challenges in this Bowser’s Castle Boss
						Battle Expansion Set (71369). A brilliant gift for kids to add to the LEGO® Super Mario™ Starter
						Course (71360), this castle toy playset features towers with rotating and shaking platforms,
						flippers to raise Bowser's arms and access the ? Block and Time Block, a shaking bridge, plus
						Bowser, Boo, Dry Bones and Lava Bubble figures.
					</Form.Label>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>Fun-packed app</b>
					</Form.Label>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>Unlimited gameplay</b>
					</Form.Label>
				</Form.Row>
			</Form.Group>
		);
	}
}

export default ProductOneText;
