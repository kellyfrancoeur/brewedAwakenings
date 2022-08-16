import { getEmployees, getOrders } from "./database.js"

const orders = getOrders ()
const employees = getEmployees()

// const employeeOrders = (employee) => {
//     const bishSoldSomeStuff = 0

//     for (const order of orders) {
//         if (order.employeeId === employee.id) {
//             bishSoldSomeStuff + (order.employeeId)
//         }
//     }

//     return bishSoldSomeStuff
// }

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            let bishSoldSomeStuff = 0
            let bish = ""
            for (const employeeBish of employees) {
                if (parseInt(employeeId) === employeeBish.id) {
                    bish = employeeBish.name
                }
            }
            for (const order of orders) {
                if (order.employeeId === parseInt(employeeId)){
                    bishSoldSomeStuff ++
                }
            }
                    window.alert(` ${bish} sold ${bishSoldSomeStuff} products `)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

