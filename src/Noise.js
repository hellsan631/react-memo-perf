import { memo, useMemo } from 'react'
import { nestMe, slow } from './utils'

const FAST_COEFFICIENT_MS = 1

export const NBSlow = function NBSlow({ ms }) {
  slow(ms)
  return (
    <div>Slow!</div>
  )
}

export const NBSlowMemo = memo(function NBSlowMemo({ ms }) {
  slow(ms)
  return (
    <div>Slow!</div>
  )
})

export const NBFast = function NBFast({ ms }) {
  slow(FAST_COEFFICIENT_MS)
  return (
    <div>Fast!</div>
  )
}

export const NBFastMemo = memo(function NBFastMemo({ ms }) {
  slow(FAST_COEFFICIENT_MS)
  return (
    <div>Fast!</div>
  )
})

export const NBCount = function NBCount({ ms }) {
  slow(FAST_COEFFICIENT_MS)
  return (
    <div>Count!</div>
  )
}

export const NBCountMemo = memo(function NBCountMemo({ ms }) {
  slow(FAST_COEFFICIENT_MS)
  return (
    <div>Count!</div>
  )
})


export const NBBig = function NBBig({ ms, nests }) {
  slow(FAST_COEFFICIENT_MS)
  return (
    <div>
      {nestMe(nests)}
    </div>
  );
}

export const NBBigMemo = memo(function NBBigMemo({ ms, nests }) {
  slow(FAST_COEFFICIENT_MS)
  return (
    <div>
      {nestMe(nests)}
    </div>
  );
})

export const NBBigDMemo = memo(function NBBigDMemo({ ms, nests }) {
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