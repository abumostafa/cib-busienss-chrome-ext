const removeNews = () => {
  const el = document.getElementById("DefaultContent")
  if (!el) return

  el.remove()


  setTimeout(() => {
    const mainContent = document.querySelectorAll(".maincontent")
    if (!mainContent || mainContent.length < 1) return

    const mainContentEl = mainContent.item(0)

    const colContainer = mainContentEl.querySelectorAll(".colContainer")
    if (!colContainer || !colContainer.length) return

    const colContainerEl = colContainer.item(0)
    console.log("colContainerEl", colContainerEl)

    colContainerEl.style["padding-top"] = "0"
  }, 1000)
}

const fixAccountSummaryWidth = () => {
  const id = "HomeAccountSummaryListPortlet"
  const el = document.getElementById(id)
  if (!el) return

  const body = document.getElementsByTagName("body").item(0)
  const style = document.createElement("style")
  setTimeout(() => {
    const width = el.offsetWidth-3

    style.textContent += `#${id} .dojoxGridContent,`
    style.textContent += `#${id} .dojoxGridRowTable,`
    style.textContent += `#${id} .dojoxGridHeader,`
    style.textContent += `#${id} .dojoxGridView`
    style.textContent += `{width: ${width}px !important;}`
    body.appendChild(style)
  }, 1000)
}

window.onload = () => {
  removeNews()
  fixAccountSummaryWidth()
}
