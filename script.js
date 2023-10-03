let count = 10;
var time = document.createElement("time")
    setTimeout(()=>{
     time.innerHTML = count--},1000)
     setTimeout(()=>{
        time.innerHTML = count--},2000)
        setTimeout(()=>{
            time.innerHTML = count--},3000)
            setTimeout(()=>{
                time.innerHTML = count--},4000)
                setTimeout(()=>{
                    time.innerHTML = count--},5000)
                    setTimeout(()=>{
                        time.innerHTML = count--},6000)
                        setTimeout(()=>{
                            time.innerHTML = count--},7000)
                            setTimeout(()=>{
                                time.innerHTML = count--},8000)
                                setTimeout(()=>{
                                    time.innerHTML = count--},9000)
                                    setTimeout(()=>{
                                        time.innerHTML = "Happy Independence Day"},10000)
                                        document.body.append(time)
                                        
