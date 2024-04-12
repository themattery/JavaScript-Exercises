const show = require('./show.js')
 
const companies = [
    {
        name: "Amazon",
        founded: 1994,
        industry: "E-Commerce, Cloud",
    },
    {
        name: "Alphabet Inc.",
        founded: 2015,
        industry: "Search, Cloud, Advertising",
    },
    {
        name: "Facebook",
        founded: 2004,
        industry: "Social",
    },
    
]

for (const company of companies) {
    company.kind = "Internet company"
}

show(companies)

