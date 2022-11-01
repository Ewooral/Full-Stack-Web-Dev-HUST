/**
 * PROTOTYPAL NATURE
 * There are no classes in JS because objects inherit
 * directly from other objects, which is called inheritance.
 * There are few types of inheritance patterns in JS:
 * - Classical
 * - Pseudoclassical 
 * - Functional
 * 
 */


// FUNCTIONAL INHERITANCE

let User = function (ops) {
    return {
        firstName: ops.firstName || 'John',
        lastName: ops.lastName || 'Doe',
        email: ops.email || 'test@test.com',
        name: function() {return this.firstName + this.lastName}
    }
}

console.log(User({}))


let agency = function (ops) {
    ops = ops || {}
    var agency = User(ops)
    agency.customers = ops.customers || 0
    agency.isAgency = true
    return agency 
}

console.log(agency())



// CLASSICAL INHERITANCE
class baseModel {
    constructor(options = {}, data = []) {
        this.name = 'Base'
        this.data = data
        this.options = options
    }

    getName() {
        console.log(`Class name: ${this.name}`)
    }
}