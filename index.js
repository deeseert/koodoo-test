const accountTypeChecker = (accountBalanceHistory) => {
  try {
    if(accountBalanceHistory.length < 2) throw new Error('A minimum of 3 entries are required');
    
    const amountList = accountBalanceHistory
      .sort((a, b) => a.monthNumber - b.monthNumber)
      .map((item) => item.account.balance.amount);
    
    const result = amountList.every((amount, i) => {
      return i === amountList.length - 1 || (amountList[1] - amountList[0]) + amount === amountList[i + 1];
    });
      
    return result ? 'A' : 'B';
    
  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }

};

module.exports = accountTypeChecker;