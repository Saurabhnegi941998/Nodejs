module.exports =  middleWare = (res,req,next)=>{
    console.log('middleware install')
    next()
}