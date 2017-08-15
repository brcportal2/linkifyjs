import * as scanner from './core/scanner';
import * as parser from './core/parser';

export default function tokenizer(str) {
	return parser.run(scanner.run(str));
}
global.tokenizer = tokenizer;
