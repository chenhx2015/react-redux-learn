const increment = () => {
    return {
        type: 'INCREMENT_COUNTER'
    }
}
const decrement = () => {
    return {
        type: 'DECREMENT_COUNTER'
    }
}

//注意这里的写法 用模块的输出方式
module.exports = {
    increment,
    decrement
}


