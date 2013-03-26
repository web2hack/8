<?php
$fh = fopen("file.txt", 'a+');
fwrite($fh,$_GET["txt"]);
fwrite($fh,"\r\n");
fclose($fh);
?>
