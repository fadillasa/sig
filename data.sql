CREATE TABLE hotel(
	 id serial PRIMARY KEY,
	 nama VARCHAR (100),
	 x double precision,
	 y double precision 
);

SELECT * FROM hotel;

INSERT INTO hotel(nama, x, y) VALUES ('Oakwood Hotel & Residence Surabaya', -7.280115, 112.781413);
INSERT INTO hotel(nama, x, y) VALUES ('Swiss-Belinn Manyar Surabaya', -7.280744, 112.770342);
INSERT INTO hotel(nama, x, y) VALUES ('Core Hotel Bonnet Surabaya', -7.279045, 112.765278);
INSERT INTO hotel(nama, x, y) VALUES ('Novotel Samator East Surabaya Hotel', -7.310535, 112.773437);
INSERT INTO hotel(nama, x, y) VALUES ('Hotel Dafam Pacific Caesar Surabaya', -7.258862, 112.782834);
INSERT INTO hotel(nama, x, y) VALUES ('MaxOne Hotel Dharmahusada', -7.267409, 112.771124);
INSERT INTO hotel(nama, x, y) VALUES ('Hotel Gunawangsa Manyar', -7.289968, 112.768845);
INSERT INTO hotel(nama, x, y) VALUES ('Hotel Evora Surabaya', -7.276005, 112.761866);
INSERT INTO hotel(nama, x, y) VALUES ('Hotel Sahid Surabaya', -7.266631, 112.751630);
INSERT INTO hotel(nama, x, y) VALUES ('HARRIS Hotel & Conventions Gubeng', -7.272634, 112.749431);
INSERT INTO hotel(nama, x, y) VALUES ('Hotel Majapahit Surabaya', -7.260172, 112.739601);
INSERT INTO hotel(nama, x, y) VALUES ('JW Marriott Hotel Surabaya', -7.259435, 112.734572);
INSERT INTO hotel(nama, x, y) VALUES ('Sheraton Surabaya Hotel & Towers', -7.262552, 112.738226);
INSERT INTO hotel(nama, x, y) VALUES ('Bumi Surabaya City Resort', -7.271073, 112.741174);
INSERT INTO hotel(nama, x, y) VALUES ('Shangri-La Hotel Surabaya', -7.290890, 112.715483);
INSERT INTO hotel(nama, x, y) VALUES ('Wyndham Surabaya', -7.267605, 112.741777);
INSERT INTO hotel(nama, x, y) VALUES ('Ascott Waterplace Surabaya', -7.291787, 112.672438);
INSERT INTO hotel(nama, x, y) VALUES ('Hotel Ciputra World Surabaya', -7.293642, 112.720265);
INSERT INTO hotel(nama, x, y) VALUES ('Four Points By Sheraton Surabaya', -7.261343, 112.738825);
INSERT INTO hotel(nama, x, y) VALUES ('Grand Mercure Surabaya City', -7.314246, 112.734918);

-- INSERT INTO hotel(nama, x, y) VALUES ('', ,);

SELECT * FROM hotel;