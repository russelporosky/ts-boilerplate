/**
 * This comment block is for the export as a whole.
 *
 * @module
 */

/**
 * This class contains a method that says hello in a friendly fashion.
 */
export class HelloWorld {
	/**
	 * Says "Hello, name!" based on the given name.
	 *
	 * @example
	 * hello('James'); // returns "Hello, James!"
	 *
	 * @param name - The name to use in the output string.
	 */
	static hello(name = 'World'): string {
		return `Hello, ${name}!`;
	}
}
