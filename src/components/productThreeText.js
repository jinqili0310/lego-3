import React, { Component } from 'react';
import { Form, Table } from 'react-bootstrap';

class ProductThreeText extends Component {
	state = {};
	render() {
		return (
			<Form.Group className="intro-text-three">
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
								<td>431</td>
								<td>325</td>
								<td>71377</td>
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
						LEGO® Super Mario™ fans will love the frightful challenges in this King Boo and the Haunted Yard Expansion Set (71377). A fun gift for kids to add to the LEGO Super Mario Starter Course (71360), this collectible toy features King Boo, 2 Goombas and 4 Swoop figures for action-packed gameplay. To get to the hidden Super Star, players must stomp on Goombas and a spider web, flip a tree and then stomp the spinning Swoops to topple King Boo.
					</Form.Label>
                </Form.Row>
                <br />
				<Form.Row>
					<Form.Label>
						<b>Exciting app</b>
					</Form.Label>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>Limitless gameplay</b>
					</Form.Label>
				</Form.Row>
			</Form.Group>
		);
	}
}

export default ProductThreeText;
