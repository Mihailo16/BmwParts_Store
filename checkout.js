const formatPrice = (value) =>
  new Intl.NumberFormat('sr-RS', { style: 'currency', currency: 'EUR' }).format(value)

const loadCartFromStorage = () => {
  const cartData = localStorage.getItem('bmwCart')
  if (!cartData) {
    return []
  }
  try {
    return JSON.parse(cartData)
  } catch {
    return []
  }
}

const loadProducts = () => {
  const productsData = localStorage.getItem('bmwProducts')
  if (!productsData) {
    return []
  }
  try {
    return JSON.parse(productsData)
  } catch {
    return []
  }
}

const renderCheckoutItems = () => {
  const cart = loadCartFromStorage()
  const products = loadProducts()
  const checkoutItemsEl = document.getElementById('checkoutItems')

  if (!cart.length) {
    checkoutItemsEl.innerHTML = '<p>Korpa je prazna. <a href="index.html">Vrati se na prodavnicu</a></p>'
    return
  }

  const cartItems = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id)
      if (!product) return null
      return { ...product, quantity: item.quantity }
    })
    .filter(Boolean)

  checkoutItemsEl.innerHTML = cartItems
    .map(
      (item) => `
        <div class="checkout-item">
          <div class="checkout-item-info">
            <h4>${item.name}</h4>
            <p>${item.model} • ${item.oem}</p>
            <span>Količina: ${item.quantity}</span>
          </div>
          <div class="checkout-item-price">
            ${formatPrice(item.price * item.quantity)}
          </div>
        </div>
      `,
    )
    .join('')

  let subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 15
  
  const discountData = localStorage.getItem('bmwDiscount')
  let discountPercent = 0
  let discountAmount = 0
  
  if (discountData) {
    try {
      const discount = JSON.parse(discountData)
      discountPercent = discount.percent || 0
      if (discountPercent > 0) {
        discountAmount = subtotal * (discountPercent / 100)
        subtotal = subtotal - discountAmount
      }
    } catch (e) {
      console.error('Greška pri učitavanju popusta:', e)
    }
  }
  
  const total = subtotal + shipping

  document.getElementById('subtotal').textContent = formatPrice(subtotal + discountAmount)
  if (discountPercent > 0) {
    const summaryEl = document.querySelector('.checkout-summary')
    const existingDiscount = summaryEl.querySelector('.discount-row')
    if (!existingDiscount) {
      const discountRow = document.createElement('div')
      discountRow.className = 'discount-row'
      discountRow.innerHTML = `
        <div>
          <p>Popust (${discountPercent}%)</p>
        </div>
        <div>
          <p>-${formatPrice(discountAmount)}</p>
        </div>
      `
      const subtotalEl = document.getElementById('subtotal').closest('.checkout-summary-row')
      subtotalEl.after(discountRow)
    } else {
      existingDiscount.innerHTML = `
        <div>
          <p>Popust (${discountPercent}%)</p>
        </div>
        <div>
          <p>-${formatPrice(discountAmount)}</p>
        </div>
      `
    }
  }
  document.getElementById('shipping').textContent = formatPrice(shipping)
  document.getElementById('total').textContent = formatPrice(total)
}

const handleSubmit = (event) => {
  event.preventDefault()

  const cart = loadCartFromStorage()
  if (!cart.length) {
    alert('Korpa je prazna!')
    return
  }

  const formData = new FormData(event.target)
  const orderData = {
    personalInfo: {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    },
    address: {
      address: formData.get('address'),
      city: formData.get('city'),
      postalCode: formData.get('postalCode'),
      country: formData.get('country'),
    },
    payment: formData.get('payment'),
    notes: formData.get('notes'),
    items: cart,
    timestamp: new Date().toISOString(),
  }

  const orders = JSON.parse(localStorage.getItem('bmwOrders') || '[]')
  orders.push(orderData)
  localStorage.setItem('bmwOrders', JSON.stringify(orders))

  localStorage.removeItem('bmwCart')

  alert(
    `Hvala na porudžbini, ${orderData.personalInfo.firstName}!\n\nPorudžbina je primljena i biće obrađena u najkraćem roku. Kontaktiraćemo te na email: ${orderData.personalInfo.email}`,
  )

  window.location.href = 'index.html'
}

const init = () => {
  renderCheckoutItems()

  const form = document.getElementById('checkoutForm')
  form.addEventListener('submit', handleSubmit)

  const cart = loadCartFromStorage()
  if (!cart.length) {
    setTimeout(() => {
      window.location.href = 'index.html'
    }, 2000)
  }
}

init()

