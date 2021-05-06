CREATE TABLE `Banking_System`.`Customer` ( `Name` TEXT NOT NULL , `Age` INT(3) NOT NULL , `Email` VARCHAR(40) NOT NULL , `CurrentBalance` INT NOT NULL );

INSERT INTO `Customer` (`Name`, `Age`, `Email`, `CurrentBalance`) VALUES ('Ashish Kumar', '22', 'ashish@xyz.com', '10000'), 
('Neha', '20', 'Neha@xyz.com', '50000'),
('AshenBlade', '21', 'ashenblade@xyz.com', '9000'),
('Mohitkishore', '22', 'Mohitkishore@xyz.com', '5000') ,
('Priyavardhan', '23', 'Priyavardhan@xyz.com', '5000') ,
('Aroma', '20', 'Aroma@xyz.com', '6000') ,
('Prastavna', '20', 'Prastavna@xyz.com', '7000') ,
('Junaisha', '20', 'Junaisha@xyz.com', '4000') ,
('AyushSatyam', '22', 'AyushSatyam@xyz.com', '3000') ,
('AdityaSahay', '23', 'AdityaSahay@xyz.com', '5000') 

ALTER TABLE Customer RENAME TO Customers;

UPDATE Customers SET CurrentBalance=CASE WHEN CurrentBalance IS NULL OR CurrentBalance='' THEN '300'  
ELSE CurrentBalance+'300' END WHERE Age=20; 

UPDATE 
    Customers 
SET 
    CurrentBalance = CurrentBalance - '300'
WHERE 
    Age = 20

    
UPDATE 
    Customers 
SET 
    CurrentBalance = CurrentBalance + '300'
WHERE 
    Age = 20