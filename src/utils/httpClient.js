const API = 'https://api.themoviedb.org/3';

export function get(path) {
	return fetch(API + path, {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTMwMGQ1NmQzYWM2ZDUwYTRlZGFlOTllZjQyNTlkMCIsInN1YiI6IjYzOWI4N2RiZGRkNTJkMDA4YzcwNWMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pEOhnfMn-i9TU_MqZV3xnfPh8P-gQedALgCoBtPZp9E',
			'Content-Type': 'application/json;charset=utf-8',
		},
	}).then((result) => result.json());
}
