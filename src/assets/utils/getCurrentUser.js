const getCurrrentUser = () => {
    return JSON.parse(localStorage.parse("currentUser"))
}

export default getCurrrentUser