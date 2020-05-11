

class HD{
    static PENDING = "pending"
    static FUFILLED = "fufilled"
    static REJECT = "reject"
    constructor(excutor){
        this.status = HD.PENDING
        this.cbs = []
        this.this.value = null
        try{
            excutor(this.resolve.bind(HD),this.reject.bind(HD))
        }catch(error){
            this.reject(error)

        }
    }

    resolve(value){
        if(this.status === HD.PENDING){
            this.value = value
            this.status = HD.FUFILLED
            this.cbs.forEach((item)=>{
                setTimeout(() => {
                    item.fufilled(value)
                });
            })

        }
    }

    reject(reason){
        if(this.status === HD.PENDING){
            this.value= reason 
            this.status = HD.REJECT
            this.cbs.forEach(item=>{
                setTimeout(() => {
                 item.reject(reason)   
                });
            })
        }
       
    }

    then(onFufilled,onRejected){
        return new HD((resolve,reject)=>{
            if(this.status===HD.FUFILLED){
                try{
                    setTimeout(() => {
                       let res = onFufilled()
                        resolve(res) 
                    });
                }catch(error){
                    reject(error)
                }
                
            }
            if(this.status ===HD.REJECT){
                 try{
                    setTimeout(() => {
                       let res = onRejected()
                        reject(res) 
                    });
                }catch(error){

                }
            }
            if(this.status===HD.PENDING){
                this.arr.push({fufill:(value)=>{
                    try{
                        onFufilled(value)
                    }catch(error){
                        onRejected(error)
                    }
                },reject:(reason)=>{
                    try{
                        onRejected(reason)
                    }catch(error){
                        onRejected(error)
                    }
                }})
            }
        })
    }

}