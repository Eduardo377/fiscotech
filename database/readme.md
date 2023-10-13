**Modelo de Banco de Dados para um Projeto de Denúncias Fisco Tech:**

Banco de dados para o projeto "Fisco Tech" que inclui informações sobre usuários, denúncias, comentários e anexos.

Claro, vou explicar cada uma das tabelas criadas no esquema:

1. **Tabela de Usuários (Users):**
   - `UserID`: Esta é a chave primária da tabela e é gerada automaticamente como uma sequência SERIAL. Ela identifica exclusivamente cada usuário.
   - `Name`: Armazena o nome do usuário.
   - `Email`: Armazena o endereço de e-mail do usuário, que deve ser único e não nulo.
   - `senha`: Armazena o hash da senha do usuário para fins de autenticação.
   - `Role`: Define a função do usuário no sistema, podendo ser 'User' (usuário comum) ou 'Admin' (administrador). Este campo é validado com uma restrição CHECK.
        - Relação "Um para Muitos" com a tabela "Reports":
            - Um usuário pode criar várias denúncias, mas cada denúncia é criada por apenas um usuário.

2. **Tabela de Denúncias (Reports):**
   - `ReportID`: É a chave primária da tabela e é gerada automaticamente como uma sequência SERIAL. Ela identifica exclusivamente cada denúncia.
   - `Title`: Armazena o título da denúncia.
   - `Description`: Armazena a descrição detalhada da denúncia em formato de texto.
   - `DateTimeSubmitted`: Armazena a data e a hora em que a denúncia foi submetida, usando o tipo TIMESTAMPTZ (com suporte a fuso horário) e definida como o valor padrão NOW() para registrar automaticamente o momento da submissão.
   - `Status`: Define o status da denúncia, que pode ser 'Submitted' (submetida), 'In Review' (em revisão) ou 'Resolved' (resolvida). Este campo é validado com uma restrição CHECK.
   - `UserID`: Esta coluna está relacionada com a tabela "Users" usando uma chave estrangeira, indicando qual usuário fez a denúncia.
        - Relação "Muitos para Um" com a tabela "Users":
            - Várias denúncias podem estar associadas a um único usuário que as criou.

        - Relação "Um para Muitos" com a tabela "Comments":
            - Uma denúncia pode ter vários comentários, mas cada comentário pertence a apenas uma denúncia.

        - Relação "Um para Muitos" com a tabela "Attachments":
            - Uma denúncia pode ter vários anexos, mas cada anexo pertence a apenas uma denúncia.


3. **Tabela de Comentários (Comments):**
   - `CommentID`: Esta é a chave primária da tabela e é gerada automaticamente como uma sequência SERIAL. Ela identifica exclusivamente cada comentário.
   - `CommentText`: Armazena o texto do comentário.
   - `DateTimePosted`: Armazena a data e a hora em que o comentário foi postado, usando o tipo TIMESTAMPTZ (com suporte a fuso horário) e definida como o valor padrão NOW() para registrar automaticamente o momento da postagem.
   - `UserID`: Esta coluna está relacionada com a tabela "Users" usando uma chave estrangeira, indicando qual usuário fez o comentário.
   - `ReportID`: Esta coluna está relacionada com a tabela "Reports" usando uma chave estrangeira, indicando a que denúncia o comentário está relacionado.
        - Relação "Muitos para Um" com a tabela "Users":
            - Vários comentários podem estar associados a um único usuário que os postou.

        - Relação "Muitos para Um" com a tabela "Reports":
            - Vários comentários podem estar associados a uma única denúncia.

4. **Tabela de Anexos (Attachments):**
   - `AttachmentID`: Esta é a chave primária da tabela e é gerada automaticamente como uma sequência SERIAL. Ela identifica exclusivamente cada anexo.
   - `FileName`: Armazena o nome do arquivo de anexo.
   - `FileType`: Define o tipo de arquivo de anexo, que pode ser 'Image' (imagem), 'Video' (vídeo) ou 'Document' (documento). Este campo é validado com uma restrição CHECK.
   - `FilePath`: Armazena o caminho do arquivo de anexo.
   - `ReportID`: Esta coluna está relacionada com a tabela "Reports" usando uma chave estrangeira, indicando a que denúncia o anexo está relacionado.
        - Relação "Muitos para Um" com a tabela "Reports":
            - Vários anexos podem estar associados a uma única denúncia.

Essas tabelas foram projetadas para armazenar informações relacionadas a denúncias feitas por usuários em um sistema. Elas permitem que os usuários façam denúncias, postem comentários sobre essas denúncias e anexem arquivos relevantes. Além disso, o esquema inclui informações sobre os próprios usuários, como nome, e-mail e função no sistema. Essas tabelas são interconectadas por meio de chaves estrangeiras para manter a integridade referencial dos dados.

 - Tabela de Usuários
```sql
CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    PASSWORD VARCHAR(22) NOT NULL,
    Role VARCHAR(10) CHECK (Role IN ('User', 'Admin')) NOT NULL
);
```
 - Tabela de Denúncias
```sql
CREATE TABLE Reports (
    ReportID SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT NOT NULL,
    DateTimeSubmitted TIMESTAMPTZ DEFAULT NOW(),
    Status VARCHAR(20) CHECK (Status IN ('Submitted', 'In Review', 'Resolved')) DEFAULT 'Submitted',
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
```
 - Tabela de Comentários
```sql
CREATE TABLE Comments (
    CommentID SERIAL PRIMARY KEY,
    CommentText TEXT NOT NULL,
    DateTimePosted TIMESTAMPTZ DEFAULT NOW(),
    UserID INT,
    ReportID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ReportID) REFERENCES Reports(ReportID)
);
```
 - Tabela de Anexos
```sql
CREATE TABLE Attachments (
    AttachmentID SERIAL PRIMARY KEY,
    FileName VARCHAR(255) NOT NULL,
    FileType VARCHAR(10) CHECK (FileType IN ('Image', 'Video', 'Document')) NOT NULL,
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