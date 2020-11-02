import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Forms = () => {
	return (
		<Form>
			<div className='form'>
				<Form.Group controlId='submitARequest'>
					<Form.Label>Anime Request</Form.Label>
					<Form.Control type='text-input' placeholder='Enter Anime Title' />
					<Form.Text className='text-muted'>
						Please enter either the English or Japanese title of the anime you
						would like to request.
					</Form.Text>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</div>
		</Form>
	);
};

export default Forms;
