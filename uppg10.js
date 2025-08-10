function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

  
    function sortNumbers(numbers) {
      const bigEven = [];
      const smallOdd = [];
      const other = [];
  
      for (let num of numbers) {
          if (num > 10 && num % 2 === 0) {
              bigEven.push(num);
          } else if (num < 10 && num % 2 !== 0) {
              smallOdd.push(num);
          } else {
              other.push(num);
          }
      }
  
      return { bigEven, smallOdd, other };
  }
  
  // Exempelanrop
  const result = sortNumbers([2, 5, 12, 15, 8, 23, 9, 10]);
  console.log(result);
  
  }
  
  module.exports = { uppg10 };
  