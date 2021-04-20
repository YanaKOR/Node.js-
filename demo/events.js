const { on } = require('events')
const EventEmmiter= require('events')
const emmiter = new EventEmmiter()
emmiter.on('anything', data=>{
    console.log('on: anything',data)
})
emmiter.emit('anything',{a:1})
emmiter.emit('anything',{a:2})
setTimeout(()=>{
emmiter.emit('anything',{c:3})
},1000)

class Dispatcher extends EventEmmiter{
    subcribe(eventName,cb){
        console.log('[Subcribe...]')
        this.on(eventName,cb)
    }
dispatch(eventName,data){
   console.log('[Dispatching...]') 
   this.emit(eventName,data)
}
}
const dis= new Dispatcher()
dis.subcribe('aa',data =>{
    console.log('on:aa',data)
})
dis.dispatch("aa",{aa:22})