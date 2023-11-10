    const dia = (value) => {
        
        for (i = 1; i < value.length; i++) {
            console.log("ID      : ", value[i][0]);
            console.log("NAMA    : ", value[i][1]);
            console.log("COMPANY : ", value[i][2]);
            console.log("\n");
        }
    }

var NestedArray = [
    [1, "Mark Juckerberg", "Facebook"],
    [2, "Steve Job", "Apple"],
    [3, "Bill Gates", "Microsoft"],
    [4, "Elon Musk", "Tesla"]
]
dia(NestedArray)