const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')
const clear = document.getElementById('clear')

function calculate() {
  const currency_one = currencyEl_one.value;  
  const currency_two = currencyEl_two.value;  
  const amountOneVal = amountEl_one.value;
  const amountTwoVal = amountEl_two.value;
  fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`).
    then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
  })
  if (amountOneVal || amountOneVal) {
    clear.classList.add('show');
  } else {
    clear.classList.remove('show');
  }
}

currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)

clear.addEventListener('click', function () {
  amountEl_one.value = null;
  amountEl_two.value = null;
  clear.classList.remove('show');
});

swap.addEventListener('click', () => {
  const currencyTemp = currencyEl_one.value;
  const amountTemp = amountEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = currencyTemp;
  amountEl_one.value = amountEl_two.value;
  amountEl_two.value = amountTemp;
  calculate();
})
// calculate()