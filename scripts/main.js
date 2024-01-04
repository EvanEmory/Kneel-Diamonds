import { metalOptions } from './MetalOptions.js'
import { sizeOptions } from './SizeOptions.js'
import { styleOptions } from './StyleOptions.js'
import { saveOrder } from './PlaceOrders.js'
import { OrderList } from './orders.js'
const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await metalOptions()
    const sizeOptionHTML = await sizeOptions()
    const styleOptionHTML = await styleOptions()
    const orderButton = await saveOrder()
    const listOrders = await OrderList()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionHTML}
            </section>
            <section>${orderButton}</section>
        </article>

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            <section>${listOrders}</section>
        </article>
    `

    container.innerHTML = composedHTML
}

render()

