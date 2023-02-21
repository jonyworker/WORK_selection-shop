export default{
    showPercentage(product){
        console.log(product);
        if (product.market_price > 0) {
            let percent =   ((product.price * 10) / product.market_price).toFixed(1);
            console.log('percent',percent);
            if (parseInt(percent*10) === parseInt(Math.floor(percent)*10) ){
                return Math.floor(percent);
            }
            else {
                return percent;
            }
        
          } else {
            return "-";
          }
    }
}