const mockTypeA = [{
  monthNumber: 0, // current month
  account: {
      balance: { amount: -100 },
    },
  },
  {
    monthNumber: 1, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 2, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 3, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
];

module.exports = mockTypeA;