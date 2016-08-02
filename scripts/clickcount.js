function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
     if (qty >= 3) {
          console.log("balls");
         }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}
