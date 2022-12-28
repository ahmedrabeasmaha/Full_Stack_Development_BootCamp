<?php
function getPriceAfterDiscount($price, $discount)
{
    return (float) $price - ((float) $price * (float) $discount);
}