# NET-A-PORTER DASHBOARD

### MERN (MongoDB, Express, React, NodeJS) Stack app
---
There are approximately 5K products in the data-file -- dataset [(~35 MB](https://greendeck-datasets-2.s3.amazonaws.com/netaporter_gb_similar.json)

---

### Implemented Filters 

- Filter-1:

```
{
    filters: [
        { key: 'discount', value: 10, operator: 'greater_than' }
    ]
}
```

- Filter-2: 

```
{
    filters: [
        { key: 'brand', value: 'nike', operator: 'contains' }
    ]
}
```

- Filter-3 
 
```
{
    filters: [
        { key: 'stock_available', value: true, operator: 'equals' }
    ]
}
```
- Filter-4

```
{
    filters: [
        { key: 'created_at', value: ['10 April, 2020', '20 April, 2020'], operator: 'between' }
    ]
}
```
---
### Author
- Rajendra Prajapat(raj.int.pra@gmail.com)
---
### About the theme for frontend
- To complete this project I used light-bootstrap-dashboard-react theme by [Creative tim](http://www.creative-tim.com/product/light-bootstrap-dashboard-react)

