<script>
const tipcalcy = () = > {
    let amount = document.getElementById('bill_amount').value;
    alert(amount);
    let perc = document.getElementById('tip_perc').value;
    let tip = amount*(perc/100);
    let total = tip + Number(amount);
    alert(total);

    document.getElementById('tip_total').value = tip;
    document.getElementById('total_billed').value = total;
}
</script>