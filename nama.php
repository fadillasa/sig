<?php
	$dbconn = pg_connect("host=localhost dbname=db_route_1 user=postgres password=fadillasa")
	or die('Could not connect: ' . pg_last_error());

	$hotel=$_GET['x1'];
	
	$query = "SELECT nama FROM hotel where id = $hotel";

	$result = pg_query($query) or die('Query failed: ' . pg_last_error());
	$nama = pg_fetch_array($result, null, PGSQL_ASSOC);
	$pos1 = $nama['nama'];

	echo $pos1;
