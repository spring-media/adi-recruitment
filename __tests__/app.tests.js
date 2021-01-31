const { test, expect } = require('@jest/globals')
const app = require('../js/app.js')
const constants = require('../js/constants.js')

test('get sum and mean from serviceA', () => {
  const results = app.process(constants.serviceA_sample)

  expect(Object.keys(results)).toMatchObject(['mean', 'sum'])
  expect(results['mean']).toBeCloseTo(1660.403, 2)
  expect(results['sum']).toBe(102945)
})