--Tabela de Usuários
 
CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    PASSWORD VARCHAR(22) NOT NULL,
    Role VARCHAR(10) CHECK (Role IN ('User', 'Admin')) NOT NULL
);

 --Tabela de Denúncias

CREATE TABLE Reports (
    ReportID SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT NOT NULL,
    DateTimeSubmitted TIMESTAMPTZ DEFAULT NOW(),
    Status VARCHAR(20) CHECK (Status IN ('Submitted', 'In Review', 'Resolved')) DEFAULT 'Submitted',
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

 --Tabela de Comentários

CREATE TABLE Comments (
    CommentID SERIAL PRIMARY KEY,
    CommentText TEXT NOT NULL,
    DateTimePosted TIMESTAMPTZ DEFAULT NOW(),
    UserID INT,
    ReportID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ReportID) REFERENCES Reports(ReportID)
);

 --Tabela de Anexos

CREATE TABLE Attachments (
    AttachmentID SERIAL PRIMARY KEY,
    FileName VARCHAR(255) NOT NULL,
    FileType VARCHAR(10) CHECK (FileType IN ('Image', 'Video', 'Document')) NOT NULL,
    FilePath VARCHAR(255) NOT NULL,
    ReportID INT,
    FOREIGN KEY (ReportID) REFERENCES Reports(ReportID)
);

-- Geração de 10 usuários fictícios
INSERT INTO Users (Name, Email, password, Role)
VALUES
    ('Usuário 1', 'usuario1@example.com', 'senha1', 'User'),
    ('Usuário 2', 'usuario2@example.com', 'senha2', 'User'),
    ('Usuário 3', 'usuario3@example.com', 'senha3', 'User'),
    ('Usuário 4', 'usuario4@example.com', 'senha4', 'User'),
    ('Usuário 5', 'usuario5@example.com', 'senha5', 'User'),
    ('Usuário 6', 'usuario6@example.com', 'senha6', 'User'),
    ('Usuário 7', 'usuario7@example.com', 'senha7', 'User'),
    ('Usuário 8', 'usuario8@example.com', 'senha8', 'User'),
    ('Usuário 9', 'usuario9@example.com', 'senha9', 'User'),
    ('Usuário 10', 'usuario10@example.com', 'senha10', 'User');

SELECT * from users;

-- Geração de 10 denúncias fictícias relacionadas a diferentes usuários
INSERT INTO Reports on REPLACE (Title, Description, UserID)
VALUES
    ('Denúncia 1', 'Descrição da denúncia 1', 1),
    ('Denúncia 2', 'Descrição da denúncia 2', 2),
    ('Denúncia 3', 'Descrição da denúncia 3', 3),
    ('Denúncia 4', 'Descrição da denúncia 4', 4),
    ('Denúncia 5', 'Descrição da denúncia 5', 5),
    ('Denúncia 6', 'Descrição da denúncia 6', 6),
    ('Denúncia 7', 'Descrição da denúncia 7', 7),
    ('Denúncia 8', 'Descrição da denúncia 8', 8),
    ('Denúncia 9', 'Descrição da denúncia 9', 9),
    ('Denúncia 10', 'Descrição da denúncia 10', 10);

SELECT * from reports;

-- Geração de 30 comentários fictícios relacionados a diferentes denúncias e usuários
INSERT INTO Comments (CommentText, UserID, ReportID)
VALUES
    ('Comentário 1 sobre Denúncia 1', 1, 1),
    ('Comentário 2 sobre Denúncia 1', 2, 1),
    ('Comentário 1 sobre Denúncia 2', 3, 2),
    ('Comentário 2 sobre Denúncia 2', 4, 2),
    ('Comentário 1 sobre Denúncia 3', 5, 3),
    ('Comentário 2 sobre Denúncia 3', 6, 3),
    ('Comentário 1 sobre Denúncia 4', 7, 4),
    ('Comentário 2 sobre Denúncia 4', 8, 4),
    ('Comentário 1 sobre Denúncia 5', 9, 5),
    ('Comentário 2 sobre Denúncia 5', 10, 5),
    ('Comentário 3 sobre Denúncia 1', 3, 1),
    ('Comentário 4 sobre Denúncia 1', 4, 1),
    ('Comentário 3 sobre Denúncia 2', 5, 2),
    ('Comentário 4 sobre Denúncia 2', 6, 2),
    ('Comentário 3 sobre Denúncia 3', 7, 3),
    ('Comentário 4 sobre Denúncia 3', 8, 3),
    ('Comentário 3 sobre Denúncia 4', 9, 4),
    ('Comentário 4 sobre Denúncia 4', 10, 4),
    ('Comentário 3 sobre Denúncia 5', 1, 5),
    ('Comentário 4 sobre Denúncia 5', 2, 5),
    ('Comentário 3 sobre Denúncia 6', 3, 6),
    ('Comentário 4 sobre Denúncia 6', 4, 6),
    ('Comentário 3 sobre Denúncia 7', 5, 7),
    ('Comentário 4 sobre Denúncia 7', 6, 7),
    ('Comentário 3 sobre Denúncia 8', 7, 8),
    ('Comentário 4 sobre Denúncia 8', 8, 8),
    ('Comentário 3 sobre Denúncia 9', 9, 9),
    ('Comentário 4 sobre Denúncia 9', 10, 9),
    ('Comentário 3 sobre Denúncia 10', 1, 10),
    ('Comentário 4 sobre Denúncia 10', 2, 10);
	
SELECT * from comments;

-- Geração de 10 anexos fictícios relacionados a diferentes denúncias
INSERT INTO Attachments (FileName, FileType, FilePath, ReportID)
VALUES
    ('anexo1.jpg', 'Image', '/path/to/anexo1.jpg', 1),
    ('anexo2.pdf', 'Document', '/path/to/anexo2.pdf', 2),
    ('anexo3.mp4', 'Video', '/path/to/anexo3.mp4', 3),
    ('anexo4.jpg', 'Image', '/path/to/anexo4.jpg', 4),
    ('anexo5.pdf', 'Document', '/path/to/anexo5.pdf', 5),
    ('anexo6.mp4', 'Video', '/path/to/anexo6.mp4', 6),
    ('anexo7.jpg', 'Image', '/path/to/anexo7.jpg', 7),
    ('anexo8.pdf', 'Document', '/path/to/anexo8.pdf', 8),
    ('anexo9.mp4', 'Video', '/path/to/anexo9.mp4', 9),
    ('anexo10.jpg', 'Image', '/path/to/anexo10.jpg', 10);

SELECT * from attachments;

ALTER TABLE Users
RENAME COLUMN senha TO PASSWORD;

SELECT users.name, reports.title, reports.description, reports.status
FROM reports
INNER JOIN users ON users.userid = reports.reportid;

SELECT u.name, r.title, r.description, r.status, c.commenttext
FROM comments AS c
INNER JOIN users AS u ON c.userid = u.userid
INNER JOIN reports AS r ON c.reportid = r.reportid;