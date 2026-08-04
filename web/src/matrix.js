/**
 * Decision matrix grounded in playbook/TRADING-BIBLE.md §4.
 * Returns { bias: 'BUY'|'SELL'|'FLAT', explanation, cssClass }
 */
export const INVENTORY_OPTIONS = [
  { value: 'buyers_sitting', label: 'Buyers sitting' },
  { value: 'sellers_sitting', label: 'Sellers sitting' },
  { value: 'cleared', label: 'Cleared / holiday' },
  { value: 'unclear', label: 'Unclear / mixed' },
  { value: 'range', label: 'Range / shrinking momentum' },
];

export const OPEN_OPTIONS = [
  { value: 'solid_up', label: 'Gap-up (solid)' },
  { value: 'mild_up', label: 'Mild gap-up / flat-ish' },
  { value: 'flat_down', label: 'Flat / gap-down' },
  { value: 'large_down', label: 'Large gap-down' },
  { value: 'huge_up', label: 'Huge runaway gap-up' },
];

const MATRIX = {
  buyers_sitting: {
    solid_up: {
      bias: 'BUY',
      explanation:
        'Buyers sitting + solid gap-up → BUY with the market. Do not target those buyers (bible §4; 08-03).',
    },
    mild_up: {
      bias: 'SELL',
      explanation:
        'Buyers sitting + mild gap-up / soft open → SELL, target the sitting buyers (P8).',
    },
    flat_down: {
      bias: 'SELL',
      explanation:
        'Buyers sitting + flat / gap-down → SELL setups targeting buyers (07-28, 07-30, P8).',
    },
    large_down: {
      bias: 'BUY',
      explanation:
        'Buyers sitting + large gap-down → often BUY / follow; don’t hunt buyers into panic (§4).',
    },
    huge_up: {
      bias: 'FLAT',
      explanation:
        'Huge runaway gap-up → NO TRADE / avoid chase even if you wanted to sell buyers (P14).',
    },
  },
  sellers_sitting: {
    solid_up: {
      bias: 'SELL',
      explanation:
        'Sellers sitting + solid gap-up → temptation trap; often SELL late buyers (not a free long).',
    },
    mild_up: {
      bias: 'FLAT',
      explanation:
        'Sellers sitting + mild/fake-up → case-by-case; trap only if fake upside then resume sell. Default careful / wait for tape.',
    },
    flat_down: {
      bias: 'SELL',
      explanation:
        'Sellers sitting + flat / gap-down: sellers are more useful if the gap is large enough to put them in profit — otherwise plan may be weak (07-27).',
    },
    large_down: {
      bias: 'SELL',
      explanation: 'Sellers sitting + large gap-down → SELL / follow the market (§4).',
    },
    huge_up: {
      bias: 'FLAT',
      explanation:
        'Huge gap-up can force sellers to run → avoid that case (07-27 plan).',
    },
  },
  cleared: {
    solid_up: {
      bias: 'SELL',
      explanation:
        'Cleared / holiday inventory + gap-up → temptation-trap risk; often SELL late FOMO (P6, 07-27).',
    },
    mild_up: {
      bias: 'FLAT',
      explanation: 'Cleared inventory + mild open → careful; no automatic free trade (§4).',
    },
    flat_down: {
      bias: 'FLAT',
      explanation: 'Cleared inventory + flat/gap-down → often no clean plan (§4).',
    },
    large_down: {
      bias: 'BUY',
      explanation: 'Cleared + large gap-down → follow the market rather than invent inventory (§4).',
    },
    huge_up: {
      bias: 'FLAT',
      explanation: 'Huge runaway after cleared inventory → avoid chase (§4).',
    },
  },
  unclear: {
    solid_up: {
      bias: 'BUY',
      explanation:
        'Unclear / mixed + solid gap-up in a recovery/cover regime → BUY / follow what’s already happening (P11, 07-29).',
    },
    mild_up: {
      bias: 'BUY',
      explanation:
        'Unclear inventory → follow the active regime rather than invent a counter-trade (P11).',
    },
    flat_down: {
      bias: 'FLAT',
      explanation:
        'Unclear + flat/gap-down → follow what’s already happening, or no plan if sideways grind (§4, §10).',
    },
    large_down: {
      bias: 'SELL',
      explanation: 'Unclear + large gap-down → follow the open / active pressure (§4).',
    },
    huge_up: {
      bias: 'FLAT',
      explanation: 'Huge runaway with unclear inventory → avoid (§4, §10).',
    },
  },
  range: {
    solid_up: {
      bias: 'BUY',
      explanation:
        'Range / shrinking momentum + gap-up → BUY only if open momentum confirms; wait for tape (07-31).',
    },
    mild_up: {
      bias: 'FLAT',
      explanation: 'Range day + mild open → wait for first tape; don’t force before it speaks (§5).',
    },
    flat_down: {
      bias: 'FLAT',
      explanation: 'Range day + small gap-down → NO PLAN yet (07-31 pre).',
    },
    large_down: {
      bias: 'SELL',
      explanation:
        'Range + large gap-down: SELL only if buyers still sitting; large open sell is also a range warning for longs (P15).',
    },
    huge_up: {
      bias: 'FLAT',
      explanation: 'Huge runaway on a range map → avoid chase (§4).',
    },
  },
};

export function decide(inventory, openType) {
  const cell = MATRIX[inventory]?.[openType];
  if (!cell) {
    return {
      bias: 'FLAT',
      explanation: 'Missing matrix branch — default FLAT until inventory and open type are labeled.',
      cssClass: 'flat',
    };
  }
  return {
    ...cell,
    cssClass: cell.bias === 'BUY' ? 'buy' : cell.bias === 'SELL' ? 'sell' : 'flat',
  };
}

export function matrixHeaders() {
  return OPEN_OPTIONS.map((o) => o.label);
}

export function matrixRows() {
  return INVENTORY_OPTIONS.map((inv) => ({
    inventory: inv.label,
    cells: OPEN_OPTIONS.map((open) => {
      const d = decide(inv.value, open.value);
      return { bias: d.bias, open: open.value, inventory: inv.value };
    }),
  }));
}
