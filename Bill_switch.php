<html>
    <body>
        <?php

    $unit=450;
        
        switch($unit)
        {
            case($unit<=300):
                echo "Per Unit 5tk <br>";
                 $total=$unit*5;
                    echo "Total: $total";
                 break;

            case($unit>300 && $unit<=400):
               
                echo "Per Unit 7tk<br>";
                $total=$unit*7;
                echo "Total: $total";
                break;

            case($unit>400 && $unit<=500):
               
                echo "Per Unit 10tk<br>";
                $total=$unit*10;
                echo "Total: $total";
                break;
    
            default:
            echo "Per Unit 15tk<br>";
            $total=$unit*15;
            echo "Total: $total";

        }

        ?>

    </body>

    </html>