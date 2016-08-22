function ComputerUnitsToByte(capacity, unit) {
    if(capacity<1||capacity>100)
        {
            console.log("Failed");
            return;
        }
    var units = {
        'KB': 1024,
        'MB': 1048576,
        'G': 1073741824,
        'TB': 1099511627776,
        'P': 1125899906842624
    }
    if(!units[unit]){
            console.log("Failed");
            return;
        }
    return capacity*units[unit] + "";
}