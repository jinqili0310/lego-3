import React, { Component } from 'react';
import { Form, Table } from 'react-bootstrap';

class ProductTwoText extends Component {
	state = {};
	render() {
		return (
			<Form.Group className="intro-text-two">
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
								<td>6+</td>
								<td>205</td>
								<td>195</td>
								<td>71367</td>
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
						Fans can enhance their LEGO® Super Mario™ gameplay and enjoy lots of creative role-play fun with this Mario’s House & Yoshi Expansion Set (71367). This collectible toy playset features a buildable house with an opening door and roof with a Super Star Block underneath. A great gift for kids who have the Adventures with Mario Starter Course (71360), it also has a hammock to rock LEGO® Mario™ (figure not included) to sleep, plus Yoshi and Goomba toy figures to interact with and win coins.
					</Form.Label>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>Awesome app</b>
					</Form.Label>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>Top gift ideas</b>
					</Form.Label>
				</Form.Row>
			</Form.Group>
		);
	}
}

export default ProductTwoText;
