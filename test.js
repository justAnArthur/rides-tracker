import * as assert from "assert";

// eslint-disable-next-line no-undef
describe('end-to-end test ride (km/time/usage) insertion via api (to admin)', function () {
	let responseCodes = []

	this.timeout(10000)

	// eslint-disable-next-line no-undef
	before(async function () {
		responseCodes = await Promise.all(['km', 'time', 'usage'].map(kind =>
			fetch('http://vite:8080/api/ride/' + kind, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					cookie: 'user={"email":"admin","password":"admin"}'
				},
				body: JSON.stringify({ value: Math.ceil(Math.random() * 100), typeId: null })
			})
				.then(res => res.status)
		))
	})

	// eslint-disable-next-line no-undef
	it('should return 200 OK status', function () {
		assert.equal(responseCodes.every(code => code === 200), true)
	})
})