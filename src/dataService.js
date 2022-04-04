export function getFreelancers() {
	return getData('/freelancers.json').then((result) =>
		result.freelancers.map((el, i) => {
			i = i + 1;
			let x = 99 + i;
			let y = x * 2;
			return { ...el, thumbnail: `https://picsum.photos/${y}/${x}` };
		})
	);
}

function getData(endpoint) {
	const delay = (0.5 + Math.random() * 2) * 1000;
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			fetch(endpoint).then((res) => {
				resolve(res.json());
			});
		}, delay);
	});
}

