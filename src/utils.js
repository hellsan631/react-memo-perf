import { Fragment } from 'react';

export function slow(ms) {
  let now = performance.now();
	let result = 0
	while (true) {
		result += Math.random() * Math.random();
		if (performance.now() > now + ms)
			return result;
	}
}

export function nestMe(nests = 1) {
  let nest = <Fragment>Big!</Fragment>
  const arr = new Array(nests)
  // eslint-disable-next-line no-unused-vars
  for (const _ of arr) {
    nest = <div>{nest}</div>
  }
  return nest
}