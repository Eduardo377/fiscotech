--Tabela de Usuários
 
CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    PASSWORD VARCHAR(22) NOT NULL,
    Role VARCHAR(10) CHECK (Role IN ('User', 'Admin')) NOT NULL,
    nationality VARCHAR(255) NOT NULL,
    language VARCHAR(50) NOT NULL,
    income DECIMAL(10, 2) NOT NULL,
    address VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
);

 --Tabela de Denúncias

CREATE TABLE Reports (
    ReportID SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT NOT NULL,
    address VARCHAR(255) NOT NULL,
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
INSERT INTO Users (Name, Email, PASSWORD, Role, nationality, language, income, address, country)
VALUES
    ('João', 'joao@email.com', 'hashed_password', 'User', 'Brasil', 'Português', 50000.00, 'Rua A, 123', 'Brazil'),
    ('Maria', 'maria@email.com', 'hashed_password', 'User', 'Brasil', 'Português', 60000.00, 'Avenida B, 456', 'Brazil'),
    ('Pedro', 'pedro@email.com', 'hashed_password', 'User', 'Brasil', 'Português', 40000.00, 'Rua X, 789', 'Brazil'),
    ('Ana', 'ana@email.com', 'hashed_password', 'User', 'Brasil', 'Português', 55000.00, 'Rua Y, 1011', 'Brazil'),
    ('Carlos', 'carlos@email.com', 'hashed_password', 'User', 'Brasil', 'Português', 48000.00, 'Avenida Z, 1213', 'Brazil'),
    ('Mariana', 'mariana@email.com', 'hashed_password', 'User', 'Brasil', 'Português', 52000.00, 'Avenida C, 1415', 'Brazil'),
    ('Lucas', 'lucas@email.com', 'hashed_password', 'User', 'Brasil', 'Português', 62000.00, 'Rua D, 1617', 'Brazil'),
    ('Lara', 'lara@email.com', 'hashed_password', 'User', 'Brasil', 'Português', 54000.00, 'Rua E, 1819', 'Brazil'),
    ('Rafael', 'rafael@email.com', 'hashed_password', 'User', 'Brasil', 'Português', 75000.00, 'Rua F, 2021', 'Brazil'),
    ('Sofia', 'sofia@email.com', 'hashed_password', 'User', 'Brasil', 'Português', 70000.00, 'Avenida G, 2223', 'Brazil');

SELECT * from users;

-- Geração de 10 denúncias fictícias relacionadas a diferentes usuários
INSERT INTO Reports (Title, Description, address, UserID)
VALUES
    ('Denúncia 1', 'Descrição da denúncia 1', 'Local da denúncia 1', 1),
    ('Denúncia 2', 'Descrição da denúncia 2', 'Local da denúncia 2', 2),
    ('Denúncia 3', 'Descrição da denúncia 3', 'Local da denúncia 3', 3),
    ('Denúncia 4', 'Descrição da denúncia 4', 'Local da denúncia 4', 4),
    ('Denúncia 5', 'Descrição da denúncia 5', 'Local da denúncia 5', 5),
    ('Denúncia 6', 'Descrição da denúncia 6', 'Local da denúncia 6', 6),
    ('Denúncia 7', 'Descrição da denúncia 7', 'Local da denúncia 7', 7),
    ('Denúncia 8', 'Descrição da denúncia 8', 'Local da denúncia 8', 8),
    ('Denúncia 9', 'Descrição da denúncia 9', 'Local da denúncia 9', 9),
    ('Denúncia 10', 'Descrição da denúncia 10', 'Local da denúncia 10', 10),
    ('Denúncia 11', 'Descrição da denúncia 11', 'Local da denúncia 11', 1),
    ('Denúncia 12', 'Descrição da denúncia 12', 'Local da denúncia 12', 2),
    ('Denúncia 13', 'Descrição da denúncia 13', 'Local da denúncia 13', 3),
    ('Denúncia 14', 'Descrição da denúncia 14', 'Local da denúncia 14', 4),
    ('Denúncia 15', 'Descrição da denúncia 15', 'Local da denúncia 15', 5),
    ('Denúncia 16', 'Descrição da denúncia 16', 'Local da denúncia 16', 6),
    ('Denúncia 17', 'Descrição da denúncia 17', 'Local da denúncia 17', 7),
    ('Denúncia 18', 'Descrição da denúncia 18', 'Local da denúncia 18', 8),
    ('Denúncia 19', 'Descrição da denúncia 19', 'Local da denúncia 19', 9),
    ('Denúncia 20', 'Descrição da denúncia 20', 'Local da denúncia 20', 10);


SELECT * from reports;

-- Geração de 30 comentários fictícios relacionados a diferentes denúncias e usuários
INSERT INTO Comments (CommentText, UserID, ReportID)
VALUES
INSERT INTO Comments (CommentText, UserID, ReportID)
VALUES
    ('Comentário 1', 1, 1),
    ('Comentário 2', 2, 1),
    ('Comentário 3', 3, 1),
    ('Comentário 4', 4, 2),
    ('Comentário 5', 5, 2),
    ('Comentário 6', 6, 2),
    ('Comentário 7', 7, 3),
    ('Comentário 8', 8, 3),
    ('Comentário 9', 9, 3),
    ('Comentário 10', 10, 4),
    ('Comentário 11', 1, 4),
    ('Comentário 12', 2, 5),
    ('Comentário 13', 3, 5),
    ('Comentário 14', 4, 6),
    ('Comentário 15', 5, 6),
    ('Comentário 16', 6, 7),
    ('Comentário 17', 7, 7),
    ('Comentário 18', 8, 8),
    ('Comentário 19', 9, 9),
    ('Comentário 20', 10, 10),
    ('Comentário 21', 1, 11),
    ('Comentário 22', 2, 11),
    ('Comentário 23', 3, 12),
    ('Comentário 24', 4, 12),
    ('Comentário 25', 5, 13),
    ('Comentário 26', 6, 13),
    ('Comentário 27', 7, 14),
    ('Comentário 28', 8, 14),
    ('Comentário 29', 9, 15),
    ('Comentário 30', 10, 15);

	
SELECT * from comments;

-- Geração de 10 anexos fictícios relacionados a diferentes denúncias
INSERT INTO Attachments (FileName, FileType, FilePath, ReportID)
VALUES
    ('Anexo1.jpg', 'Image', 'caminho/do/anexo1.jpg', 1),
    ('Anexo2.jpg', 'Image', 'caminho/do/anexo2.jpg', 2),
    ('Anexo3.mp4', 'Video', 'caminho/do/anexo3.mp4', 3),
    ('Anexo4.pdf', 'Document', 'caminho/do/anexo4.pdf', 4),
    ('Anexo5.jpg', 'Image', 'caminho/do/anexo5.jpg', 5),
    ('Anexo6.jpg', 'Image', 'caminho/do/anexo6.jpg', 6),
    ('Anexo7.mp4', 'Video', 'caminho/do/anexo7.mp4', 7),
    ('Anexo8.pdf', 'Document', 'caminho/do/anexo8.pdf', 8),
    ('Anexo9.jpg', 'Image', 'caminho/do/anexo9.jpg', 9),
    ('Anexo10.jpg', 'Image', 'caminho/do/anexo10.jpg', 10),
    ('Anexo11.mp4', 'Video', 'caminho/do/anexo11.mp4', 11),
    ('Anexo12.pdf', 'Document', 'caminho/do/anexo12.pdf', 12),
    ('Anexo13.jpg', 'Image', 'caminho/do/anexo13.jpg', 13),
    ('Anexo14.jpg', 'Image', 'caminho/do/anexo14.jpg', 14),
    ('Anexo15.mp4', 'Video', 'caminho/do/anexo15.mp4', 15),
    ('Anexo16.pdf', 'Document', 'caminho/do/anexo16.pdf', 16),
    ('Anexo17.jpg', 'Image', 'caminho/do/anexo17.jpg', 17),
    ('Anexo18.jpg', 'Image', 'caminho/do/anexo18.jpg', 18),
    ('Anexo19.mp4', 'Video', 'caminho/do/anexo19.mp4', 19),
    ('Anexo20.pdf', 'Document', 'caminho/do/anexo20.pdf', 20);


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

SELECT * FROM users;

