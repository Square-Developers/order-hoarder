import { expect, test } from 'vitest';
import { buildCsp, CSPFetchDirective, CSPKeywordValue } from './build-csp';

test('Builds an empty CSP', () => {
  const csp = buildCsp();

  expect(csp).toHaveProperty('policyMap');
  expect(csp).toHaveProperty('addToPolicy');
  expect(csp).toHaveProperty('toString');
  expect(csp.policyMap.size).toBe(0);
});

test('Adds a directive to the CSP', () => {
  const csp = buildCsp();

  expect(csp.policyMap.size).toBe(0);

  csp.addToPolicy(CSPFetchDirective.ChildSrc, CSPKeywordValue.Self);

  expect(csp.policyMap.size).toBe(1);
  expect(csp.policyMap.has(CSPFetchDirective.ChildSrc)).toBe(true);
  expect(csp.policyMap.get(CSPFetchDirective.ChildSrc)?.length).toBe(1);
  expect(csp.toString()).toBe("child-src 'self';");
});
