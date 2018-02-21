// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var obj = {}, H, Q, D, N, P;
    var number = currency;
    if (currency <= 0)
        return {};
    if (currency >= 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    H =  Math.floor(number/50);
    number -= H*50;
    Q = Math.floor(number/25);
    number -= Q*25;
    D = Math.floor(number/10);
    number -= D*10;
    N = Math.floor(number/5);
    number -= N*5;
    P = Math.floor(number/1);
    if(H != 0)
        obj["H"] = H;
    if(Q != 0)
        obj["Q"] = Q;
    if(D != 0)
        obj["D"] = D;
    if(N != 0)
        obj["N"] = N;
    if(P != 0)
        obj["P"] = P;
    return obj;
}
