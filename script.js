var rating = 0;


document.querySelectorAll('.rating').forEach(item => {
  item.addEventListener('click', event => {
    document.querySelectorAll('.rating').forEach(item => {
      item.classList.remove('active');
    });
    item.classList.add('active');
    document.querySelector('h4').innerHTML = `You selected ${item.value} out of 5`;
  })
})


document.getElementById('submit').addEventListener('click', event => {
  document.querySelector('.container').classList.add('hide');
  document.querySelector('.container-thanks').classList.remove('hide');
})



