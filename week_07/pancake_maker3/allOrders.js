const orderContentContainerEle = document.getElementById(
  "order-content-container"
);

const getExistingOrders = () => {
  const stringifiedExistingOrders = localStorage.getItem("orders");

  if (stringifiedExistingOrders === null) {
    return [];
  }
  try {
    const parsedExistingOrders = JSON.parse(stringifiedExistingOrders);
    if (Array.isArray(parsedExistingOrders)) {
      return parsedExistingOrders;
    }
    return [];
  } catch (err) {
    return [];
  }
};

const getFormattedToppingsText = (toppingNameList) => {
  return toppingNameList.join(", ");
};

const getFormattedExtrasText = (extraList) => {
  return extraList.join(", ");
};

const generateOrderCardHtmlString = (order) => `
     <section class="order-card">
        <ul>
          <li>
            <label for="">Order Number:</label>
            <span class="value">${order.id}</span>
          </li>
          <li>
            <label for="">Customer Name:</label>
            <span class="value">${order.customerName}</span>
          </li>
          <li>
            <label for="">Selected Pancake:</label>
            <span class="value">${order.pancakeType}</span>
          </li>
          <li>
            <label for="">Toppings:</label>
            <span class="value">${getFormattedToppingsText(
              order.toppings
            )}</span>
          </li>
          <li>
            <label for="">Extras:</label>
            <span class="value">${getFormattedExtrasText(order.extras)}</span>
          </li>
          <li>
            <label for="">Delivery Method:</label>
            <span class="value">${order.deliveryMethod}</span>
          </li>
          <li>
            <label for="">Total Price:</label>
            <span class="value">${order.totalPrice}</span>
          </li>

          <li class="status-content-container">
            <label for="">Status:</label>
            <select onchange="handleStatusSelectChange(this)">
              <option value="waiting" ${
                order.status === "waiting" ? "selected" : ""
              }>Waiting</option>
              <option value="ready" ${
                order.status === "ready" ? "selected" : ""
              }>Ready</option>
              <option value="delivered" ${
                order.status === "delivered" ? "selected" : ""
              }>Delivered</option>
            </select>
            <div class="status-display ${order.status}"></div>
          </li>
        </ul>
      </section>`;

const handleStatusSelectChange = (selectElement) => {
  console.log(selectElement.value);
};

const getOrderCards = (orders) => {
  return orders.reduce((acc, curr) => {
    const orderCardHtmlString = generateOrderCardHtmlString(curr);

    acc += orderCardHtmlString;
    return acc;
  }, "");
};

window.addEventListener("DOMContentLoaded", () => {
  const existingOrders = getExistingOrders();
  console.log(existingOrders);

  const orderCardsHtmlString = getOrderCards(existingOrders);

  orderContentContainerEle.innerHTML = orderCardsHtmlString;
});
