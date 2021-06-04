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

export function nestMe(nests = 1, node = 'Big!') {
  let nest = <Fragment>{node}</Fragment>
  const arr = new Array(nests)
  // eslint-disable-next-line no-unused-vars
  for (const _ of arr) {
    nest = <div>{nest}</div>
  }
  return nest
}

export function listMe(lists = 1, node = 'List!') {
  let list = []
  let count = 0;
  const arr = new Array(lists)
  // eslint-disable-next-line no-unused-vars
  for (const _ of arr) {
    list.push((<Fragment key={count++}>{node}</Fragment>))
  }
  return list
}