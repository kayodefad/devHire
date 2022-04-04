import { PageHeader } from '../../components';
import styled from 'styled-components';
import FreelancerCard, {
	FreeLancerLoader,
} from '../../components/FreelancerCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFreelancers } from '../../dataService';
import 'react-loading-skeleton/dist/skeleton.css';
import ReactPaginate from 'react-paginate';
import { PaginateContainer } from '../../styles/ReactPaginateStyle';

const Container = styled.div`
	margin-bottom: 40px;
`;
const Wrapper = styled.div`
	.freelancers-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 40px;
		margin-bottom: 40px;
	}

	@media (min-width: 768px) {
		.freelancers-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.freelancers-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}
`;

const Home = () => {
	const [freelancers, setFreelancers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 10;

	const getAllFreelancers = () => {
		setLoading(true);
		getFreelancers()
			.then((res) => {
				setFreelancers(res);
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
				setLoading(false);
			});
	};

	useEffect(() => {
		getAllFreelancers();
	}, []);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(freelancers.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(freelancers.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, freelancers]);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % freelancers.length;
		setItemOffset(newOffset);
	};

	return (
		<Container>
			<Wrapper>
				<PageHeader>Hire Top Developers</PageHeader>
				{loading ? (
					<div className='freelancers-container'>
						{Array(10)
							.fill(undefined)
							.map((_, i) => {
								return <FreeLancerLoader key={i} />;
							})}
					</div>
				) : (
					<div className='freelancers-container'>
						{currentItems && currentItems.map((freelancer) => {
							return freelancer.id % 2 === 0 ? (
								<FreelancerCard data={freelancer} key={freelancer.id} />
							) : (
								<FreelancerCard data={freelancer} filled key={freelancer.id} />
							);
						})}
					</div>
				)}
				<PaginateContainer>
					<ReactPaginate
						breakLabel='...'
						nextLabel='>'
						onPageChange={handlePageClick}
						pageRangeDisplayed={2}
						pageCount={pageCount}
						previousLabel='<'
						renderOnZeroPageCount={null}
						pageClassName='page-item'
						pageLinkClassName='page-link'
						previousClassName='previous-item'
						previousLinkClassName='previous-link'
						nextClassName='next-item'
						nextLinkClassName='next-link'
						breakClassName='page-item'
						breakLinkClassName='page-link'
						containerClassName='pagination'
						activeClassName='active'
					/>
				</PaginateContainer>
			</Wrapper>
		</Container>
	);
};

export default Home;
