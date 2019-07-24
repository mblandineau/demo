/* global instantsearch */

import { hitTemplate } from "./helpers";

const search = instantsearch({
  appId: "932LAAGOT3",
  apiKey: "6a187532e8e703464da52c20555c37cf",
  indexName: "atis-prods",
  searchParameters: {
    "query": "Nintendo",
    hitsPerPage: 24,
    attributesToSnippet: ["description:24"],
    snippetEllipsisText: " [...]",
  }
});

// Uncomment the following widget to add hits list.

  search.addWidget(
    instantsearch.widgets.hits({
      container: "#hits",
      templates: {
        empty: "No results.",
        item: function(hit) {
          return hitTemplate(hit);
        }
      }
    })
  );

// Uncomment the following widget to add search stats.

search.addWidget(
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      body(hit) {
        return `<div class="nav-title-wrapper"><div class="nav-title">${hit.query}</div></div> `;
      }
    }
  })
);

// Uncomment the following widget to add categories list.

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#categories",
    attributeName: "categories",
    autoHideContainer: false,
    templates: {
      header: "Categories"
    },
    cssClasses: {
      root: 'search-sidebar-item',
      list: [
        'search-sidebar-item-label'
      ]
    }
  })
);

// Uncomment the following widget to add pagination.

search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
);

search.start();
