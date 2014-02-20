<?php
/**
 * web home page access point
 * @author wesley zhang <wesley_zh@163.com>
 * @since 2014-2-17 20:56:59
 */
showSmarty ();

function showSmarty() {
	date_default_timezone_set('UTC');//need set timezone otherwise smarty will report error
	require_once 'thirdparty/Smarty-3.1.16/libs/Smarty.class.php';
	
	$smarty = new Smarty ();
	$smarty->left_delimiter = '<{';
	$smarty->right_delimiter = '}>';
	$smarty->setTemplateDir('layout/');
    $smarty->display('index.html');
}
//echo strftime("%Y-%m-%d %H:%M:%S");