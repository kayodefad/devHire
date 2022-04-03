import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import caretDown from '../assets/images/caret-down.svg';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 30px;
	color: #8692a6;

	.left {
		font-size: 13px;
	}

	.right {
		border: 1px solid #8692a6;
		border-radius: 6px;
		padding: 7px 10px;
		font-size: 13px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 140px;
		font-weight: 500px;
		position: relative;

		& + div {
			display: flex;
			align-items: center;
		}

		.currency-select {
			cursor: default;
		}

		.flag {
			width: 20px;
			margin-right: 7px;
		}
		.caret-down {
			width: 8px;
		}
		.currencies-dropdown {
			position: absolute;
			border: 1px solid #000;
			left: -40%;
			bottom: -20px;
			width: 150%;
			background-color: #3a3a3b;
			border-radius: 10px;
			padding: 7px;

			.currency {
				padding: 5px;
				display: flex;
				align-items: center;
				border-radius: 5px;
				color: #fff;
				&:hover {
					background: #076fa3;
				}
			}
		}
	}
`;

const items = [
	{ key: 'naira', title: 'Naira' },
	{ key: 'dollar', title: 'Dollar' },
];

const AppFooter = () => {
	const [currencies, setCurrencies] = useState([
		{
			id: 1,
			name: 'Naira',
			short: 'NGN',
			locale: 'en_NG.UTF-8',
			symbol: '₦',
			divider: '1.00',
			category: 'local',
			regional_default: 1,
			flag_url:
				'https://tera-media.s3-eu-west-1.amazonaws.com/currency-flag/nigeria.png',
		},
	]);
	const [selected, setSelected] = useState(currencies[0].id);
	const [currencyDropdown, setCurrencyDropdown] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get('https://api.terawork.com/resources');
				setCurrencies(data.data.currencies);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	const handleChange = (e) => {
		setSelected(e.target.value);
		console.log(e.target.value);
	};

	const handleSelect = () => {
		setCurrencyDropdown(false);
	};

	return (
		<Container className='footer'>
			<div className='left'>© 2022 DevHire</div>
			<div className='right'>
				<div className='currency-select' onClick={() => setCurrencyDropdown(true)}>
					<img
						className='flag'
						src={currencies[0].flag_url}
						alt='country flag'
					/>
					<span>{currencies[0].name}</span>
				</div>
				<img className='caret-down' src={caretDown} alt='caret down' />
				{currencyDropdown && (
					<div className='currencies-dropdown'>
						{currencies.map((currency) => {
							return (
								<div
									onClick={handleSelect}
									className='currency'
									key={currency.name}
								>
									<img
										className='flag'
										src={currency.flag_url}
										alt='country flag'
									/>
									<span>{currency.name}</span>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</Container>
	);
};

export default AppFooter;

// {currencies.map((currency) => {
// 	return (
// 		<div key={currency.name}>
// 			<span>{currency.flag_url}</span>
// 			<span>{currency.name}</span>
// 		</div>
// 	);
// })}
