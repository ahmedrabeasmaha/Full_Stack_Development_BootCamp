<?php
function getStars($count, $stars)
{
    if ((float) $count <= (float) $stars) {
        return 'fa fa-star text-primary mr-1';
    } else if ((float) $count <= (float) $stars + 0.5) {
        return 'fa fa-star-half-alt text-primary mr-1';
    } else {
        return 'far fa-star text-primary mr-1';
    }
}