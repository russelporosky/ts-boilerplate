export class HelloWorld {
	/**
	 * Says "Hello, name!" based on the given name.
	 *
	 * @example
	 * hello('James'); // returns "Hello, James!"
	 *
	 * @param name - the name to use in the output string
	 */
	static hello(name = 'World'): string {
		return `Hello, ${ name }!`
	}
}
