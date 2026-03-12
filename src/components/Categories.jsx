

function Categories() {

  const categories = [
    {
      id: 1,
      title: "Electronics",
      image: "https://imgs.search.brave.com/GRYaTD1bmP5dxWWCB94NqU0D2ThiS6v-fXLNuuL0JPU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzI5LzMyLzE4/LzM2MF9GXzMyOTMy/MTg3M190V3BoWG5L/UUh3dFp6ajR4SFV2/RlJzbmFMNmNFb0x0/WC5qcGc"
    },
    {
      id: 2,
      title: "Fashion",
      image: "https://imgs.search.brave.com/TT6CNUPO0QAEtQ0AIkhVJvDsUNexaLn3RJXkCqKMpIk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/MzYxOTY4OC9waG90/by9uZXcteW9yay1u/ZXcteW9yay1rZW5k/YWxsLWplbm5lci1h/dHRlbmRzLXRoZS0y/MDI1LW1ldC1nYWxh/LWNlbGVicmF0aW5n/LXN1cGVyZmluZS10/YWlsb3JpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPS1K/QWJkSjFUYXNxalFZ/WmNhcERmamcxUTJl/YUtpanFhRXNjV09B/Z3dJU1E9"
    },
    {
      id: 3,
      title: "Accessories",
      image: "https://imgs.search.brave.com/vU8TjlpvVqw2RLW97AhZZ0yrkHSu4ERbDHrQIjJO9qo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE2NDU0/MTc0NTQtZmFiZTM2/OThmZTRhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZhdXRvPWZvcm1h/dCZmaXQ9Y3JvcCZp/eGxpYj1yYi00LjEu/MCZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE1UZDhm/R0ZqWTJWemMyOXlh/V1Z6ZkdWdWZEQjhm/REI4Zkh3dw"
    },
    {
      id: 4,
      title: "Shoes",
      image: "https://imgs.search.brave.com/pRdn57zMCIhT3P9RXpaqB-_nh8-MFmIW033XJMD7fu4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmlrZS5jb20v/YS9pbWFnZXMvd18x/MjgwLHFfYXV0byxm/X2F1dG8vcWs4eGV6/cml2cmtpa3R2cm43/YjYvd29tZW5zLWFp/ci1qb3JkYW4tMS1y/ZXRyby1oaWdoLXB1/cnBsZS1lYXJ0aC1y/ZWxlYXNlLWRhdGUu/anBn"
    }
  ]

  return (
    <section className="insane-categories">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="insane-title">
            Explore Our Categories
          </h2>
        </div>

        <div className="row g-4">

          {categories.map((cat) => (
            <div key={cat.id} className="col-6 col-md-4 col-lg-3">
              <div className="insane-card">

                <img
                  src={cat.image}
                  alt={cat.title}
                  className="insane-image"
                />

                <div className="insane-overlay">
                  <h5>{cat.title}</h5>
                  <button className="insane-btn">
                    Shop Now
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Categories
