CREATE DATABASE crud;

USE crud;

CREATE TABLE customers (
    customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    created_at timestamp NOT NULL DEFAULT current_timestamp
) ENGINE=InnoDB DEFAULT CHARSET=utf8;