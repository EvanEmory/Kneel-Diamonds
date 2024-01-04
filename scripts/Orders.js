export const OrderList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await response.json()
    
    // Iterate the submissions and create some <section> representations
    let orderHTML = ""
    for (const order of orders) {
        const orderPrice = order.metal.price + order.style.price + order.size.price
        orderHTML += `<section>
        
        <div>Order # ${order.id} Cost $${orderPrice}</div>
        </section>`
    }
    return orderHTML
    // Return the HTML string
}