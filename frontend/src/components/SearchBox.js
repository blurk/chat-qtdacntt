import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function SearchBox({ history }) {
	const [keyword, setKeyword] = useState('');
	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push('/');
		}
	};
	return (
		<Form onSubmit={submitHandler} inline>
			<Form.Control
				type='text'
				name='q'
				onChange={(e) => setKeyword(e.target.value)}
				placeholder='Search product...'
				className='mr-sm-2 ml-sm-5'
			/>
			<Button type='submit' variant='outline-success' className='p-2'>
				Search
			</Button>
		</Form>
	);
}
