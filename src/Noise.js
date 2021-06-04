import { memo, useMemo } from 'react'
import { nestMe, slow } from './utils'

const FAST_COEFFICIENT_MS = 1

export const NBSlow = function NBSlow({ ms }) {
  // console.log('NBSlow')
  slow(ms)
  return (
    <div>Slow!</div>
  )
}

export const NBSlowMemo = memo(NBSlow)
NBSlowMemo.name = 'NBSlowMemo'

export const NBFast = function NBFast({ ms }) {
  // console.log('NBFast')
  // slow(FAST_COEFFICIENT_MS)
  return (
    <div>Fast!</div>
  )
}

export const NBFastMemo = memo(function NBFastMemo({ ms }) {
  // console.log('NBFastMemo')
  // slow(FAST_COEFFICIENT_MS)
  return (
    <div>Fast!</div>
  )
})

export const NBCount = function NBCount({ ms }) {
  // console.log('NBCount')
  slow(FAST_COEFFICIENT_MS)
  return (
    <div>Count!</div>
  )
}

export const NBCountMemo = memo(NBCount)
NBCountMemo.name = 'NBCountMemo'

export const NBBig = function NBBig({ ms, nests }) {
  // console.log('NBBig')
  slow(FAST_COEFFICIENT_MS)
  return (
    <div>
      {nestMe(nests)}
    </div>
  );
}

export const NBBigMemo = memo(NBBig)
NBBigMemo.name = 'NBBigMemo'

export const NBBigDMemo = memo(function NBBigDMemo({ ms, nests }) {
  // console.log('NBBigDMemo')
  slow(FAST_COEFFICIENT_MS)
  const nest = useMemo(() => {
    return nestMe(nests)
  }, [nests])
  return (
    <div>
      {nest}
    </div>
  );
})