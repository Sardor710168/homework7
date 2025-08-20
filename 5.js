const database = {
  studentsList: {
    'xamidullo': {
      name: "xamidullo",
      age: 33,
      id: 123,
      tolov: false
    }
  },

  create(user) {
    this.studentsList[user.name] = user
    return this.studentsList
  },

  read(name) {
    return this.studentsList[name] || "User topilmadi"
  },

  update(name, user) {
    if (this.studentsList[name]) {
      this.studentsList[name] = { ...this.studentsList[name], ...user }
      return this.studentsList[name]
    } else {
      return "User topilmadi"
    }
  },

  delete(name) {
    if (this.studentsList[name]) {
      delete this.studentsList[name]
      return `${name} o‘chirildi`
    } else {
      return "User topilmadi"
    }
  }
}


database.create({
  name: "xamidullo",
  age: 33,
  id: 123,
  tolov: false
})

database.update("xamidullo", {
  name: "azizbek",
  age: 21,
  tolov: true
})

database.delete("azizbek")

console.log(database.studentsList)
