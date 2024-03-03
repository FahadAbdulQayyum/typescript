// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirtt(size: number, text: string) {
    console.log("I love TypeScript.");
    if(size < 10){
        console.log(text + " having " + size + "m size which is small.");
    }else{
        console.log(text + " having " + size + "m size which is large.");
    }
}

make_shirtt(8, "Make a blue shirt");
make_shirtt(12, "Make a blue shirt");