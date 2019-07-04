import { HelloWorld } from './HelloWorld'

describe('HelloWord', () => {
	it('says hello world with no name', () => {
		expect(HelloWorld.hello()).toEqual('Hello, World!')
	})

	it('says hello to Bob', () => {
		expect(HelloWorld.hello('Bob')).toEqual('Hello, Bob!')
	})

	it('says hello to Sally', () => {
		expect(HelloWorld.hello('Sally')).toEqual('Hello, Sally!')
	})
})
