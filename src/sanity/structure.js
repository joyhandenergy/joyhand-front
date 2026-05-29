// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('JoyHand Content')
    .items([
      S.listItem()
        .title('Products by Category')
        .child(
          S.list()
            .title('Product Categories')
            .items([
              S.listItem()
                .title('Storage Batteries')
                .child(S.documentList().title('Storage Batteries').filter('_type == "product" && category == "battery"').apiVersion('v2024-05-28')),
              S.listItem()
                .title('Solar Inverters')
                .child(S.documentList().title('Solar Inverters').filter('_type == "product" && category == "inverter"').apiVersion('v2024-05-28')),
              S.listItem()
                .title('Portable Power Stations')
                .child(S.documentList().title('Portable Power Stations').filter('_type == "product" && category == "portable-power"').apiVersion('v2024-05-28')),
              S.listItem()
                .title('Power Banks')
                .child(S.documentList().title('Power Banks').filter('_type == "product" && category == "power-bank"').apiVersion('v2024-05-28')),
              S.listItem()
                .title('E-Mobility')
                .child(S.documentList().title('E-Mobility').filter('_type == "product" && category == "electric-mobility"').apiVersion('v2024-05-28')),
              S.listItem()
                .title('Tech & Solar Accessories')
                .child(S.documentList().title('Tech & Solar Accessories').filter('_type == "product" && category == "accessories"').apiVersion('v2024-05-28')),
              S.divider(),
              S.listItem()
                .title('All Products')
                .child(S.documentTypeList('product').title('All Products')),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Blog Content')
        .child(
          S.list()
            .title('Blog Content')
            .items([
              S.documentTypeListItem('post').title('Blog Posts'),
              S.documentTypeListItem('category').title('Blog Categories'),
              S.documentTypeListItem('author').title('Blog Authors'),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', 'product'].includes(item.getId()),
      ),
    ])
