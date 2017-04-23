<?php
	session_start();

	// if user is logging out, destroy session and redirect
	if(isset($_GET['change_name'])){
		$_SESSION['inputName'] = null;
		header('Location: ./landing.html');
	}

	// check if user is customizing
	if(isset($_POST['inputName'])){
		$_SESSION['inputName'] = $_POST['inputName'];
	}else{
		// check if already customized, otherwise redirect
		if(!isset($_SESSION['inputName'])){
			header('Location: ./landing.html');
		}
	}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Stock App</title>
		<!-- Because jQuery.... -->
		<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
		<!-- Because bootstrap -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
		<!-- And our stuff -->
		<link rel="stylesheet" type="text/css" href="stock.css">
		<script src="stock.js"></script>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="jumbotron">
					<h1><?php
					echo "Hello, " . $_SESSION['inputName'];
					?>&nbsp;<a style="font-size: medium; vertical-align: middle;" href='./stock.php?change_name=1'>[Not You?]</a></h1>
					<div class="col-lg-6">
						<div class="input-group">
							<input type="text" class="form-control" id="searchBar" placeholder="Search for...">
							<span class="input-group-btn">
								<button class="btn btn-default" id="searchButton" type="submit">Go!</button>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<!-- Enter things here -->
			</div>
			<div class="col-lg-6" id="stock" style="background-color: #EEE; border-radius: 5px; padding: 1em; display: none;">
				<h3 id="stockName"></h3>
				<div id="stockLastPrice"></div>
				<div id="stockChange"></div>
				<div id="stockChangePercent"></div>
				<div id="stockChangePercentYTD"></div>
				<div id="stockLastTraded"></div>
			</div>
		</div>
	</body>
</html>
