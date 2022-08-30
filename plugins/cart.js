export default function ({}, inject) {
   

  inject("formatMoney", (money) => {
    return new Intl.NumberFormat("en-US", {
      currency: "USD",
      style: "currency",
    }).format(money);
  });
}
