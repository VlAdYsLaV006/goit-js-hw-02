makeTransaction(quantity, pricePerDroid, customerCredits) {
    if (quantity, pricePerDroid <= customerCredits) {
        return "You ordered <quantity> droids worth <totalPrice> credits!";
    } else {
        return "Insufficient funds!";
    }
}