CREATE DATABASE series;
USE series;
CREATE TABLE series
(
    id INT(11) NOT NULL
    AUTO_INCREMENT,
    name VARCHAR
    (150) DEFAULT NULL,
    seasons INT
    (3) DEFAULT NULL,
    PRIMARY KEY
    (id)
);

DESCRIBE series;

-- INSERT INTO series VALUES
--     ()
