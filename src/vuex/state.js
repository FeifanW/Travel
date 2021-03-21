let default_city = '北京'
try {
    if (localStorage.city) default_city=localStorage.city
}
catch (e) {}

const state = {
    city: default_city
}

export default state