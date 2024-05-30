const { sum } = require("../sum")


test("This should check the sum functiont that would return the sum of the two numbers",
()=>{
    expect(sum(2,3)).toBe(5)
}
)