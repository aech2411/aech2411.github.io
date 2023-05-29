<?php
$tags = @get_meta_tags('https://'.
$_REQUEST['url']);
$result = $tags['keywords'];
if(strlen($result) > 0) {
    echo $result;
}else {
    echo "No keywords metatag is available.";
}
?>