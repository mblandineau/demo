// Oliver to work on this
export function hitTemplate(hit) {
  return `
    <div class="hit">
      <div class="hit-image">
        <img src="${hit.largeImage}" />
      </div>
      <div class="hit-content">
        <div>
          <div class="hit-name"><p>${hit._highlightResult.title.value}</p></div>
        </div>
        <div class="hit-brand">
          <span>Nintendo</span>
        </div>
        <div class="hit-price"><span>$${hit.price}</span></div>
        <div class="add-to-cart">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  `;
}
