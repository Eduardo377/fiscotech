**Modelo de Banco de Dados para um Projeto de Denúncias Fisco Tech:**

Vamos criar um banco de dados para o projeto "Fisco Tech" que inclui informações sobre usuários, denúncias, comentários e anexos.

1. **Tabela de Usuários:**

   - ID (Chave Primária)
   - Nome
   - Email
   - Senha (Hashed e Salteada)
   - Papel (por exemplo, Usuário Normal, Administrador)

2. **Tabela de Denúncias:**

   - ID (Chave Primária)
   - Título da Denúncia
   - Descrição da Denúncia
   - Data e Hora da Denúncia
   - Status (por exemplo, Enviada, Em Triagem, Resolvida)
   - ID do Usuário (Chave Estrangeira que se relaciona com a tabela de Usuários)

3. **Tabela de Comentários:**

   - ID (Chave Primária)
   - Texto do Comentário
   - Data e Hora do Comentário
   - ID do Usuário (Chave Estrangeira que se relaciona com a tabela de Usuários)
   - ID da Denúncia (Chave Estrangeira que se relaciona com a tabela de Denúncias)

4. **Tabela de Anexos:**

   - ID (Chave Primária)
   - Nome do Arquivo
   - Tipo de Arquivo (Imagem, Vídeo, Documento)
   - Caminho do Arquivo (ou URL se estiver armazenado externamente)
   - ID da Denúncia (Chave Estrangeira que se relaciona com a tabela de Denúncias)

```sql
-- Tabela de Usuários
CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255),
    Email VARCHAR(255) UNIQUE NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    Role ENUM('User', 'Admin') NOT NULL
);

-- Tabela de Denúncias
CREATE TABLE Reports (
    ReportID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    DateTimeSubmitted DATETIME DEFAULT CURRENT_TIMESTAMP,
    Status ENUM('Submitted', 'In Review', 'Resolved') DEFAULT 'Submitted',
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Tabela de Comentários
CREATE TABLE Comments (
    CommentID INT PRIMARY KEY AUTO_INCREMENT,
    CommentText TEXT NOT NULL,
    DateTimePosted DATETIME DEFAULT CURRENT_TIMESTAMP,
    UserID INT,
    ReportID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ReportID) REFERENCES Reports(ReportID)
);

-- Tabela de Anexos
CREATE TABLE Attachments (
    AttachmentID INT PRIMARY KEY AUTO_INCREMENT,
    FileName VARCHAR(255) NOT NULL,
    FileType ENUM('Image', 'Video', 'Document') NOT NULL,
    FilePath VARCHAR(255) NOT NULL,
    ReportID INT,
    FOREIGN KEY (ReportID) REFERENCES Reports(ReportID)
);
```

Neste código SQL:

- A tabela `Users` armazena informações sobre os usuários do sistema, incluindo seus nomes, emails, senhas (hashes), e papéis (funções).
- A tabela `Reports` é usada para armazenar informações sobre as denúncias, incluindo título, descrição, data/hora de submissão, status e a associação com o usuário que a fez.
- A tabela `Comments` permite que os usuários adicionem comentários às denúncias, com informações sobre o texto do comentário, data/hora e associação com o usuário e denúncia específicos.
- A tabela `Attachments` permite que os usuários anexem arquivos (por exemplo, imagens, vídeos, documentos) às denúncias. Ela armazena informações sobre o nome do arquivo, tipo de arquivo, caminho do arquivo e a denúncia relacionada.