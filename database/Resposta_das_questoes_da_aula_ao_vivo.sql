--Trazer o usuario com maior número de denúcias
SELECT Users.Name
FROM Users
LEFT JOIN Reports ON Users.UserID = Reports.UserID
GROUP BY Users.Name
ORDER BY COUNT(Reports.UserID) DESC
LIMIT 1;

--Total de anexos
SELECT *
FROM Attachments;

--Número total de PDF's
SELECT COUNT(*) AS Total_PDF_Files
FROM Attachments
WHERE FileType = 'Document';

--Listar usuarios se o primeiro for Sofia
SELECT *
FROM Users
WHERE Name = 'Sofia';

--Total de comentários de Sofia
SELECT name AS User_Name, COUNT(Comments.CommentID) AS Total_Comments
FROM Users
LEFT JOIN Comments ON Users.UserID = Comments.UserID
WHERE Name = 'Sofia'
GROUP BY Name;

--Total de comentários de Pedro
SELECT name AS User_Name, COUNT(Comments.CommentID) AS Total_Comments
FROM Users
LEFT JOIN Comments ON Users.UserID = Comments.UserID
WHERE Name = 'Pedro'
GROUP BY Name;
