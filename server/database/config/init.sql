--   BUILT THIS FILE 
BEGIN;
DROP TABLE IF EXISTS USERS CASCADE ;
CREATE TABLE USERS(
    ID SERIAL PRIMARY KEY,
    NAME VARCHAR(100) NOT NULL,
    LOCATION VARCHAR(150) 
);
INSERT INTO USERS (NAME,LOCATION) VALUES
('Reem','palestine'),
('mohamed','gaza'),
('Ahmed','Nablus');
COMMIT;